<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { ProseSectionBlock } from '@/types/content'

interface Props {
  title?: string
  kicker?: string
  paragraphs?: string[]
  sections?: ProseSectionBlock[]
}

const { title = '', kicker = '', paragraphs = [], sections = [] } = defineProps<Props>()
</script>

<template>
  <AppSection>
    <AppContainer class="max-w-3xl">
      <AppHeading v-if="title" :level="2" :eyebrow="kicker">{{ title }}</AppHeading>
      <div class="flex flex-col gap-4 text-base leading-7 text-ink-muted" :class="{ 'mt-6': title }">
        <p v-for="(paragraph, index) in paragraphs" :key="`p-${index}`">{{ paragraph }}</p>
        <section v-for="(block, blockIndex) in sections" :key="block.heading" :class="{ 'mt-8': blockIndex > 0 || paragraphs.length }">
          <h2 class="font-display text-xl font-semibold text-ink">{{ block.heading }}</h2>
          <div class="mt-3 flex flex-col gap-3">
            <p v-for="(paragraph, index) in block.paragraphs" :key="`${block.heading}-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </section>
        <slot />
      </div>
    </AppContainer>
  </AppSection>
</template>
