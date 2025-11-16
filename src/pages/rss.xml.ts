import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
    const shortPosts = await getCollection('short');
    const longPosts = await getCollection('long');

    const allPosts = [
        ...shortPosts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            link: `/blog/${post.slug}`,
        })),
        ...longPosts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            link: `/long/${post.slug}`,
        })),
    ].sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    return rss({
        title: 'Daniel Langkilde – Writings',
        description: 'Be Busy Building.',
        site: 'https://langkilde.se',
        items: allPosts,
    });
}