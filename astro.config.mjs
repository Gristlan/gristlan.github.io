// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"

import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [sitemap(), react(), tinaDirective(), starlight({
    title: 'Universal Joy',
    plugins: [catppuccin({
      dark: { flavor: "macchiato", accent: "sky" },
      light: { flavor: "latte", accent: "sky" },
    })],
  }),
  mdx()],
});
