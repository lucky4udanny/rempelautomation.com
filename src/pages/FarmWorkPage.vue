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
    <div class="pt-16 md:pt-24">
      <CaseStudyDetail :study="farmWorkStudy" />
    </div>
    <CtaBand :content="caseStudyCta" />
  </PageShell>
</template>
