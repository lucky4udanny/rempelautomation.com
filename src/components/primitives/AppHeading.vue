<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  level: 1 | 2 | 3
  eyebrow?: string
}

const { level, eyebrow = '' } = defineProps<Props>()
const headingId = useId()

const headingClass = computed(() => {
  if (level === 1) {
    return 'font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl'
  }
  if (level === 2) {
    return 'font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl'
  }
  return 'font-display text-xl font-semibold text-ink'
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <p v-if="eyebrow" class="text-sm font-semibold tracking-wide text-accent-strong uppercase">
      {{ eyebrow }}
    </p>
    <component :is="`h${level}`" :id="headingId" :class="headingClass">
      <slot />
    </component>
  </div>
</template>
