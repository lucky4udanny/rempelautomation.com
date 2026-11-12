<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MediaBand from '@/components/sections/MediaBand.vue'
import { opsControllersPhoto, opsScalePhoto } from '@/content/media'
import {
  servicesBuildingBlocks,
  servicesCta,
  servicesHero,
  servicesOfferings,
  servicesOutcomes,
  servicesPartners,
} from '@/content/services'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/services/')
</script>

<template>
  <PageShell>
    <HeroSection :content="servicesHero" />
    <FeatureGrid :content="servicesOfferings" />
    <FeatureGrid :content="servicesOutcomes" />
    <MediaBand :image="opsControllersPhoto" />
    <FeatureGrid :content="servicesBuildingBlocks" />
    <MediaBand :image="opsScalePhoto" />
    <FeatureGrid :content="servicesPartners" />
    <CtaBand :content="servicesCta" />
  </PageShell>
</template>
