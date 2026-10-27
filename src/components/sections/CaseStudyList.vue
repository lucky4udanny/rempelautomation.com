<script setup lang="ts">
import CaseStudyCard from '@/components/sections/CaseStudyCard.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import type { CaseStudyCardContent } from '@/types/content'

interface Props {
  studies: readonly CaseStudyCardContent[]
}

defineProps<Props>()
</script>

<template>
  <section class="py-16 md:py-24">
    <AppContainer class="grid gap-8 md:grid-cols-2">
      <CaseStudyCard v-for="study in studies" :key="study.slug" :study="study" />
    </AppContainer>
  </section>
</template>
