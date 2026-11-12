<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyDetail from '@/components/sections/CaseStudyDetail.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import { caseStudyCta, farmWorkStudy } from '@/content/caseStudies'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/case-studies/farmwork/')
</script>

<template>
  <PageShell>
    <CaseStudyDetail :study="farmWorkStudy" />
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
