<script setup lang="ts">
interface Props {
  as?: 'div' | 'section' | 'article' | 'nav' | 'header' | 'footer'
}

const { as: tag = 'div' } = defineProps<Props>()
</script>

<template>
  <component :is="tag" class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    <slot />
  </component>
</template>
