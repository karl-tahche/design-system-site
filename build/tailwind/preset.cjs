// GENERATED FILE — do not edit by hand.
// Source of truth: tahche-design-tokens/tokens/*.json
// Rebuilds on every merge to main via Style Dictionary (see build.mjs).
//
// Ships one composite ".text-{style}" class per named typography style
// (e.g. .text-heading-h2 { font-size: 36px; line-height: 44px; font-weight: 800; ... })
// via a Tailwind plugin, alongside the usual theme.extend values. Prefer these
// over separately combining text-{size} + font-{weight} utilities, which can
// drift apart independently — see build.mjs for why.
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "50": "#f2f3ff",
          "100": "#e0e2ff",
          "200": "#bcbff5",
          "300": "#8d92eb",
          "400": "#555de0",
          "500": "#353dd7",
          "600": "#272eb8",
          "700": "#1e248f",
          "800": "#0c1166",
          "900": "#060945",
          "foreground": "#ffffff"
        },
        "secondary": {
          "50": "#fffaeb",
          "100": "#fff4d1",
          "200": "#ffeba8",
          "300": "#ffe07a",
          "400": "#ffd857",
          "500": "#fbd249",
          "600": "#e8bf35",
          "700": "#d1a81f",
          "800": "#b58d09",
          "900": "#997500",
          "foreground": "#141414"
        },
        "neutral": {
          "50": "#f7f9ff",
          "100": "#f5f6fc",
          "200": "#edeef2",
          "300": "#dddee3",
          "400": "#cccdd1",
          "500": "#b3b4b8",
          "600": "#737375",
          "700": "#4f4f4f",
          "750": "#3f3f3f",
          "800": "#2e2e2e",
          "900": "#141414",
          "foreground": "#141414"
        },
        "success": {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "foreground": "#141414"
        },
        "warning": {
          "50": "#fffbeb",
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "foreground": "#141414"
        },
        "destructive": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "foreground": "#141414"
        },
        "brand": {
          "blue": "#2232d7",
          "gold": "#fbd24d"
        },
        "request": {
          "facilities": "#ef9a49",
          "cashAdvance": "#a954b7",
          "room": "#ef7d7c",
          "pettyCash": "#e255ac",
          "procurement": "#8277bb",
          "businessTrip": "#6bbfaf",
          "coe": "#d1a81f"
        },
        "extended": {
          "muted-blue-gray": "#667085",
          "dark-slate": "#101828",
          "charcoal": "#2f3537",
          "indigo-navy": "#393960"
        }
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "Arial",
          "Helvetica",
          "sans-serif"
        ],
        "mono": [
          "'SF Mono'",
          "'Cascadia Code'",
          "Consolas",
          "monospace"
        ]
      },
      "fontSize": {
        "display-large": [
          "52px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.02em"
          }
        ],
        "display-small": [
          "44px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h1": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h2": [
          "36px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h3": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h4": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h5": [
          "24px",
          {
            "lineHeight": "32px",
            "letterSpacing": "-0.02em"
          }
        ],
        "heading-h6": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "-0.02em"
          }
        ],
        "paragraph-large-regular": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-large-medium": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-large-semibold": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-medium": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-medium-medium": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-small": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-small-medium": [
          "14px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0"
          }
        ],
        "paragraph-xsmall": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0"
          }
        ],
        "label-xsmall": [
          "12px",
          {
            "lineHeight": "15px",
            "letterSpacing": "0"
          }
        ],
        "overline": [
          "12px",
          {
            "lineHeight": "20px",
            "letterSpacing": "1px"
          }
        ]
      },
      "spacing": {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
        "40": "160px",
        "48": "192px"
      },
      "borderRadius": {
        "none": "0px",
        "sm": "6px",
        "md": "8px",
        "lg": "10px",
        "xl": "12px",
        "2xl": "16px",
        "3xl": "20px",
        "full": "9999px"
      },
      "boxShadow": {
        "xsmall": "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "focus-ring": "0px 0px 0px 4px #E1E1FE",
        "small": "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
        "medium": "0px 4px 6px -1px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.1)",
        "large": "0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1)",
        "xlarge": "0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.1)",
        "xxlarge": "0px 25px 50px -12px rgba(16, 24, 40, 0.25)"
      }
    }
  }
,
  "plugins": [
    function ({ addComponents }) {
      addComponents({
  ".text-display-large": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "52px",
    "lineHeight": "56px",
    "fontWeight": "800",
    "letterSpacing": "-0.02em"
  },
  ".text-display-small": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "40px",
    "lineHeight": "48px",
    "fontWeight": "800",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h1": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "40px",
    "lineHeight": "48px",
    "fontWeight": "800",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h2": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "36px",
    "lineHeight": "44px",
    "fontWeight": "800",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h3": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "32px",
    "lineHeight": "40px",
    "fontWeight": "600",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h4": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "28px",
    "lineHeight": "36px",
    "fontWeight": "500",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h5": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "24px",
    "lineHeight": "32px",
    "fontWeight": "500",
    "letterSpacing": "-0.02em"
  },
  ".text-heading-h6": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "20px",
    "lineHeight": "28px",
    "fontWeight": "500",
    "letterSpacing": "-0.02em"
  },
  ".text-paragraph-large-regular": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "18px",
    "lineHeight": "28px",
    "fontWeight": "400"
  },
  ".text-paragraph-large-medium": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "18px",
    "lineHeight": "28px",
    "fontWeight": "500"
  },
  ".text-paragraph-large-semibold": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "18px",
    "lineHeight": "28px",
    "fontWeight": "600"
  },
  ".text-paragraph-medium": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "16px",
    "lineHeight": "24px",
    "fontWeight": "400"
  },
  ".text-paragraph-medium-medium": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "16px",
    "lineHeight": "24px",
    "fontWeight": "500"
  },
  ".text-paragraph-small": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "400"
  },
  ".text-paragraph-small-medium": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "500"
  },
  ".text-paragraph-xsmall": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "12px",
    "lineHeight": "16px",
    "fontWeight": "400"
  },
  ".text-label-xsmall": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "12px",
    "lineHeight": "15px",
    "fontWeight": "500"
  },
  ".text-overline": {
    "fontFamily": "Inter, Arial, Helvetica, sans-serif",
    "fontSize": "12px",
    "lineHeight": "20px",
    "fontWeight": "600",
    "letterSpacing": "1px",
    "textTransform": "uppercase"
  }
});
    },
  ]
};
