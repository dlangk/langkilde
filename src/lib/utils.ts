import type { CollectionEntry } from "astro:content";

type PostEntry = CollectionEntry<"short"> | CollectionEntry<"long">;

/**
 * Sort posts by publication date, newest first
 */
export function sortByDate<T extends { data: { pubDate: string } }>(
  posts: T[]
): T[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
}
