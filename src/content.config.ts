import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  pubDate: z.string(),
});

const short = defineCollection({ schema: postSchema });
const long = defineCollection({ schema: postSchema });

export const collections = { short, long };
