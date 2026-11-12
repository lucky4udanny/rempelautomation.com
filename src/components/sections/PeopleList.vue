<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { PeopleListContent } from '@/types/content'

interface Props {
  content: PeopleListContent
}

defineProps<Props>()
</script>

<template>
  <AppSection tone="raised">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <ul class="mt-10 grid gap-8 lg:grid-cols-3">
        <li
          v-for="person in content.people"
          :key="person.name"
          class="rounded-lg border border-line bg-surface p-6"
        >
          <h3 class="font-display text-xl font-semibold text-ink">{{ person.name }}</h3>
          <p class="mt-1 text-sm font-medium text-accent-strong">{{ person.role }}</p>
          <div class="mt-4 space-y-3 text-sm leading-6 text-ink-muted">
            <p v-for="(paragraph, index) in person.paragraphs" :key="index">{{ paragraph }}</p>
          </div>
        </li>
      </ul>
    </AppContainer>
  </AppSection>
</template>
