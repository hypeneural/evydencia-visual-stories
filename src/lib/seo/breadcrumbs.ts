import { BUSINESS_DATA } from "@/data/business";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const BREADCRUMB_MAP: Record<string, string> = {
  "": "Início",
  "ensaios": "Ensaios",
  "eventos": "Eventos",
  "portfolio": "Portfólio",
  "estudio": "O Estúdio",
  "sobre": "Sobre Nós",
  "imprensa": "Imprensa",
  "contato": "Contato",
  "blog": "Blog",
  "gestante-tijucas": "Ensaio Gestante",
  "familia-tijucas": "Ensaio Família",
  "infantil-tijucas": "Ensaio Infantil",
  "acompanhamento-bebe-tijucas": "Acompanhamento do Bebê",
  "smash-the-cake-tijucas": "Smash the Cake",
  "casal-tijucas": "Ensaio de Casal",
  "corporativo-tijucas": "Fotografia Corporativa",
  "batizado-tijucas": "Batizados",
  "aniversario-infantil-tijucas": "Aniversário Infantil",
  "gestante": "Gestante",
  "familia": "Família",
  "infantil": "Infantil"
};

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "");
  const segments = cleanPath ? cleanPath.split("/") : [];
  
  const items: BreadcrumbItem[] = [
    { name: "Início", url: `${BUSINESS_DATA.url}/` }
  ];
  
  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = BREADCRUMB_MAP[segment] || segment.replace(/-/g, " ");
    items.push({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url: `${BUSINESS_DATA.url}${currentPath}/`
    });
  }
  
  return items;
}
