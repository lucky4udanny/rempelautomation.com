<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ButtonVariant } from '@/types/content'

interface Props {
  variant?: ButtonVariant
  to?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const { variant = 'primary', to, type = 'button', disabled = false } = defineProps<Props>()

const className = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'
  if (variant === 'secondary') {
    return `${base} border border-ink bg-surface-raised text-ink hover:bg-surface`
  }
  if (variant === 'ghost') {
    return `${base} text-ink hover:bg-surface-raised`
  }
  return `${base} bg-ink text-surface-raised hover:bg-ink-muted`
})
</script>

<template>
  <RouterLink v-if="to && !disabled" :to="to" :class="className">
    <slot />
  </RouterLink>
  <button v-else :type="type" :class="className" :disabled="disabled">
    <slot />
  </button>
</template>
