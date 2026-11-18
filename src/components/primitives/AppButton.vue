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
  /** Show an external-link icon. Defaults on for http(s) href. */
  externalIcon?: boolean
}

const props = defineProps<Props>()

const variant = computed(() => props.variant ?? 'primary')
const type = computed(() => props.type ?? 'button')
const disabled = computed(() => props.disabled ?? false)

const className = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'
  if (variant.value === 'secondary') {
    return `${base} border border-line bg-surface-raised text-ink hover:bg-surface`
  }
  if (variant.value === 'ghost') {
    return `${base} text-inherit hover:bg-black/5`
  }
  if (variant.value === 'outline-light') {
    return `${base} border border-white/70 text-surface-raised hover:bg-white/10`
  }
  return `${base} bg-accent text-ink hover:bg-accent-strong hover:text-surface-raised`
})

const isExternalHref = computed(() => Boolean(props.href && /^https?:\/\//.test(props.href)))
const showExternalIcon = computed(() =>
  props.externalIcon !== undefined ? props.externalIcon : isExternalHref.value,
)
</script>

<template>
  <a
    v-if="props.href && !disabled"
    :href="props.href"
    :class="className"
    :rel="isExternalHref ? 'noopener noreferrer' : undefined"
    :target="isExternalHref ? '_blank' : undefined"
  >
    <slot />
    <svg
      v-if="showExternalIcon"
      class="h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clip-rule="evenodd"
      />
    </svg>
    <span v-if="showExternalIcon" class="sr-only">(opens in a new tab)</span>
  </a>
  <RouterLink v-else-if="props.to && !disabled" :to="props.to" :class="className">
    <slot />
  </RouterLink>
  <button v-else :type="type" :class="className" :disabled="disabled">
    <slot />
  </button>
</template>
