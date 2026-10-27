/// <reference types="vite-ssg" />
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { publicPages } from './src/content/routes.ts'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

function writeSiteFiles(siteUrl: string): void {
  const origin = siteUrl.replace(/\/+$/, '')
  const ranked = publicPages.filter((page) => !page.noindex)
  const urls = ranked
    .map((page) => {
      const loc = page.path === '/' ? `${origin}/` : `${origin}${page.path}`
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`
    })
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  const dist = resolve(rootDir, 'dist')
  mkdirSync(dist, { recursive: true })
  writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
  writeFileSync(
    resolve(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  )
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '')
  const siteUrl = env.VITE_SITE_URL || 'https://rempelautomation.com'

  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    ssgOptions: {
      dirStyle: 'nested',
      script: 'async',
      formatting: 'minify',
      includedRoutes() {
        return publicPages.map((page) => page.path).concat(['/404'])
      },
      onFinished() {
        writeSiteFiles(siteUrl)
        try {
          copyFileSync(resolve(rootDir, 'dist/404/index.html'), resolve(rootDir, 'dist/404.html'))
        } catch {
          // ignore if prerender used a flat 404.html
        }
      },
    },
  }
})
