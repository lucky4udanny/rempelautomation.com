<script setup lang="ts">
import type { MediaImage } from '@/types/content'

interface Props {
  image: MediaImage
  lazy?: boolean
  rounded?: boolean
  cover?: boolean
}

const { image, lazy = true, rounded = true, cover = true } = defineProps<Props>()
</script>

<template>
  <figure :class="rounded ? 'overflow-hidden rounded-lg' : 'overflow-hidden'">
    <img
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
      :class="cover ? 'h-auto w-full object-cover' : 'h-auto w-full object-contain'"
    />
    <figcaption v-if="image.caption" class="px-3 py-2 text-xs text-ink-muted">
      {{ image.caption }}
    </figcaption>
  </figure>
</template>
