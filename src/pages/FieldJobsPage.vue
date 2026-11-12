<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CaseStudyDetail from '@/components/sections/CaseStudyDetail.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import { caseStudyCta, fieldJobsStudy } from '@/content/caseStudies'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/case-studies/field-jobs/')
</script>

<template>
  <PageShell>
    <CaseStudyDetail :study="fieldJobsStudy" />
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
