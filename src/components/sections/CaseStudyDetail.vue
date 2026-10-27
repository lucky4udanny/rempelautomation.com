<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import BeforeAfterTable from '@/components/sections/BeforeAfterTable.vue'
import type { CaseStudyPageContent } from '@/types/content'

interface Props {
  study: CaseStudyPageContent
}

defineProps<Props>()
</script>

<template>
  <article class="pb-16 md:pb-24">
    <AppContainer class="max-w-3xl">
      <AppHeading :level="1" eyebrow="Case study">{{ study.title }}</AppHeading>
      <p class="mt-4 text-lg font-medium text-ink">{{ study.subtitle }}</p>
      <p class="mt-4 rounded-md border border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted">
        {{ study.unnamedNotice }}
      </p>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">The operation</h2>
        <p v-for="(paragraph, index) in study.operation" :key="index" class="mt-4 leading-7 text-ink-muted">
          {{ paragraph }}
        </p>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">What was broken</h2>
        <p class="mt-4 leading-7 text-ink">{{ study.problemIntro }}</p>
        <ul class="mt-4 list-disc space-y-3 pl-5 leading-7 text-ink-muted">
          <li v-for="(item, index) in study.problem" :key="index">{{ item }}</li>
        </ul>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">What we built</h2>
        <p class="mt-4 leading-7 text-ink">{{ study.builtIntro }}</p>
        <div v-for="block in study.built" :key="block.heading" class="mt-8">
          <h3 class="font-display text-xl font-semibold text-ink">{{ block.heading }}</h3>
          <ul class="mt-3 list-disc space-y-3 pl-5 leading-7 text-ink-muted">
            <li v-for="(item, index) in block.items" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">What changed</h2>
        <div class="mt-6">
          <BeforeAfterTable :rows="study.changedRows" />
        </div>
        <p class="mt-6 leading-7 text-ink">{{ study.closer }}</p>
      </section>
    </AppContainer>
  </article>
</template>
