<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProseSection from '@/components/sections/ProseSection.vue'
import { privacyHero, privacySections } from '@/content/privacy'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/privacy/')
</script>

<template>
  <PageShell>
    <HeroSection :content="privacyHero" />
    <ProseSection :sections="privacySections" />
  </PageShell>
</template>
