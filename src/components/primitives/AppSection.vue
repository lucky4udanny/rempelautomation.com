<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  as?: 'section' | 'article'
  tone?: 'default' | 'raised' | 'ink'
  size?: 'default' | 'compact'
}

const { as: tag = 'section', tone = 'default', size = 'default' } = defineProps<Props>()

const sizeClass = computed(() => (size === 'compact' ? 'py-8 md:py-12' : 'py-12 md:py-16'))

const toneClass = computed(() => {
  if (tone === 'ink') {
    return 'bg-ink text-surface-raised'
  }
  if (tone === 'raised') {
    return 'bg-surface-raised'
  }
  return 'bg-surface'
})
</script>

<template>
  <component :is="tag" :data-section-tone="tone" :class="[sizeClass, toneClass]">
    <slot />
  </component>
</template>
