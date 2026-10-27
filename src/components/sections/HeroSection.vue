<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppImage from '@/components/primitives/AppImage.vue'
import type { HeroContent } from '@/types/content'

interface Props {
  content: HeroContent
}

defineProps<Props>()
</script>

<template>
  <section class="py-16 md:py-24">
    <AppContainer class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <AppHeading :level="1" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <div class="mt-6 flex flex-col gap-4 text-base leading-7 text-ink-muted sm:text-lg">
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
      <AppImage v-if="content.image" :image="content.image" :lazy="false" />
    </AppContainer>
  </section>
</template>
