<script setup>
const rows = [
  { name: 'Maria Santos', role: 'Recruiter', status: 'Active' },
  { name: 'Jon Cruz', role: 'HR Generalist', status: 'Active' },
  { name: 'Ana Reyes', role: 'Talent Sourcer', status: 'On leave' },
];
</script>

<template>
  <table class="w-full overflow-hidden rounded-md border border-neutral-200 text-left dark:border-neutral-700">
    <thead>
      <tr class="bg-white dark:bg-neutral-800">
        <th class="text-overline px-6 py-3 text-neutral-750 dark:text-neutral-300">Name</th>
        <th class="text-overline px-6 py-3 text-neutral-750 dark:text-neutral-300">Role</th>
        <th class="text-overline px-6 py-3 text-neutral-750 dark:text-neutral-300">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name" class="h-[72px] border-t border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
        <td class="px-6 text-paragraph-small-500 text-neutral-900 dark:text-neutral-100">{{ row.name }}</td>
        <td class="px-6 text-paragraph-small text-neutral-700 dark:text-neutral-300">{{ row.role }}</td>
        <td class="px-6">
          <span class="rounded-full bg-neutral-100 px-3 py-1 text-paragraph-small-500 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">{{ row.status }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
