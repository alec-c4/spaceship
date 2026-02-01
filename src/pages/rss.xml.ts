import rss from '@astrojs/rss';
import type { CollectionEntry } from 'astro:content';
import { SITE } from '@/config';
import type { APIContext } from 'astro';
import { getPublishedPosts, getPostSlug } from '@/lib/utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site || SITE.website,
    items: sortedPosts.map((post: CollectionEntry<'posts'>) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${getPostSlug(post)}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
