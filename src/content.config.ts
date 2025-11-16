import { defineCollection, z } from "astro:content";

const short = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
  }),
});

const long = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
  }),
});

export const collections = { short, long };
