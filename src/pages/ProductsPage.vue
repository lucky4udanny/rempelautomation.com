<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MediaSlider from '@/components/sections/MediaSlider.vue'
import ProductGrid from '@/components/sections/ProductGrid.vue'
import {
  farmbridgeLotsAngled,
  farmworkIpadAngled,
  farmworkPhoneAngled,
} from '@/content/media'
import { productsCta, productsGrid, productsHero } from '@/content/products'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/products/')

const productScreens = [farmworkIpadAngled, farmworkPhoneAngled, farmbridgeLotsAngled]
</script>

<template>
  <PageShell>
    <HeroSection :content="productsHero" />
    <ProductGrid :content="productsGrid" />
    <MediaSlider :images="productScreens" title="FarmWork and FarmBridge screens" tone="raised" />
    <CtaBand :content="productsCta" />
  </PageShell>
</template>
