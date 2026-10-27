<script setup lang="ts">
import type { MediaImage } from '@/types/content'

interface Props {
  image: MediaImage
  lazy?: boolean
}

const { image, lazy = true } = defineProps<Props>()
</script>

<template>
  <figure class="overflow-hidden rounded-lg bg-line">
    <img
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
      class="h-auto w-full object-cover"
    />
    <figcaption class="px-3 py-2 text-xs text-ink-muted">
      {{ image.caption }}
      <span class="block sm:inline sm:before:content-[' '] ">
        Photo:
        <a :href="image.sourceUrl" class="underline-offset-2 hover:underline" rel="license noopener">
          {{ image.credit }}
        </a>
        ,
        <a :href="image.licenseUrl" class="underline-offset-2 hover:underline" rel="license noopener">
          {{ image.license }}
        </a>
        .
      </span>
    </figcaption>
  </figure>
</template>
