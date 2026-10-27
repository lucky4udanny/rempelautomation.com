<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'

interface Props {
  title?: string
  kicker?: string
  paragraphs: string[]
}

const { title = '', kicker = '', paragraphs } = defineProps<Props>()
</script>

<template>
  <section class="py-16 md:py-24">
    <AppContainer class="max-w-3xl">
      <AppHeading v-if="title" :level="2" :eyebrow="kicker">{{ title }}</AppHeading>
      <div class="mt-6 flex flex-col gap-4 text-base leading-7 text-ink-muted">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        <slot />
      </div>
    </AppContainer>
  </section>
</template>
