import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import million from "million/compiler";
import metaTags from "astro-meta-tags";
import { remarkReadingTime } from './src/lib/readTime.mjs'
import robotsTxt from "astro-robots-txt";
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n';
import { site } from './src/site';

const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({
      mode: "react",
      server: true,
      auto: true
    }), tailwindcss()]
  },
  site: site,
  output: "server",
  prefetch: true,
  integrations: [ 
    mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
    drafts: true,
    }), react(), metaTags(), robotsTxt(), 
    sitemap({
    filter: (page) => page.secret !== true,
    i18n: {
      defaultLocale: defaultLocale,
      locales: sitemapLocales,
    }
  })
],
i18n: {
  defaultLocale: defaultLocale,
  locales: locales,
},
markdown: {
  rehypePlugins:[[
    rehypeExternalLinks, {
      target: '_blank',
      rel: ['nofollow', 'noreferrer'],
    }
  ]],
  remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
		  theme: 'material-theme-palenight',
		  wrap: true,
		},
  },
	prefetch: {
		prefetchAll: true
	  },
});