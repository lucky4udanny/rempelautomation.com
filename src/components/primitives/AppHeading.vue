<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  level: 1 | 2 | 3
  eyebrow?: string
  tone?: 'default' | 'inverse'
  id?: string
}

const { level, eyebrow = '', tone = 'default', id } = defineProps<Props>()
const generatedId = useId()
const headingId = computed(() => id ?? generatedId)

const headingClass = computed(() => {
  const color = tone === 'inverse' ? 'text-surface-raised' : 'text-ink'
  if (level === 1) {
    return `font-display text-balance text-3xl font-bold tracking-tight sm:text-5xl ${color}`
  }
  if (level === 2) {
    return `font-display text-balance text-2xl font-bold tracking-tight sm:text-3xl ${color}`
  }
  return `font-display text-xl font-semibold ${color}`
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <p
      v-if="eyebrow"
      class="text-sm font-semibold tracking-wide uppercase"
      :class="tone === 'inverse' ? 'text-accent' : 'text-accent-strong'"
    >
      {{ eyebrow }}
    </p>
    <component :is="`h${level}`" :id="headingId" :class="headingClass">
      <slot />
    </component>
  </div>
</template>
