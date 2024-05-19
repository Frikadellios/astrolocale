import { defineCollection, reference, z } from "astro:content"
import {POST_METADATA} from "@/consts";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		author: z.string().optional(),
		reference: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		previewImage: z.string().optional(),
		secret: z.boolean().default(false),
		tags: z.array(reference('tags')).default(['default']).optional(),
		canonicalURL: z.string().optional(),
		draft: z.boolean().optional(),
		postLayout: z.enum(['simple', 'column']).default(POST_METADATA.defaultLayout as 'simple' | 'column'),
		related: z.array(reference('blog')).default([]).optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

const tags = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // TODO: Add support for images and layout
    // image: z.string().optional(),
    // layout: z.string().optional(),
  }),
});

export const collections = {
	'blog' : blogCollection, tags, work, projects, legal };
