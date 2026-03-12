import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  pubDate: z.string(),
  image: z.string().optional(),
});

const short = defineCollection({ schema: postSchema });
const long = defineCollection({ schema: postSchema });

export const collections = { short, long };
