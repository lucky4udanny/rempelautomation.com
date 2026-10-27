<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppContainer from '@/components/primitives/AppContainer.vue'
import type { ProofItem } from '@/types/content'

interface Props {
  items: ProofItem[]
}

defineProps<Props>()
</script>

<template>
  <section class="border-y border-line bg-surface-raised py-10 md:py-14">
    <AppContainer class="grid gap-8 md:grid-cols-3">
      <component
        :is="item.to ? RouterLink : 'div'"
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        class="block"
      >
        <p class="text-sm font-semibold text-accent-strong">{{ item.title }}</p>
        <p class="mt-2 text-sm leading-6 text-ink-muted">{{ item.body }}</p>
      </component>
    </AppContainer>
  </section>
</template>
