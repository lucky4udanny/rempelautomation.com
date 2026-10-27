<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyList from '@/components/sections/CaseStudyList.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { caseStudiesHero, caseStudyCards, caseStudyCta } from '@/content/caseStudies'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/case-studies/')
</script>

<template>
  <PageShell>
    <HeroSection :content="caseStudiesHero" />
    <CaseStudyList :studies="caseStudyCards" />
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
