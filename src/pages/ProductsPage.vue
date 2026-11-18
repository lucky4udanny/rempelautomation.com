<script setup lang="ts">
import PageShell from '@/components/layout/PageShell.vue'
import CtaBand from '@/components/sections/CtaBand.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProductDetailBand from '@/components/sections/ProductDetailBand.vue'
import { productDetails, productsCta, productsHero } from '@/content/products'
import { usePageHead } from '@/composables/usePageHead'

usePageHead('/products/')
</script>

<template>
  <PageShell>
    <HeroSection :content="productsHero" />
    <ProductDetailBand v-for="product in productDetails" :key="product.id" :content="product" />
    <CtaBand :content="productsCta" />
  </PageShell>
</template>
