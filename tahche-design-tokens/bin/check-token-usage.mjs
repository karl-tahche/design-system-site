#!/usr/bin/env node
/**
 * check-token-usage.mjs
 *
 * Scans a directory for hex color values that duplicate a real
 * tahche-design-tokens value in plain hardcoded form (`#353dd7`) or as a
 * Tailwind arbitrary value (`bg-[#353dd7]`), instead of the token class
 * (`bg-primary-500`).
 *
 * This is a RATCHET, not a one-shot ban: every real app already has
 * existing hardcoded hex usage from before this system existed (career-web
 * alone had ~95 hits when this script was written — see .token-lint-baseline.json).
 * Rewriting all of that in one pass is a separate, larger cleanup. What this
 * script prevents is *new* hardcoded usage sneaking into a PR going forward.
 *
 * Usage:
 *   node check-token-usage.mjs <dir> [--baseline <file>] [--update-baseline]
 *
 * Exit code 0  — no new violations beyond the baseline.
 * Exit code 1  — new violations found (CI should fail the job).
 *
 * --update-baseline rewrites the baseline file to match what's found right
 * now (use this once, deliberately, when adopting the lint on a new app —
 * never as a way to silence a real new violation).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokensPath = path.join(__dirname, '..', 'build', 'json', 'tokens.json');
const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));

// Universal values that happen to match a token (usually a `-foreground`
// step) but are too generic to treat as signal — plain white/black shows up
// constantly for reasons that have nothing to do with that specific token
// (a modal background, an unrelated icon fill, a box-shadow color). Matching
// on these produced ~50 false "use bg-primary-foreground" suggestions on a
// first real-world run (career-web) that were actually just ordinary white
// backgrounds. Excluded so the lint's suggestions stay trustworthy.
const GENERIC_EXCLUDE = new Set(['#ffffff', '#fff', '#000000', '#000']);

// Build hex -> token-name map (e.g. "#353dd7" -> "color.primary.500")
const hexToToken = new Map();
for (const [group, ramp] of Object.entries(tokens.color || {})) {
  if (typeof ramp !== 'object') continue;
  for (const [step, hex] of Object.entries(ramp)) {
    if (typeof hex !== 'string' || !hex.startsWith('#')) continue;
    if (GENERIC_EXCLUDE.has(hex.toLowerCase())) continue;
    hexToToken.set(hex.toLowerCase(), `${group}-${step}`);
  }
}

const SCAN_EXTENSIONS = new Set(['.vue', '.js', '.ts', '.jsx', '.tsx', '.css', '.scss']);
const SKIP_DIRS = new Set(['node_modules', 'dist', 'build', '.git', '.vitepress', 'coverage']);
const HEX_RE = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;

function expand3to6(hex) {
  if (hex.length !== 3) return hex;
  return hex.split('').map((c) => c + c).join('');
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full, files);
    } else if (SCAN_EXTENSIONS.has(path.extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

function scan(rootDir) {
  const violations = [];
  for (const file of walk(rootDir)) {
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      let m;
      const re = new RegExp(HEX_RE);
      while ((m = re.exec(line))) {
        const hex = ('#' + expand3to6(m[1])).toLowerCase();
        const tokenName = hexToToken.get(hex);
        if (tokenName) {
          violations.push({
            file: path.relative(process.cwd(), file),
            line: i + 1,
            hex,
            tokenName,
          });
        }
      }
    });
  }
  return violations;
}

function violationKey(v) {
  return `${v.file}:${v.line}:${v.hex}`;
}

const args = process.argv.slice(2);
const targetDir = args[0] && !args[0].startsWith('--') ? args[0] : 'src';
const baselineFlagIdx = args.indexOf('--baseline');
const baselinePath = baselineFlagIdx !== -1 ? args[baselineFlagIdx + 1] : '.token-lint-baseline.json';
const updateBaseline = args.includes('--update-baseline');

const found = scan(path.resolve(targetDir));
const baseline = existsSync(baselinePath)
  ? new Set(JSON.parse(readFileSync(baselinePath, 'utf8')))
  : new Set();

if (updateBaseline) {
  const keys = found.map(violationKey).sort();
  writeFileSync(baselinePath, JSON.stringify(keys, null, 2) + '\n');
  console.log(`Wrote ${keys.length} known violations to ${baselinePath}.`);
  process.exit(0);
}

const newViolations = found.filter((v) => !baseline.has(violationKey(v)));

if (newViolations.length === 0) {
  console.log(
    `tahche-design-tokens lint: no new hardcoded token values (${found.length} pre-existing, tracked in ${baselinePath}).`,
  );
  process.exit(0);
}

console.error(`tahche-design-tokens lint: ${newViolations.length} new hardcoded value(s) found — use the token class instead.\n`);
for (const v of newViolations) {
  console.error(`  ${v.file}:${v.line}  ${v.hex}  matches token "${v.tokenName}" — use a class like bg-${v.tokenName}/text-${v.tokenName}/border-${v.tokenName}`);
}
console.error(`\nIf this is a deliberate exception, don't add it to the baseline silently — flag it in the PR instead (see philosophies/working-method.md: "Disagreements get flagged, not silently resolved").`);
process.exit(1);
