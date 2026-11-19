<script setup lang="ts">
import { computed } from 'vue'
import AppLink from '@/components/primitives/AppLink.vue'
import { productAnchorHref } from '@/content/products'

interface Props {
  text: string
  tone?: 'default' | 'inverse'
}

const { text, tone = 'default' } = defineProps<Props>()

interface TextPart {
  type: 'text'
  value: string
}

interface LinkPart {
  type: 'link'
  value: string
  to: string
}

type Part = TextPart | LinkPart

const productNamePattern = /(FarmWork|FarmBridge|Conduit)/g

const parts = computed((): Part[] => {
  const next: Part[] = []
  for (const chunk of text.split(productNamePattern)) {
    if (chunk === '') {
      continue
    }
    const href = productAnchorHref(chunk)
    if (href) {
      next.push({ type: 'link', value: chunk, to: href })
      continue
    }
    next.push({ type: 'text', value: chunk })
  }
  return next
})
</script>

<template>
  <template v-for="(part, index) in parts" :key="index">
    <AppLink v-if="part.type === 'link'" :to="part.to" :tone="tone">{{ part.value }}</AppLink>
    <template v-else>{{ part.value }}</template>
  </template>
</template>
