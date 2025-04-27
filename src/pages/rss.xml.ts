import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
    const posts = await getCollection('blog');

    return rss({
        title: 'Daniel Langkilde – Writings',
        description: 'Be Busy Building.',
        site: 'https://langkilde.se',
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            link: `/blog/${post.slug}`,
        })),
    });
}