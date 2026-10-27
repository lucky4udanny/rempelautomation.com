<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FaqList from '@/components/sections/FaqList.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { aboutAi, aboutCta, aboutFaqs, aboutHero, aboutWho } from '@/content/about'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/about/')
</script>

<template>
  <PageShell>
    <HeroSection :content="aboutHero" />
    <FeatureGrid :content="aboutWho" />
    <FeatureGrid :content="aboutAi" />
    <FaqList title="Questions we already get" kicker="Continuity" :items="aboutFaqs" />
    <CtaBand :content="aboutCta" />
  </PageShell>
</template>
