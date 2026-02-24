// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://langkilde.se',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
