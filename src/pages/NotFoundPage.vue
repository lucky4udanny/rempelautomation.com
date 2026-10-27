<script setup lang="ts">
import { useHead } from '@unhead/vue'
import PageShell from '@/components/layout/PageShell.vue'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import { companyName } from '@/content/site'

useHead({
  title: `Page not found | ${companyName}`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <PageShell>
    <section class="py-24">
      <AppContainer class="max-w-xl">
        <AppHeading :level="1">That page is not here.</AppHeading>
        <p class="mt-4 text-ink-muted">The link may be old, or the address may be mistyped.</p>
        <div class="mt-8">
          <AppButton to="/">Back to home</AppButton>
        </div>
      </AppContainer>
    </section>
  </PageShell>
</template>
