// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkConcepts from './src/plugins/remark-concepts.mjs';
import remarkReferences from './src/plugins/remark-references.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://langkilde.se',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkConcepts, remarkReferences],
    rehypePlugins: [rehypeSlug],
  },
});
