import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z
    .object({
      draft: z.boolean().default(false),
      title: z.string(),
      seoTitle: z.string().optional(),
      url: z.string().optional(),
      highlight: z.union([z.string(), z.array(z.string())]).default(''),
      description: z.string().optional(),
      banner: z.string().optional(),
      date: z.string().transform(str => new Date(str)),
      lastMod: z
        .string()
        .transform(str => new Date(str))
        .optional(),
      tags: z.array(z.string()).default([]),
    })
    .strict(),
});

const snippetsCollection = defineCollection({
  schema: z
    .object({
      draft: z.boolean().default(false),
      title: z.string(),
      url: z.string().optional(),
      highlight: z.union([z.string(), z.array(z.string())]).default(''),
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
  snippets: snippetsCollection,
};
