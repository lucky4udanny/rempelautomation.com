<script setup lang="ts">
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import AppHeading from '@/components/primitives/AppHeading.vue'
import AppSection from '@/components/primitives/AppSection.vue'
import LinkedProse from '@/components/primitives/LinkedProse.vue'
import MediaSlider from '@/components/sections/MediaSlider.vue'
import type { ProductDetailContent } from '@/types/content'

interface Props {
  content: ProductDetailContent
}

const { content } = defineProps<Props>()
</script>

<template>
  <AppSection :id="content.id" :tone="content.tone ?? 'default'" class="scroll-mt-28">
    <AppContainer>
      <div class="max-w-3xl">
        <AppHeading :level="2" :eyebrow="content.owner">{{ content.name }}</AppHeading>
        <p class="mt-4 text-base leading-7 text-ink">
          <LinkedProse :text="content.purpose" />
        </p>
        <p class="mt-4 text-base leading-7 text-ink-muted">
          <LinkedProse :text="content.audience" />
        </p>
      </div>

      <div class="mt-10">
        <h3 class="font-display text-lg font-semibold text-ink">Benefits</h3>
        <ul class="mt-4 space-y-3 text-sm leading-6 text-ink-muted sm:text-base">
          <li v-for="benefit in content.benefits" :key="benefit" class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><LinkedProse :text="benefit" /></span>
          </li>
        </ul>
      </div>

      <div v-if="content.domains?.length" class="mt-12 space-y-10">
        <h3 class="font-display text-lg font-semibold text-ink">Features</h3>
        <div v-for="domain in content.domains" :key="domain.title" class="max-w-3xl">
          <h4 class="font-display text-base font-semibold text-ink">{{ domain.title }}</h4>
          <p v-if="domain.purpose" class="mt-2 text-sm leading-6 text-ink-muted sm:text-base">
            <LinkedProse :text="domain.purpose" />
          </p>
          <ul
            v-if="domain.benefits.length"
            class="mt-3 space-y-2 text-sm leading-6 text-ink-muted sm:text-base"
          >
            <li v-for="benefit in domain.benefits" :key="benefit" class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span><LinkedProse :text="benefit" /></span>
            </li>
          </ul>
        </div>
      </div>

      <p v-if="content.boundary" class="mt-10 max-w-3xl text-sm leading-6 text-ink-muted sm:text-base">
        <LinkedProse :text="content.boundary" />
      </p>

      <div v-if="content.caseStudyTo || content.externalHref" class="mt-8 flex flex-wrap gap-3">
        <AppButton v-if="content.caseStudyTo" :to="content.caseStudyTo" variant="secondary">
          {{ content.caseStudyLabel ?? 'Read the case study' }}
        </AppButton>
        <AppButton
          v-if="content.externalHref"
          :href="content.externalHref"
          variant="secondary"
          :external-icon="true"
        >
          {{ content.externalLabel ?? 'Product site' }}
        </AppButton>
      </div>

      <div v-if="content.screens?.length" class="mt-12">
        <MediaSlider
          :images="content.screens"
          :title="`${content.name} screens`"
          fit="contain"
          embedded
        />
      </div>
    </AppContainer>
  </AppSection>
</template>
