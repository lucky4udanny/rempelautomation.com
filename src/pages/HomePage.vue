<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyList from '@/components/sections/CaseStudyList.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProcessLoop from '@/components/sections/ProcessLoop.vue'
import ProductGrid from '@/components/sections/ProductGrid.vue'
import {
  caseStudyCards,
  homeAdvantage,
  homeCta,
  homeHero,
  homeIndustries,
  homeOutcomes,
  homeProcessLoop,
  homeProducts,
} from '@/content/home'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/')
</script>

<template>
  <PageShell>
    <HeroSection :content="homeHero" />
    <FeatureGrid :content="homeAdvantage" />
    <FeatureGrid :content="homeOutcomes" />
    <FeatureGrid :content="homeIndustries" />
    <ProductGrid :content="homeProducts" />
    <CaseStudyList :studies="caseStudyCards" />
    <ProcessLoop :content="homeProcessLoop" />
    <CtaBand :content="homeCta" />
  </PageShell>
</template>
