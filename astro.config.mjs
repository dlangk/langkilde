// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkConcepts from './src/plugins/remark-concepts.mjs';
import remarkReferences from './src/plugins/remark-references.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://langkilde.se',
  integrations: [mdx()],
  build: {
    // Inline all CSS into the HTML: removes the render-blocking stylesheet
    // request and shortens the CSS -> @font-face discovery chain.
    inlineStylesheets: 'always',
  },
  markdown: {
    // singleDollarTextMath: false → only $$...$$ triggers math, so literal
    // dollar signs in prose (e.g. "$300 billion") are never parsed as math.
    remarkPlugins: [
      remarkGfm,
      [remarkMath, { singleDollarTextMath: false }],
      remarkConcepts,
      remarkReferences,
    ],
    rehypePlugins: [rehypeSlug, rehypeKatex],
  },
});
