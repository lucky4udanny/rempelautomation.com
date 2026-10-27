<script setup lang="ts">
import { useId } from 'vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import type { FaqItem } from '@/types/content'

interface Props {
  title: string
  kicker?: string
  items: FaqItem[]
}

const { title, kicker = '', items } = defineProps<Props>()
const listId = useId()
</script>

<template>
  <section class="py-16 md:py-24" :aria-labelledby="listId">
    <AppContainer class="max-w-3xl">
      <AppHeading :level="2" :eyebrow="kicker">
        <span :id="listId">{{ title }}</span>
      </AppHeading>
      <dl class="mt-10 divide-y divide-line">
        <div v-for="item in items" :key="item.question" class="py-6">
          <dt class="font-display text-lg font-semibold text-ink">{{ item.question }}</dt>
          <dd class="mt-3 text-sm leading-6 text-ink-muted">{{ item.answer }}</dd>
        </div>
      </dl>
    </AppContainer>
  </section>
</template>
