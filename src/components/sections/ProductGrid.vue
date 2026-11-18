<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import LinkedProse from '@/components/primitives/LinkedProse.vue'
import type { ProductGridContent } from '@/types/content'

interface Props {
  content: ProductGridContent
}

const { content } = defineProps<Props>()

function productPath(id: string): string {
  return `/products/#${id}`
}
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
      <ul class="mt-10 grid gap-6 lg:grid-cols-3">
        <li v-for="item in content.items" :key="item.id">
          <RouterLink
            :to="productPath(item.id)"
            class="group flex h-full flex-col overflow-hidden rounded-lg border border-line shadow-sm transition-colors duration-300 scroll-mt-28"
            :class="
              content.tone === 'raised'
                ? 'bg-surface hover:bg-ink hover:text-surface-raised'
                : 'bg-surface-raised hover:bg-ink hover:text-surface-raised'
            "
          >
            <div v-if="item.image" class="aspect-[16/10] overflow-hidden bg-ink">
              <img
                :src="item.image.src"
                :alt="item.image.alt"
                :width="item.image.width"
                :height="item.image.height"
                class="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="font-display text-xl font-semibold">{{ item.name }}</h3>
                <span
                  v-if="item.status"
                  class="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-strong group-hover:bg-accent/30"
                >
                  {{ item.status }}
                </span>
              </div>
              <p
                class="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted group-hover:text-surface-raised/70"
              >
                {{ item.owner }}
              </p>
              <p class="mt-4 text-sm leading-6 text-ink-muted group-hover:text-surface-raised/85">
                <LinkedProse :text="item.summary" />
              </p>
              <ul
                v-if="item.points.length"
                class="mt-4 space-y-2 text-sm leading-6 text-ink group-hover:text-surface-raised"
              >
                <li v-for="point in item.points" :key="point" class="flex gap-2">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span><LinkedProse :text="point" /></span>
                </li>
              </ul>
            </div>
          </RouterLink>
        </li>
      </ul>
    </AppContainer>
  </AppSection>
</template>
