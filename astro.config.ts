import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  site: 'https://coltivio.ch',
  output: 'static',
  publicDir: './public',
  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements (nav, footer).
  compressHTML: true,
  // /go is a scan target for printed QR codes, not a page anyone should find in a search result.
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/go') && !page.includes('/newsletter') })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // The press kit downloads must stay real files: Vite would inline the two smallest
      // logo SVGs as data URIs, which some browsers refuse to save under the given name.
      assetsInlineLimit: (filePath) => (filePath.includes('/src/assets/brand/') ? false : undefined),
    },
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
