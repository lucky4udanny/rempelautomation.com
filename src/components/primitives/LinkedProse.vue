<script setup lang="ts">
import { computed } from 'vue'
import AppLink from '@/components/primitives/AppLink.vue'
import { conduitHref } from '@/content/products'

interface Props {
  text: string
}

const { text } = defineProps<Props>()

interface TextPart {
  type: 'text'
  value: string
}

interface LinkPart {
  type: 'link'
  value: string
}

type Part = TextPart | LinkPart

const parts = computed((): Part[] => {
  const next: Part[] = []
  for (const chunk of text.split(/(Conduit)/g)) {
    if (chunk === '') {
      continue
    }
    if (chunk === 'Conduit') {
      next.push({ type: 'link', value: chunk })
      continue
    }
    next.push({ type: 'text', value: chunk })
  }
  return next
})
</script>

<template>
  <template v-for="(part, index) in parts" :key="index">
    <AppLink v-if="part.type === 'link'" :to="conduitHref">{{ part.value }}</AppLink>
    <template v-else>{{ part.value }}</template>
  </template>
</template>
