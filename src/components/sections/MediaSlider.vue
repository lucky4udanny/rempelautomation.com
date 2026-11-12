<script setup lang="ts">
import { computed, ref } from 'vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { MediaImage } from '@/types/content'

interface Props {
  images: MediaImage[]
  title?: string
  tone?: 'default' | 'raised' | 'ink'
}

const { images, title = '', tone = 'default' } = defineProps<Props>()
const index = ref(0)
const current = computed(() => images[index.value] ?? images[0])

function next(): void {
  index.value = (index.value + 1) % images.length
}

function prev(): void {
  index.value = (index.value - 1 + images.length) % images.length
}
</script>

<template>
  <AppSection v-if="images.length" :tone="tone" size="compact">
    <AppContainer>
      <div class="flex items-end justify-between gap-4">
        <h3 v-if="title" class="font-display text-lg font-semibold">{{ title }}</h3>
        <div v-if="images.length > 1" class="flex gap-2">
          <button type="button" class="rounded-md border border-line px-3 py-1.5 text-sm" @click="prev">
            Previous
          </button>
          <button type="button" class="rounded-md border border-line px-3 py-1.5 text-sm" @click="next">
            Next
          </button>
        </div>
      </div>
      <div class="mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-ink sm:aspect-[2/1]">
        <img
          :src="current.src"
          :alt="current.alt"
          :width="current.width"
          :height="current.height"
          class="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div v-if="images.length > 1" class="mt-3 flex justify-center gap-2">
        <button
          v-for="(image, dotIndex) in images"
          :key="image.src"
          type="button"
          class="h-2.5 w-2.5 rounded-full"
          :class="dotIndex === index ? 'bg-accent' : 'bg-line'"
          :aria-label="`Show image ${dotIndex + 1}`"
          @click="index = dotIndex"
        />
      </div>
    </AppContainer>
  </AppSection>
</template>
