import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  pubDate: z.string(),
  image: z.string().optional(),
  description: z.string().optional(),
});

const short = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/short" }),
  schema: postSchema,
});

const long = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/long" }),
  schema: postSchema,
});

export const collections = { short, long };
