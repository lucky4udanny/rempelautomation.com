<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import ContactForm from '@/components/sections/ContactForm.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import { contactHero } from '@/content/contact'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/contact/')
</script>

<template>
  <PageShell>
    <HeroSection :content="contactHero" />
    <ContactForm />
  </PageShell>
</template>
