<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'

interface Props {
  title?: string
  kicker?: string
  paragraphs: string[]
}

const { title = '', kicker = '', paragraphs } = defineProps<Props>()
</script>

<template>
  <AppSection>
    <AppContainer class="max-w-3xl">
      <AppHeading v-if="title" :level="2" :eyebrow="kicker">{{ title }}</AppHeading>
      <div class="flex flex-col gap-4 text-base leading-7 text-ink-muted" :class="{ 'mt-6': title }">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        <slot />
      </div>
    </AppContainer>
  </AppSection>
</template>
