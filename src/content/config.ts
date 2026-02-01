import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './site/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    slug: z.string().optional(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default(['others']),
    featured: z.boolean().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    showCTA: z.boolean().default(true),
    showComments: z.boolean().default(true),
    lang: z.string().default('en'),
    series: z
      .object({
        id: z.string(),
        order: z.number(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './site/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    github: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    types: z.array(z.enum(['commercial', 'open-source', 'social'])).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    directLink: z.boolean().default(false).optional(),
  }),
});

const appearances = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './site/content/appearances' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.date(),
    type: z.enum(['talk', 'podcast', 'article', 'workshop', 'video']),
    media: z.enum(['video', 'audio', 'text']).optional(),
    link: z.string().url(),
    description: z.string().optional(),
    lang: z.string().default('en'),
    duration: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './site/content/about' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, projects, appearances, about };
