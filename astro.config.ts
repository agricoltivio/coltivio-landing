import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  site: 'https://coltivio.ch',
  output: 'static',
  publicDir: './public',
  // /go is a scan target for printed QR codes, not a page anyone should find in a search result.
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/go') })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
