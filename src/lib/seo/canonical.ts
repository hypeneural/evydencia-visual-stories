import { BUSINESS_DATA } from "@/data/business";

/**
 * Retorna a URL canônica normalizada no padrão oficial:
 * - Protocolo HTTPS
 * - Sem www
 * - Com trailing slash final
 */
export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "");
  if (!cleanPath) {
    return `${BUSINESS_DATA.url}/`;
  }
  return `${BUSINESS_DATA.url}/${cleanPath}/`;
}
