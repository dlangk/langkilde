import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, PATHS } from "../lib/constants";

export async function GET() {
  const shortPosts = await getCollection("short");
  const longPosts = await getCollection("long");

  const allPosts = [
    ...shortPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `${PATHS.short}/${post.slug}`,
    })),
    ...longPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `${PATHS.long}/${post.slug}`,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: `${SITE.author} – Writings`,
    description: SITE.description,
    site: SITE.url,
    items: allPosts,
  });
}
