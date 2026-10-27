<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import type { CtaContent } from '@/types/content'

interface Props {
  content: CtaContent
}

defineProps<Props>()
</script>

<template>
  <section class="bg-ink py-16 text-surface-raised md:py-20">
    <AppContainer class="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      <div class="max-w-2xl">
        <AppHeading :level="2">
          <span class="text-surface-raised">{{ content.title }}</span>
        </AppHeading>
        <p v-if="content.body" class="mt-3 text-sm leading-6 text-line">{{ content.body }}</p>
      </div>
      <AppButton :to="content.to" variant="secondary">{{ content.actionLabel }}</AppButton>
    </AppContainer>
  </section>
</template>
