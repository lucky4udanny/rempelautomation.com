import type { RouteRecordRaw } from 'vue-router'
import AboutPage from '@/pages/AboutPage.vue'
import CaseStudiesPage from '@/pages/CaseStudiesPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import FarmBridgePage from '@/pages/FarmBridgePage.vue'
import FarmWorkPage from '@/pages/FarmWorkPage.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import PrivacyPage from '@/pages/PrivacyPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/services/', name: 'services', component: ServicesPage },
  { path: '/case-studies/', name: 'case-studies', component: CaseStudiesPage },
  { path: '/case-studies/farmwork/', name: 'farmwork', component: FarmWorkPage },
  { path: '/case-studies/farmbridge/', name: 'farmbridge', component: FarmBridgePage },
  { path: '/about/', name: 'about', component: AboutPage },
  { path: '/contact/', name: 'contact', component: ContactPage },
  { path: '/privacy/', name: 'privacy', component: PrivacyPage },
  { path: '/404', name: 'not-found-prerender', component: NotFoundPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]
