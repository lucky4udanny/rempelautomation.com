<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyDetail from '@/components/sections/CaseStudyDetail.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import { caseStudyCta, plantTimeStudy } from '@/content/caseStudies'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/case-studies/plant-time/')
</script>

<template>
  <PageShell>
    <CaseStudyDetail :study="plantTimeStudy" />
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
