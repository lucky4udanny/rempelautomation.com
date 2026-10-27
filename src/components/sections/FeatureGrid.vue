<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import type { FeatureGridContent } from '@/types/content'

interface Props {
  content: FeatureGridContent
}

defineProps<Props>()
</script>

<template>
  <section class="py-16 md:py-24">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <ul class="mt-10 grid gap-8 md:grid-cols-3">
        <li v-for="item in content.items" :key="item.title" class="rounded-lg bg-surface-raised p-6 shadow-sm">
          <h3 class="font-display text-lg font-semibold text-ink">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-ink-muted">{{ item.body }}</p>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>
