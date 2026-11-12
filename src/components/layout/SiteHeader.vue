<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppButton from '@/components/primitives/AppButton.vue'
import AppContainer from '@/components/primitives/AppContainer.vue'
import { navPages } from '@/content/routes'
import { companyName } from '@/content/site'
import logoColorUrl from '@/assets/brand/logo-color.svg'
import logoWhiteUrl from '@/assets/brand/logo-white.svg'

const isOpen = ref(false)
const isSolid = ref(false)
const route = useRoute()
const items = navPages().filter((page) => page.path !== '/contact/')

const photoHeroPaths = new Set([
  '/',
  '/services/',
  '/process/',
  '/products/',
  '/case-studies/',
  '/about/',
])

function close(): void {
  isOpen.value = false
}

function isCurrent(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path || route.path.startsWith(path)
}

function navLinkClass(path: string, tone: 'desktop' | 'mobile'): string {
  const current = isCurrent(path)
  if (tone === 'mobile') {
    return current
      ? 'border-l-4 border-accent pl-3 text-accent-strong'
      : 'border-l-4 border-transparent pl-3 text-ink'
  }
  if (current) {
    return isSolid.value
      ? 'text-accent-strong after:bg-accent'
      : 'text-accent after:bg-accent'
  }
  return isSolid.value
    ? 'text-ink hover:text-accent-strong after:bg-transparent'
    : 'text-surface-raised hover:text-accent after:bg-transparent'
}

function updateSolid(): void {
  if (!photoHeroPaths.has(route.path)) {
    isSolid.value = true
    return
  }
  isSolid.value = window.scrollY > 40 || isOpen.value
}

let onScroll: (() => void) | undefined

onMounted(() => {
  if (import.meta.env.SSR) {
    return
  }
  onScroll = updateSolid
  window.addEventListener('scroll', onScroll, { passive: true })
  updateSolid()
})

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll)
  }
})

watch(
  () => route.path,
  () => {
    isOpen.value = false
    updateSolid()
  },
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      isSolid
        ? 'border-b border-line bg-surface-raised/95 text-ink backdrop-blur'
        : 'border-b border-transparent bg-transparent text-surface-raised'
    "
  >
    <AppContainer class="flex items-center justify-between gap-4 py-4">
      <RouterLink to="/" class="flex shrink-0 items-center" :aria-label="`${companyName} home`">
        <img
          :src="isSolid ? logoColorUrl : logoWhiteUrl"
          :alt="companyName"
          width="186"
          height="58"
          class="h-10 w-auto"
        />
      </RouterLink>
      <nav class="hidden items-center gap-6 lg:flex" aria-label="Primary">
        <RouterLink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          class="relative pb-1 text-sm font-medium transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:content-['']"
          :class="navLinkClass(item.path, 'desktop')"
        >
          {{ item.navLabel }}
        </RouterLink>
        <AppButton to="/contact/">Contact</AppButton>
      </nav>
      <button
        type="button"
        class="rounded-md border px-3 py-2 text-sm font-medium lg:hidden"
        :class="isSolid ? 'border-line text-ink' : 'border-white/40 text-surface-raised'"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        @click="
          isOpen = !isOpen;
          updateSolid()
        "
      >
        {{ isOpen ? 'Close' : 'Menu' }}
      </button>
    </AppContainer>
    <div v-show="isOpen" id="mobile-nav" class="border-t border-line bg-surface-raised text-ink lg:hidden">
      <AppContainer class="flex flex-col gap-3 py-4">
        <RouterLink
          v-for="item in items"
          :key="item.path"
          :to="item.path"
          class="text-base font-medium transition-colors"
          :class="navLinkClass(item.path, 'mobile')"
          @click="close"
        >
          {{ item.navLabel }}
        </RouterLink>
        <AppButton to="/contact/" @click="close">Contact</AppButton>
      </AppContainer>
    </div>
  </header>
</template>
