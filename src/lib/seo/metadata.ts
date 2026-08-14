import { BUSINESS_DATA } from "@/data/business";

export interface PageMetadataOptions {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

/**
 * Normaliza o título para o padrão oficial: "Título Principal | Estúdio Evydência"
 */
export function formatTitle(title: string): string {
  const brandSuffix = ` | ${BUSINESS_DATA.name}`;
  if (title.includes(BUSINESS_DATA.name)) {
    return title.trim();
  }
  return `${title.trim()}${brandSuffix}`;
}

/**
 * Garante que a meta description esteja dentro do limite recomendado de 80 a 165 caracteres.
 */
export function formatDescription(description: string): string {
  const clean = description.trim().replace(/\s+/g, " ");
  if (clean.length > 165) {
    return clean.slice(0, 162) + "...";
  }
  return clean;
}
