export interface NavLink {
  label: string;
  href: string;
  isCTA?: boolean;
}

export const MAIN_NAVIGATION: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Ensaios", href: "/ensaios/" },
  { label: "Eventos", href: "/eventos/" },
  { label: "Portfólio", href: "/portfolio/" },
  { label: "O Estúdio", href: "/estudio/" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Imprensa", href: "/imprensa/" },
  { label: "Contato", href: "/contato/" }
];

export const SERVICES_NAVIGATION = [
  { label: "Ensaio de Gestante", href: "/ensaios/gestante-tijucas/", category: "Estúdio e Externo" },
  { label: "Ensaio de Família", href: "/ensaios/familia-tijucas/", category: "Estúdio e Externo" },
  { label: "Ensaio Infantil", href: "/ensaios/infantil-tijucas/", category: "Estúdio" },
  { label: "Acompanhamento do Bebê", href: "/ensaios/acompanhamento-bebe-tijucas/", category: "Estúdio" },
  { label: "Smash the Cake", href: "/ensaios/smash-the-cake-tijucas/", category: "Estúdio" },
  { label: "Ensaio de Casal", href: "/ensaios/casal-tijucas/", category: "Externo e Estúdio" },
  { label: "Retrato Corporativo", href: "/ensaios/corporativo-tijucas/", category: "Estúdio" }
];

export const EVENTS_NAVIGATION = [
  { label: "Cobertura de Batizado", href: "/eventos/batizado-tijucas/" },
  { label: "Aniversário Infantil", href: "/eventos/aniversario-infantil-tijucas/" }
];

export const FOOTER_NAVIGATION = {
  ensaios: SERVICES_NAVIGATION,
  eventos: EVENTS_NAVIGATION,
  institucional: [
    { label: "Quem Somos", href: "/sobre/" },
    { label: "Nossa Estrutura", href: "/estudio/" },
    { label: "Imprensa e Mídia", href: "/imprensa/" },
    { label: "Dicas no Blog", href: "/blog/" },
    { label: "Fale Conosco", href: "/contato/" }
  ]
};
