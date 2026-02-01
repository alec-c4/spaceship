import { getPublishedPosts, getPostSlug } from '@/lib/utils/posts';

export const GET = async () => {
  const posts = await getPublishedPosts();

  const searchIndex = posts.map((post) => ({
    id: getPostSlug(post),
    data: {
      title: post.data.title,
      description: post.data.description,
    },
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
