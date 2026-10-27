import { useHead } from '@unhead/vue'
import { pageByPath } from '@/content/routes'
import { absoluteUrl, companyName } from '@/content/site'

export function usePageHead(path: string): void {
  const page = pageByPath(path)
  const url = absoluteUrl(path)
  const title = page?.title ?? companyName
  const description = page?.description ?? ''
  const ogImage = absoluteUrl(page?.ogImage ?? '/og.png')
  const robots = page?.noindex ? 'noindex, nofollow' : 'index, follow'

  useHead({
    title,
    htmlAttrs: { lang: 'en' },
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: robots },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: companyName },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
  })
}
