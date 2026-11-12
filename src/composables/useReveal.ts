import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

export function useReveal() {
  const el = useTemplateRef<HTMLElement>('reveal')
  const isVisible = ref(false)

  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (import.meta.env.SSR || !el.value) {
      isVisible.value = true
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isVisible.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, isVisible }
}
