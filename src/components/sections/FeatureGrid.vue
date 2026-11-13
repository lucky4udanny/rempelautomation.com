<script setup lang="ts">
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import LinkedProse from '@/components/primitives/LinkedProse.vue'
import type { FeatureGridContent } from '@/types/content'

interface Props {
  content: FeatureGridContent
}

const { content } = defineProps<Props>()
</script>

<template>
  <AppSection :tone="content.tone ?? 'default'">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">
          <LinkedProse :text="content.title" />
        </AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">
          <LinkedProse :text="content.body" />
        </p>
      </div>
      <ul
        class="mt-10 grid gap-4"
        :class="content.items.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'"
      >
        <li
          v-for="item in content.items"
          :key="item.title"
          class="rounded-lg border border-line bg-surface-raised p-6 shadow-sm"
        >
          <h3 class="font-display text-lg font-semibold text-ink">
            <LinkedProse :text="item.title" />
          </h3>
          <p class="mt-3 text-sm leading-6 text-ink-muted">
            <LinkedProse :text="item.body" />
          </p>
        </li>
      </ul>
    </AppContainer>
  </AppSection>
</template>
