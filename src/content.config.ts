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
        alt: z.string(),
        caption: z.string().optional()
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

const storiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    category: z.string(),
    clientName: z.string(),
    sessionType: z.string(),
    location: z.string().default("Estúdio Evydência (Tijucas - SC)"),
    pubDate: z.coerce.date(),
    coverImage: z.string(),
    featuredImage: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional()
      })
    ),
    serviceSlug: z.string(),
    portfolioSlug: z.string(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().default("Cliente do Estúdio Evydência")
    }),
    verified: z.boolean().default(true),
    clientConsent: z.boolean().default(true),
    photosFromSameSession: z.boolean().default(true),
    testimonialVerified: z.boolean().default(true)
  })
});

const seasonalsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/seasonals" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    campaign: z.string(),
    slug: z.string(),
    active: z.boolean().default(false),
    currentYear: z.number(),
    bookingOpen: z.boolean().default(false),
    bookingUrl: z.string(),
    heroImage: z.string(),
    historySummary: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional()
      })
    ),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).default([])
  })
});

export const collections = {
  services: servicesCollection,
  portfolio: portfolioCollection,
  blog: blogCollection,
  press: pressCollection,
  stories: storiesCollection,
  seasonals: seasonalsCollection
};
