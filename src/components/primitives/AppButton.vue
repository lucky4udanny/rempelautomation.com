<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export type AppButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

interface Props {
  variant?: AppButtonVariant
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const { variant = 'primary', to, href, type = 'button', disabled = false } = defineProps<Props>()

const className = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'
  if (variant === 'secondary') {
    return `${base} border border-line bg-surface-raised text-ink hover:bg-surface`
  }
  if (variant === 'ghost') {
    return `${base} text-inherit hover:bg-black/5`
  }
  if (variant === 'outline-light') {
    return `${base} border border-white/70 text-surface-raised hover:bg-white/10`
  }
  return `${base} bg-accent text-ink hover:bg-accent-strong hover:text-surface-raised`
})

const isExternal = computed(() => Boolean(href && /^https?:\/\//.test(href)))
</script>

<template>
  <a
    v-if="href && !disabled"
    :href="href"
    :class="className"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :target="isExternal ? '_blank' : undefined"
  >
    <slot />
  </a>
  <RouterLink v-else-if="to && !disabled" :to="to" :class="className">
    <slot />
  </RouterLink>
  <button v-else :type="type" :class="className" :disabled="disabled">
    <slot />
  </button>
</template>
