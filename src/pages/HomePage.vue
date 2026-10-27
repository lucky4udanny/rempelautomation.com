<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProofBar from '@/components/sections/ProofBar.vue'
import { homeChanges, homeCta, homeHero, homeProof } from '@/content/home'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/')
</script>

<template>
  <PageShell>
    <HeroSection :content="homeHero" />
    <ProofBar :items="homeProof" />
    <FeatureGrid :content="homeChanges" />
    <CtaBand :content="homeCta" />
  </PageShell>
</template>
