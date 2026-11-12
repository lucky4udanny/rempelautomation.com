<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import type { CaseStudyCardContent } from '@/types/content'

interface Props {
  study: CaseStudyCardContent
}

defineProps<Props>()
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface-raised shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="flex flex-1 flex-col p-6">
      <p class="text-sm font-semibold text-accent-strong">{{ study.title }}</p>
      <h3 class="mt-2 font-display text-xl font-semibold text-ink">{{ study.subtitle }}</h3>
      <p
        v-if="study.statusNote"
        class="mt-3 rounded-md bg-surface px-3 py-2 text-xs font-medium text-ink-muted"
      >
        {{ study.statusNote }}
      </p>
      <dl class="mt-4 flex flex-1 flex-col gap-3 text-sm leading-6 text-ink-muted">
        <div>
          <dt class="font-semibold text-ink">Problem</dt>
          <dd>{{ study.problem }}</dd>
        </div>
        <div>
          <dt class="font-semibold text-ink">Solution</dt>
          <dd>{{ study.built }}</dd>
        </div>
        <div v-if="study.changed">
          <dt class="font-semibold text-ink">What changed</dt>
          <dd>{{ study.changed }}</dd>
        </div>
      </dl>
      <div class="mt-6">
        <AppButton :to="`/case-studies/${study.slug}/`" variant="secondary">
          Read the case study
        </AppButton>
      </div>
    </div>
  </article>
</template>
