<script setup lang="ts">
import CaseStudyCard from '@/components/sections/CaseStudyCard.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { CaseStudyCardContent } from '@/types/content'

interface Props {
  studies: readonly CaseStudyCardContent[]
}

defineProps<Props>()
</script>

<template>
  <AppSection>
    <AppContainer class="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      <CaseStudyCard v-for="study in studies" :key="study.slug" :study="study" />
    </AppContainer>
  </AppSection>
</template>
