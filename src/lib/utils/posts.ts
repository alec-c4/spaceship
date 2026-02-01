import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get published posts, filtering out drafts and future-dated posts.
 * In development mode:
 * - All posts are returned, including drafts and future-dated posts
 * In production mode:
 * - Draft posts (draft: true) are hidden
 * - Posts with pubDate > today are hidden
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts');

  // In development, show all posts including drafts and future-dated ones
  if (import.meta.env.DEV) {
    return posts;
  }

  // In production, filter out drafts and future posts
  const now = new Date();
  return posts.filter((post: CollectionEntry<'posts'>) => {
    // Hide drafts
    if (post.data.draft) return false;

    // Hide future-dated posts
    if (post.data.pubDate > now) return false;

    return true;
  });
}
/**
 * Get the effective slug for a post.
 * Priority:
 * 1. frontmatter slug
 * 2. Generated date-slug (YYYY-MM-DD-filename)
 */
export function getPostSlug(post: CollectionEntry<'posts'>): string {
  if (post.data.slug) {
    return post.data.slug;
  }

  const date = post.data.pubDate.toISOString().split('T')[0];
  return `${date}-${post.id}`;
}
