<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string
  href?: string
}

const { to, href } = defineProps<Props>()

const isExternal = computed(() => Boolean(href && /^https?:\/\//.test(href)))
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="font-medium text-accent-strong underline-offset-4 hover:underline"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :target="isExternal ? '_blank' : undefined"
  >
    <slot />
  </a>
  <RouterLink
    v-else-if="to"
    :to="to"
    class="font-medium text-accent-strong underline-offset-4 hover:underline"
  >
    <slot />
  </RouterLink>
</template>
