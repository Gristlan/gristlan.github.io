// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
    site: 'https://gristlan.github.io',
    integrations: [mdx(), sitemap(), react(), tinaDirective(), favicons()],
});