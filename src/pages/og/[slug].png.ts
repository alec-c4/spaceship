import type { APIRoute } from 'astro';
import type { CollectionEntry } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { SITE } from '@/config';
import { getPublishedPosts, getPostSlug } from '@/lib/utils/posts';

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return posts.map((post: CollectionEntry<'posts'>) => ({
    params: { slug: getPostSlug(post) },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;

  // Inter Bold subsets; each needs its own family name, or satori keeps only the first one
  const subsets = ['latin', 'cyrillic'];
  const fonts = await Promise.all(
    subsets.map(async (subset) => ({
      name: `Inter ${subset}`,
      data: await fetch(
        `https://cdn.jsdelivr.net/fontsource/fonts/inter@5.0.19/${subset}-700-normal.woff`
      ).then((res) => res.arrayBuffer()),
      weight: 700 as const,
      style: 'normal' as const,
    }))
  );
  const fontFamily = fonts.map((font) => `'${font.name}'`).join(', ');

  const markup = html`
    <div
      style="
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #0d1117;
      color: #fff;
      font-family: ${fontFamily};
      padding: 40px;
      text-align: center;
    "
    >
      <div
        style="
        font-size: 64px;
        font-weight: 700;
        background-image: linear-gradient(to right, #c4b5fd, #a78bfa);
        background-clip: text;
        color: transparent;
        margin-bottom: 24px;
        line-height: 1.1;
      "
      >
        ${post.data.title}
      </div>

      <div style="font-size: 32px; color: #9ca3af;">
        ${post.data.description || `A post on ${SITE.title}`}
      </div>

      <div
        style="
        display: flex;
        align-items: center;
        margin-top: 48px;
        font-size: 24px;
        color: #6b7280;
      "
      >
        <span style="margin-right: 16px;">${SITE.website.replace(/^https?:\/\//, '')}</span>
        <span>•</span>
        <span style="margin-left: 16px;"
          >${post.data.pubDate.toLocaleDateString('en-US', { dateStyle: 'long' })}</span
        >
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });

  const png = resvg.render();

  return new Response(png.asPng() as any, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
