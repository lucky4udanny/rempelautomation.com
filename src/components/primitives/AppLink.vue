<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string
  href?: string
  tone?: 'default' | 'inverse'
}

const { to, href, tone = 'default' } = defineProps<Props>()

const isExternal = computed(() => Boolean(href && /^https?:\/\//.test(href)))

const linkClass = computed(() =>
  tone === 'inverse'
    ? 'font-medium text-accent underline-offset-4 hover:underline'
    : 'font-medium text-accent-strong underline-offset-4 hover:underline',
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :class="linkClass"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :target="isExternal ? '_blank' : undefined"
  >
    <slot />
  </a>
  <RouterLink v-else-if="to" :to="to" :class="linkClass">
    <slot />
  </RouterLink>
</template>
