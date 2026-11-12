<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppLink from '@/components/primitives/AppLink.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import BeforeAfterTable from '@/components/sections/BeforeAfterTable.vue'
import MediaSlider from '@/components/sections/MediaSlider.vue'
import type { CaseStudyPageContent } from '@/types/content'

interface Props {
  study: CaseStudyPageContent
}

defineProps<Props>()
</script>

<template>
  <AppSection as="article">
    <AppContainer class="max-w-3xl">
      <AppHeading :level="1" eyebrow="Case study">{{ study.title }}</AppHeading>
      <p class="mt-4 text-lg font-medium text-ink">{{ study.subtitle }}</p>
      <p
        v-if="study.unnamedNotice"
        class="mt-4 rounded-md border border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted"
      >
        {{ study.unnamedNotice }}
      </p>
      <p
        v-if="study.statusNote"
        class="mt-3 rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink"
      >
        {{ study.statusNote }}
      </p>
      <p v-if="study.externalProduct" class="mt-4 text-sm">
        <AppLink :href="study.externalProduct.href">{{ study.externalProduct.label }}</AppLink>
      </p>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">The operation</h2>
        <p v-for="(paragraph, index) in study.operation" :key="index" class="mt-4 leading-7 text-ink-muted">
          {{ paragraph }}
        </p>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">The problem</h2>
        <p class="mt-4 leading-7 text-ink">{{ study.problemIntro }}</p>
        <ul class="mt-4 list-disc space-y-3 pl-5 leading-7 text-ink-muted">
          <li v-for="(item, index) in study.problem" :key="index">{{ item }}</li>
        </ul>
      </section>

      <section class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">The solution</h2>
        <p class="mt-4 leading-7 text-ink">{{ study.builtIntro }}</p>
        <div v-for="block in study.built" :key="block.heading" class="mt-8">
          <h3 class="font-display text-xl font-semibold text-ink">{{ block.heading }}</h3>
          <ul class="mt-3 list-disc space-y-3 pl-5 leading-7 text-ink-muted">
            <li v-for="(item, index) in block.items" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section v-if="study.changedRows?.length" class="mt-12">
        <h2 class="font-display text-2xl font-bold text-ink">What changed</h2>
        <div class="mt-6">
          <BeforeAfterTable :rows="study.changedRows" />
        </div>
      </section>

      <p class="mt-8 leading-7 text-ink">{{ study.closer }}</p>
    </AppContainer>
  </AppSection>

  <MediaSlider
    v-if="study.screens?.length"
    :images="study.screens"
    title="Product screens"
    tone="raised"
  />
</template>
