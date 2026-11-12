<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppImage from '@/components/primitives/AppImage.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { MediaImage } from '@/types/content'

interface Props {
  image: MediaImage
}

defineProps<Props>()
</script>

<template>
  <AppSection size="compact">
    <AppContainer class="max-w-4xl">
      <AppImage :image="image" />
    </AppContainer>
  </AppSection>
</template>
