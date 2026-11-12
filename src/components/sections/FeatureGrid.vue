<script setup lang="ts">
import { ref } from 'vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { FeatureGridContent } from '@/types/content'

interface Props {
  content: FeatureGridContent
}

const { content } = defineProps<Props>()
const openTitle = ref<string | null>(null)

function isOpen(title: string): boolean {
  return openTitle.value === title
}

function open(title: string): void {
  openTitle.value = title
}

function close(title: string): void {
  if (openTitle.value === title) {
    openTitle.value = null
  }
}

function toggle(title: string): void {
  openTitle.value = isOpen(title) ? null : title
}

function onCardFocusOut(title: string, event: FocusEvent): void {
  const next = event.relatedTarget
  if (next instanceof Node && event.currentTarget instanceof Node && event.currentTarget.contains(next)) {
    return
  }
  close(title)
}
</script>

<template>
  <AppSection :tone="content.tone ?? 'default'">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <ul
        class="mt-10 grid gap-4"
        :class="content.items.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'"
      >
        <li
          v-for="item in content.items"
          :key="item.title"
          class="relative rounded-lg border border-line bg-surface-raised shadow-sm transition-shadow duration-500 ease-out"
          :class="item.detail && isOpen(item.title) ? 'z-20 shadow-lg' : 'z-0 hover:shadow-md'"
          @mouseenter="item.detail ? open(item.title) : undefined"
          @mouseleave="item.detail ? close(item.title) : undefined"
          @focusin="item.detail ? open(item.title) : undefined"
          @focusout="item.detail ? onCardFocusOut(item.title, $event) : undefined"
        >
          <button
            v-if="item.detail"
            type="button"
            class="w-full p-6 text-left"
            :aria-expanded="isOpen(item.title)"
            @click="toggle(item.title)"
          >
            <h3 class="font-display text-lg font-semibold text-ink">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-ink-muted">{{ item.body }}</p>
          </button>
          <div v-else class="p-6">
            <h3 class="font-display text-lg font-semibold text-ink">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-ink-muted">{{ item.body }}</p>
          </div>

          <div
            v-if="item.detail"
            class="feature-card-detail absolute inset-x-0 top-full z-20"
            :class="{ 'is-open': isOpen(item.title) }"
            :aria-hidden="!isOpen(item.title)"
          >
            <p class="rounded-b-lg border border-t-0 border-line bg-surface-raised px-6 pb-6 pt-1 text-sm leading-6 text-ink shadow-lg">
              {{ item.detail }}
            </p>
          </div>
        </li>
      </ul>
    </AppContainer>
  </AppSection>
</template>
