import lit from "@astrojs/lit";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), lit(), tailwind()],
  server: {
    port: 3000
  },
  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});