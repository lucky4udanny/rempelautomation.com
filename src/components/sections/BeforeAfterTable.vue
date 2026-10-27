<script setup lang="ts">
import type { BeforeAfterRow } from '@/types/content'

interface Props {
  rows: BeforeAfterRow[]
}

defineProps<Props>()
</script>

<template>
  <div class="overflow-x-auto rounded-lg border border-line">
    <table class="w-full min-w-[32rem] text-left text-sm">
      <caption class="sr-only">Before and after</caption>
      <thead class="bg-surface-raised">
        <tr>
          <th scope="col" class="px-4 py-3 font-semibold text-ink">Before</th>
          <th scope="col" class="px-4 py-3 font-semibold text-ink">After</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" class="border-t border-line">
          <td class="px-4 py-3 text-ink-muted">{{ row.before }}</td>
          <td class="px-4 py-3 text-ink">{{ row.after }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
