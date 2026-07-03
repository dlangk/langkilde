import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, PATHS } from "../lib/constants";

export async function GET() {
  const shortPosts = (await getCollection("short")).filter(
    (post) => !post.data.draft || import.meta.env.DEV
  );

  // Long writings are unfinished and intentionally not published, so they
  // are excluded from the feed.
  const allPosts = [
    ...shortPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `${PATHS.short}/${post.id}`,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: `${SITE.author} – Writings`,
    description: SITE.description,
    site: SITE.url,
    items: allPosts,
  });
}
