<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import { navPages } from '@/content/routes'
import { companyName } from '@/content/site'
import logoUrl from '@/assets/brand/logo-color.svg'

const isOpen = ref(false)
const items = navPages().filter((page) => page.path !== '/contact/')

function close(): void {
  isOpen.value = false
}
</script>

<template>
  <header class="border-b border-line bg-surface-raised">
    <AppContainer class="flex items-center justify-between gap-4 py-4">
      <RouterLink to="/" class="flex shrink-0 items-center" :aria-label="`${companyName} home`">
        <img :src="logoUrl" :alt="companyName" width="186" height="58" class="h-10 w-auto" />
      </RouterLink>
      <nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
        <RouterLink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          class="text-sm font-medium text-ink hover:text-accent-strong"
        >
          {{ item.navLabel }}
        </RouterLink>
        <AppButton to="/contact/">Contact</AppButton>
      </nav>
      <button
        type="button"
        class="rounded-md border border-line px-3 py-2 text-sm font-medium md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? 'Close' : 'Menu' }}
      </button>
    </AppContainer>
    <div v-show="isOpen" id="mobile-nav" class="border-t border-line md:hidden">
      <AppContainer class="flex flex-col gap-3 py-4">
        <RouterLink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          class="text-base font-medium text-ink"
          @click="close"
        >
          {{ item.navLabel }}
        </RouterLink>
        <AppButton to="/contact/" @click="close">Contact</AppButton>
      </AppContainer>
    </div>
  </header>
</template>
