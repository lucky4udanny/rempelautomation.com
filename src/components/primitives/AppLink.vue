<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  to: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="to"
    class="font-medium text-accent-strong underline-offset-4 hover:underline"
  >
    <slot />
  </RouterLink>
</template>
