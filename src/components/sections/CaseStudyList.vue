<script setup lang="ts">
import CaseStudyCard from '@/components/sections/CaseStudyCard.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { CaseStudyCardContent } from '@/types/content'

interface Props {
  studies: readonly CaseStudyCardContent[]
  kicker?: string
  title?: string
}

const { kicker = '', title = '' } = defineProps<Props>()
</script>

<template>
  <AppSection>
    <AppContainer>
      <div v-if="title" class="mb-10 max-w-3xl">
        <AppHeading :level="2" :eyebrow="kicker || undefined">{{ title }}</AppHeading>
      </div>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        <CaseStudyCard v-for="study in studies" :key="study.slug" :study="study" />
      </div>
    </AppContainer>
  </AppSection>
</template>
