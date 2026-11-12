<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyDetail from '@/components/sections/CaseStudyDetail.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import { caseStudyCta, farmBridgeStudy } from '@/content/caseStudies'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/case-studies/farmbridge/')
</script>

<template>
  <PageShell>
    <CaseStudyDetail :study="farmBridgeStudy" />
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
