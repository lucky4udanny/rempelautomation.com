<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { ComparisonTableContent } from '@/types/content'

interface Props {
  content: ComparisonTableContent
}

defineProps<Props>()
</script>

<template>
  <AppSection tone="raised">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <div class="mt-10 overflow-x-auto rounded-lg border border-line">
        <table class="w-full min-w-[48rem] text-left text-sm">
          <caption class="sr-only">{{ content.title }}</caption>
          <thead class="bg-surface-raised">
            <tr>
              <th scope="col" class="px-4 py-3 font-semibold text-ink">Your alternative</th>
              <th scope="col" class="px-4 py-3 font-semibold text-ink">What you get</th>
              <th scope="col" class="px-4 py-3 font-semibold text-ink">Where it falls short</th>
              <th scope="col" class="px-4 py-3 font-semibold text-ink">What we do instead</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in content.rows" :key="index" class="border-t border-line align-top">
              <th scope="row" class="px-4 py-3 font-semibold text-ink">{{ row.alternative }}</th>
              <td class="px-4 py-3 text-ink-muted">{{ row.gets }}</td>
              <td class="px-4 py-3 text-ink-muted">{{ row.shortfall }}</td>
              <td class="px-4 py-3 text-ink">{{ row.instead }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AppContainer>
  </AppSection>
</template>
