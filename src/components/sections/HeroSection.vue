<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import type { HeroContent } from '@/types/content'

interface Props {
  content: HeroContent
}

const { content } = defineProps<Props>()

const bgOffset = ref(0)
let onScroll: (() => void) | undefined

onMounted(() => {
  if (import.meta.env.SSR || content.tone !== 'photo') {
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  if (!window.matchMedia('(pointer: fine)').matches) {
    return
  }
  onScroll = () => {
    bgOffset.value = Math.min(window.scrollY * 0.12, 120)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>

<template>
  <section
    class="relative isolate overflow-hidden"
    :class="
      content.tone === 'photo'
        ? '-mt-[4.75rem] min-h-[88vh] text-surface-raised'
        : 'bg-surface py-12 md:py-16'
    "
  >
    <template v-if="content.tone === 'photo' && content.image">
      <div
        class="absolute inset-0 -z-20 scale-110 bg-ink"
        :style="{ transform: `translate3d(0, ${bgOffset}px, 0)` }"
      >
        <img
          :src="content.image.src"
          :alt="content.image.alt"
          :width="content.image.width"
          :height="content.image.height"
          class="h-full w-full object-cover opacity-70"
          loading="eager"
          decoding="async"
        />
      </div>
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/45" />
    </template>

    <AppContainer
      class="relative"
      :class="content.tone === 'photo' ? 'flex min-h-[88vh] items-center py-28 md:py-32' : ''"
    >
      <div class="max-w-2xl">
        <AppHeading
          :level="1"
          :eyebrow="content.kicker"
          :tone="content.tone === 'photo' ? 'inverse' : 'default'"
        >
          {{ content.title }}
        </AppHeading>
        <div
          class="mt-6 flex flex-col gap-4 text-base leading-7 sm:text-lg"
          :class="content.tone === 'photo' ? 'text-surface-raised/90' : 'text-ink-muted'"
        >
          <p v-for="(lead, index) in content.leads" :key="index">{{ lead }}</p>
        </div>
        <div v-if="content.primaryAction || content.secondaryAction" class="mt-8 flex flex-wrap gap-3">
          <AppButton
            v-if="content.primaryAction"
            :to="content.primaryAction.to"
            :variant="content.primaryAction.variant ?? 'primary'"
          >
            {{ content.primaryAction.label }}
          </AppButton>
          <AppButton
            v-if="content.secondaryAction"
            :to="content.secondaryAction.to"
            :variant="content.secondaryAction.variant ?? 'secondary'"
          >
            {{ content.secondaryAction.label }}
          </AppButton>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
