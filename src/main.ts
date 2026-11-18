import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './styles/main.css'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 112, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})
