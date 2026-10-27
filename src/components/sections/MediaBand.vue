<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppImage from '@/components/primitives/AppImage.vue'
import type { MediaImage } from '@/types/content'

interface Props {
  image: MediaImage
}

defineProps<Props>()
</script>

<template>
  <section class="py-8 md:py-12">
    <AppContainer class="max-w-4xl">
      <AppImage :image="image" />
    </AppContainer>
  </section>
</template>
