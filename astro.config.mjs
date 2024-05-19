import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import million from 'million/compiler'
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n'
import { remarkReadingTime } from './src/lib/readTime.mjs'
import { site } from './src/site'
import partytown from "@astrojs/partytown";

const sitemapLocales = Object.fromEntries(
  locales.map((_, i) => [locales[i], locales[i]]),
) // Create an object with keys and values based on locales

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      million.vite({
        mode: 'react',
        server: true,
        auto: true,
      }),
      tailwindcss(),
    ],
  },
  prefetch: {
    prefetchAll: true
  },
  site: site,
  output: 'server',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    react(),
    metaTags(),
    robotsTxt(),
    sitemap({
      i18n: {
        filter: page => page.secret !== true,
        defaultLocale: defaultLocale,
        locales: sitemapLocales
      }
    }),
  partytown({
    config: {
      forward: ['dataLayer.push'],
      debug: false
    }
  }), robotsTxt({
    sitemap: 'https://www.astrolocale.vercel.app/sitemap-0.xml',
    host: 'astrolocale.vercel.app'
  })],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      rel: ['nofollow', 'noreferrer']
    }]],
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
    routing: {
      prefixDefaultLocale: true
    }
  },
});
