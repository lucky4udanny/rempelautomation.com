<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import type { ProcessStepsContent } from '@/types/content'

interface Props {
  content: ProcessStepsContent
}

defineProps<Props>()
</script>

<template>
  <section class="bg-surface-raised py-16 md:py-24">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <ol class="mt-10 grid gap-8 sm:grid-cols-2">
        <li v-for="(step, index) in content.steps" :key="step.title" class="flex gap-4">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink"
          >
            {{ index + 1 }}
          </span>
          <div>
            <h3 class="font-display text-lg font-semibold text-ink">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-ink-muted">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </AppContainer>
  </section>
</template>
