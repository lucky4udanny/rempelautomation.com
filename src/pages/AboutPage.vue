<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import PeopleList from '@/components/sections/PeopleList.vue'
import {
  aboutAi,
  aboutCta,
  aboutHero,
  aboutPeople,
  aboutValues,
} from '@/content/about'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/about/')
</script>

<template>
  <PageShell>
    <HeroSection :content="aboutHero" />
    <FeatureGrid :content="aboutValues" />
    <PeopleList :content="aboutPeople" />
    <FeatureGrid :content="aboutAi" />
    <CtaBand :content="aboutCta" />
  </PageShell>
</template>
