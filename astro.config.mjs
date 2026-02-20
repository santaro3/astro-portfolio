// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://santaro3.github.io',
  base: '/astro-portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});