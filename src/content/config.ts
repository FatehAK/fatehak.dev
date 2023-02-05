import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z
    .object({
      draft: z.boolean().default(false),
      title: z.string(),
      seoTitle: z.string(),
      highlight: z.union([z.string(), z.array(z.string())]).optional(),
      description: z.string(),
      date: z.string().transform(str => new Date(str)),
      lastMod: z
        .string()
        .transform(str => new Date(str))
        .optional(),
      tags: z.array(z.string()).default([]),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};