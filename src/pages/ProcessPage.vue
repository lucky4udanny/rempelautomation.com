<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProcessLoop from '@/components/sections/ProcessLoop.vue'
import { processCta, processHero, processLoop } from '@/content/process'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/process/')
</script>

<template>
  <PageShell>
    <HeroSection :content="processHero" />
    <ProcessLoop :content="processLoop" />
    <CtaBand :content="processCta" />
  </PageShell>
</template>
