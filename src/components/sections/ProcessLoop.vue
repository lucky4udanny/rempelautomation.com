<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import LinkedProse from '@/components/primitives/LinkedProse.vue'
import type { ProcessLoopContent } from '@/types/content'

interface Props {
  content: ProcessLoopContent
}

const { content } = defineProps<Props>()
const headingId = useId()
const activeIndex = ref(0)
const pathIndex = ref(0)
const hoverIndex = ref<number | null>(null)
const chapterElements = ref<HTMLElement[]>([])

const activeStage = computed(() => content.stages[activeIndex.value] ?? content.stages[0])
const displayIndex = computed(() => hoverIndex.value ?? activeIndex.value)
const nodeCount = computed(() => content.stages.length)
const radius = 118
const center = 170

const nodes = computed(() =>
  content.stages.map((stage, index) => {
    const angle = (Math.PI * 2 * index) / nodeCount.value - Math.PI / 2
    return {
      stage,
      index,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }),
)

const dashOffset = computed(() => {
  const circumference = 2 * Math.PI * radius
  return circumference * (1 - activeIndex.value / nodeCount.value)
})

function setChapterRef(el: unknown, index: number): void {
  if (el instanceof HTMLElement) {
    chapterElements.value[index] = el
  }
}

function select(index: number): void {
  activeIndex.value = index
  pathIndex.value = 0
  if (content.compact) {
    return
  }
  void nextTick(() => {
    chapterElements.value[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function next(): void {
  select((activeIndex.value + 1) % nodeCount.value)
}

function prev(): void {
  select((activeIndex.value - 1 + nodeCount.value) % nodeCount.value)
}

function onKey(event: KeyboardEvent): void {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    next()
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prev()
  }
}

let observer: IntersectionObserver | undefined

onMounted(() => {
  if (import.meta.env.SSR || content.compact) {
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible?.target) {
        return
      }
      const index = Number((visible.target as HTMLElement).dataset.index)
      if (!Number.isNaN(index)) {
        activeIndex.value = index
      }
    },
    { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] },
  )
  for (const el of chapterElements.value) {
    if (el) {
      observer.observe(el)
    }
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

watch(
  () => activeStage.value.id,
  () => {
    pathIndex.value = 0
  },
)
</script>

<template>
  <AppSection>
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :id="headingId" :level="2" :eyebrow="content.kicker">{{ content.title }}</AppHeading>
        <p v-if="content.body" class="mt-4 text-base leading-7 text-ink-muted">{{ content.body }}</p>
      </div>

      <div
        class="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]"
        tabindex="0"
        role="group"
        :aria-labelledby="headingId"
        @keydown="onKey"
      >
        <div class="lg:sticky lg:top-28 lg:self-start">
          <svg viewBox="0 0 340 340" class="mx-auto h-72 w-72" aria-hidden="true">
            <circle
              :cx="center"
              :cy="center"
              :r="radius"
              fill="none"
              class="stroke-line"
              stroke-width="2"
            />
            <circle
              :cx="center"
              :cy="center"
              :r="radius"
              fill="none"
              class="stroke-accent"
              stroke-width="4"
              stroke-linecap="round"
              :stroke-dasharray="2 * Math.PI * radius"
              :stroke-dashoffset="dashOffset"
              :transform="`rotate(-90 ${center} ${center})`"
            />
            <g v-for="node in nodes" :key="node.stage.id">
              <circle
                :cx="node.x"
                :cy="node.y"
                :r="displayIndex === node.index ? 14 : 10"
                :class="displayIndex === node.index ? 'fill-accent' : 'fill-surface-raised stroke-ink'"
                stroke-width="2"
                class="cursor-pointer"
                @click="select(node.index)"
                @mouseenter="hoverIndex = node.index"
                @mouseleave="hoverIndex = null"
              />
              <text
                :x="node.x"
                :y="node.y + 28"
                text-anchor="middle"
                class="fill-ink text-[10px] font-semibold"
              >
                {{ node.stage.ringLabel }}
              </text>
            </g>
          </svg>

          <div class="mt-2 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              class="rounded-md border border-line px-3 py-2 text-sm font-medium"
              @click="prev"
            >
              Previous
            </button>
            <p class="min-w-40 text-center text-sm font-semibold">{{ activeStage.title }}</p>
            <button
              type="button"
              class="rounded-md border border-line px-3 py-2 text-sm font-medium"
              @click="next"
            >
              Next
            </button>
          </div>

          <div v-if="content.moreTo" class="mt-6 hidden lg:block">
            <AppButton :to="content.moreTo" variant="secondary">{{ content.moreLabel }}</AppButton>
          </div>
        </div>

        <div class="space-y-8">
          <article v-if="content.compact" class="rounded-lg border border-line bg-surface-raised p-6">
            <h3 class="font-display text-xl font-semibold">{{ activeStage.title }}</h3>
            <p class="mt-2 text-sm text-ink-muted">
              <LinkedProse :text="activeStage.summary" />
            </p>
            <div class="mt-4 space-y-3 text-sm leading-6 text-ink">
              <p v-for="(paragraph, index) in activeStage.body" :key="index">
                <LinkedProse :text="paragraph" />
              </p>
            </div>
            <div v-if="content.moreTo" class="mt-6 lg:hidden">
              <AppButton :to="content.moreTo" variant="secondary">{{ content.moreLabel }}</AppButton>
            </div>
          </article>

          <template v-else>
            <article
              v-for="(stage, index) in content.stages"
              :key="stage.id"
              :ref="(el) => setChapterRef(el, index)"
              :data-index="index"
              class="scroll-mt-28 rounded-lg border border-line bg-surface-raised p-6 md:p-8"
              :class="activeIndex === index ? 'ring-2 ring-accent' : ''"
            >
              <p class="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                Stage {{ index + 1 }}
              </p>
              <h3 class="mt-2 font-display text-2xl font-semibold">{{ stage.title }}</h3>
              <p class="mt-2 text-sm text-ink-muted">
                <LinkedProse :text="stage.summary" />
              </p>
              <div class="mt-4 space-y-3 text-base leading-7 text-ink">
                <p v-for="(paragraph, pIndex) in stage.body" :key="pIndex">
                  <LinkedProse :text="paragraph" />
                </p>
              </div>

              <div v-if="stage.paths?.length && activeIndex === index" class="mt-6 rounded-md bg-surface p-4">
                <div class="flex flex-wrap items-center gap-2">
                  <button
                    v-for="(path, pIndex) in stage.paths"
                    :key="path.title"
                    type="button"
                    class="rounded-full px-3 py-1.5 text-sm font-medium"
                    :class="
                      pathIndex === pIndex
                        ? 'bg-ink text-surface-raised'
                        : 'border border-line bg-surface-raised text-ink'
                    "
                    @click="pathIndex = pIndex"
                  >
                    {{ path.title }}
                  </button>
                </div>
                <p class="mt-3 text-sm font-semibold text-ink">{{ stage.paths[pathIndex]?.when }}</p>
                <p class="mt-2 text-sm leading-6 text-ink-muted">{{ stage.paths[pathIndex]?.body }}</p>
              </div>
            </article>
          </template>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>
