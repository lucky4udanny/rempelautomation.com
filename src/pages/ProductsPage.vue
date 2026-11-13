<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import MediaSlider from '@/components/sections/MediaSlider.vue'
import ProductGrid from '@/components/sections/ProductGrid.vue'
import {
  farmbridgeLotsAngled,
  farmbridgeLotsFlat,
  farmbridgeOffice,
  farmbridgeReceivingReport,
  opsCameraPhoto,
} from '@/content/media'
import { productsCta, productsGrid, productsHero } from '@/content/products'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/products/')

const productScreens = [
  farmbridgeOffice,
  farmbridgeReceivingReport,
  farmbridgeLotsAngled,
  farmbridgeLotsFlat,
  opsCameraPhoto,
]
</script>

<template>
  <PageShell>
    <HeroSection :content="productsHero" />
    <ProductGrid :content="productsGrid" />
    <MediaSlider :images="productScreens" title="Product screens and floor tooling" tone="raised" />
    <CtaBand :content="productsCta" />
  </PageShell>
</template>
