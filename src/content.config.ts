import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string().min(20).max(85),
    description: z.string().min(60).max(185),
    h1: z.string(),
    serviceName: z.string(),
    serviceType: z.string(),
    category: z.enum(["estudio", "externo", "eventos", "hibrido"]),
    featuredImage: z.string(),
    heroText: z.string(),
    summary: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ),
    relatedServices: z.array(z.string()).default([]),
    order: z.number().default(10)
  })
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    coverImage: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string()
      })
    )
  })
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(20).max(90),
    description: z.string().min(60).max(185),
    pubDate: z.coerce.date(),
    author: z.string().default("Anderson e Elaine"),
    featuredImage: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default("5 min de leitura")
  })
});

const pressCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/press" }),
  schema: z.object({
    outlet: z.string(),
    date: z.coerce.date(),
    headline: z.string(),
    summary: z.string(),
    url: z.string(),
    logo: z.string().optional()
  })
});

export const collections = {
  services: servicesCollection,
  portfolio: portfolioCollection,
  blog: blogCollection,
  press: pressCollection
};
