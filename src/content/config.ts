import { z, defineCollection } from 'astro:content';

const DEFAULT_CATEGORY = 'Programming';

const blogCollection = defineCollection({
  schema: z
    .object({
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      title: z.string(),
      highlight: z.union([z.string(), z.array(z.string())]).optional(),
      description: z.string(),
      publishDate: z.date(),
      modifiedDate: z.date().optional(), // TODO:
      category: z.string().default(DEFAULT_CATEGORY),
      tags: z.array(z.string()).default([]),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
