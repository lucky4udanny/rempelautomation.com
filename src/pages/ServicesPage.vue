<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MediaBand from '@/components/sections/MediaBand.vue'
import { opsScalePhoto } from '@/content/media'
import { servicesCta, servicesHero, servicesOfferings, servicesPartners } from '@/content/services'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/services/')
</script>

<template>
  <PageShell>
    <HeroSection :content="servicesHero" />
    <FeatureGrid :content="servicesOfferings" />
    <MediaBand :image="opsScalePhoto" />
    <FeatureGrid :content="servicesPartners" />
    <CtaBand :content="servicesCta" />
  </PageShell>
</template>
