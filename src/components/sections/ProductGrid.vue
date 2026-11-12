<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppLink from '@/components/primitives/AppLink.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import type { ProductGridContent } from '@/types/content'

interface Props {
  content: ProductGridContent
}

defineProps<Props>()
</script>

<template>
  <AppSection>
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>
      <ul class="mt-10 grid gap-6 lg:grid-cols-3">
        <li
          v-for="item in content.items"
          :key="item.name"
          class="flex flex-col overflow-hidden rounded-lg border border-line bg-surface-raised shadow-sm"
        >
          <div v-if="item.image" class="aspect-[16/10] overflow-hidden bg-ink">
            <img
              :src="item.image.src"
              :alt="item.image.alt"
              :width="item.image.width"
              :height="item.image.height"
              class="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="font-display text-xl font-semibold">{{ item.name }}</h3>
              <span
                v-if="item.status"
                class="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-strong"
              >
                {{ item.status }}
              </span>
            </div>
            <p class="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted">{{ item.owner }}</p>
            <p class="mt-4 text-sm leading-6 text-ink-muted">{{ item.summary }}</p>
            <ul class="mt-4 space-y-2 text-sm leading-6 text-ink">
              <li v-for="point in item.points" :key="point" class="flex gap-2">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{{ point }}</span>
              </li>
            </ul>
            <div class="mt-6 flex flex-wrap gap-3">
              <AppLink v-if="item.href" :href="item.href">Product site</AppLink>
              <AppButton v-if="item.to" :to="item.to" variant="secondary">Case study</AppButton>
            </div>
          </div>
        </li>
      </ul>
    </AppContainer>
  </AppSection>
</template>
