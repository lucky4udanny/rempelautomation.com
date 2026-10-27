<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import type { CaseStudyCardContent } from '@/types/content'

interface Props {
  study: CaseStudyCardContent
}

defineProps<Props>()
</script>

<template>
  <article class="flex h-full flex-col rounded-lg bg-surface-raised p-6 shadow-sm">
    <p class="text-sm font-semibold text-accent-strong">{{ study.title }}</p>
    <h3 class="mt-2 font-display text-xl font-semibold text-ink">{{ study.subtitle }}</h3>
    <dl class="mt-4 flex flex-1 flex-col gap-3 text-sm leading-6 text-ink-muted">
      <div>
        <dt class="font-semibold text-ink">Problem</dt>
        <dd>{{ study.problem }}</dd>
      </div>
      <div>
        <dt class="font-semibold text-ink">What we built</dt>
        <dd>{{ study.built }}</dd>
      </div>
      <div>
        <dt class="font-semibold text-ink">What changed</dt>
        <dd>{{ study.changed }}</dd>
      </div>
    </dl>
    <div class="mt-6">
      <AppButton :to="`/case-studies/${study.slug}/`" variant="secondary">Read the case study</AppButton>
    </div>
  </article>
</template>
