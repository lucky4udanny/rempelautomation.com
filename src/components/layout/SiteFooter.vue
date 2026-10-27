<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppContainer from '@/components/primitives/AppContainer.vue'
import { footerPages } from '@/content/routes'
import { companyName, contactEmail } from '@/content/site'
import logoUrl from '@/assets/brand/logo-color.svg'

const year = new Date().getFullYear()
const links = footerPages()
</script>

<template>
  <footer class="border-t border-line bg-surface-raised">
    <AppContainer class="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
      <div class="max-w-sm">
        <img :src="logoUrl" :alt="companyName" width="186" height="58" class="h-9 w-auto" />
        <p class="mt-4 text-sm text-ink-muted">
          Solutions for operations in southwestern Ontario. We connect people, systems, machines,
          and process, then stay after go-live.
        </p>
        <p class="mt-3 text-sm">
          <a class="font-medium text-accent-strong hover:underline" :href="`mailto:${contactEmail}`">
            {{ contactEmail }}
          </a>
        </p>
      </div>
      <nav aria-label="Footer" class="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
        <RouterLink
          v-for="item in links"
          :key="item.path"
          :to="item.path"
          class="text-ink hover:text-accent-strong"
        >
          {{ item.footerLabel }}
        </RouterLink>
      </nav>
    </AppContainer>
    <AppContainer class="border-t border-line py-4">
      <p class="text-xs text-ink-muted">© {{ year }} {{ companyName }}</p>
    </AppContainer>
  </footer>
</template>
