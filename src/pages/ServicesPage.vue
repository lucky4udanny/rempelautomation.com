<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MediaBand from '@/components/sections/MediaBand.vue'
import ProcessSteps from '@/components/sections/ProcessSteps.vue'
import {
  servicesCta,
  servicesDockImage,
  servicesFit,
  servicesFloor,
  servicesHero,
  servicesHosting,
  servicesProcess,
  servicesTrail,
  servicesWorkforce,
} from '@/content/services'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/services/')
</script>

<template>
  <PageShell>
    <HeroSection :content="servicesHero" />
    <ProcessSteps :content="servicesProcess" />
    <FeatureGrid :content="servicesWorkforce" />
    <FeatureGrid :content="servicesTrail" />
    <FeatureGrid :content="servicesFloor" />
    <MediaBand :image="servicesDockImage" />
    <FeatureGrid :content="servicesFit" />
    <FeatureGrid :content="servicesHosting" />
    <CtaBand :content="servicesCta" />
  </PageShell>
</template>
