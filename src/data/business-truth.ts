/**
 * Matriz de Fatos Verificados do Estúdio Evydência (business-truth.ts)
 * 
 * REGRA DE OURO DO PROJETO:
 * O site e o Schema NÃO devem publicar afirmações que não estejam marcadas como `confirmed: true`.
 * Itens condicionais ou sob consulta devem ser explicitamente redigidos como tais.
 */

export const BUSINESS_FACTS = {
  // Entidade e Localização
  businessName: "Estúdio Evydência",
  legalName: "Estúdio Evydência",
  alternateName: "Evydência Fotografia",
  foundingYear: 2011,
  
  // Endereço e NAP Imutável
  address: {
    street: "Rua Mauri Afonso da Silva, 892",
    neighborhood: "Universitário",
    city: "Tijucas",
    state: "SC",
    stateFullName: "Santa Catarina",
    postalCode: "88201-568", // [CONFIRMADO] CEP oficial e exato
    country: "BR",
    countryFullName: "Brasil",
    formatted: "Rua Mauri Afonso da Silva, 892 - Universitário, Tijucas - SC, 88201-568"
  },

  // Telefones e Redes Oficiais
  contact: {
    phone: "(48) 99642-5287",
    phoneE164: "+5548996425287",
    email: "contato@evydencia.com.br",
    whatsappUrl: "https://wa.me/5548996425287?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20ensaios%20do%20Est%C3%BAdio%20Evyd%C3%AAncia.",
    instagramUrl: "https://www.instagram.com/estudioevydenciaa/",
    instagramHandle: "@estudioevydenciaa",
    facebookUrl: "https://www.facebook.com/profile.php?id=61573374213482",
    googleMapsUrl: "https://maps.app.goo.gl/8LWCyHni7TvovNAb9",
    googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJ29PZeu-r2JQRLwiIjLQwL2w"
  },

  // Horários de Funcionamento (Alinhados com Google Business Profile)
  openingHours: {
    weekdays: "Segunda a Sexta: 09h às 12h e 14h às 18h",
    saturday: "Sábados: Atendimento mediante agendamento prévio",
    sunday: "Domingos: Fechado",
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "12:00"
      },
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00"
      }
    ]
  },

  // Capacidades e Fatos de Serviços Verificados
  servicesTruth: {
    // Figurinos: Comprovado para Natal e temáticos de bebês; gestantes sob consulta / orientação
    wardrobe: {
      confirmed: true,
      description: "Disponibilizamos figurinos e cenários temáticos para campanhas especiais (como Natal e Dia das Mães) e acessórios para bebês. Para ensaios de gestante e família, fornecemos orientações completas de looks e cores para valorizar a harmonia das fotos."
    },

    // Newborn: Foco em Acompanhamento e Bebês a partir do primeiro mês
    newbornTraditional: {
      confirmed: false, // Não afirmar newborn posado de 7 dias sem sessão dedicada
      focus: "Acompanhamento do crescimento do bebê (a partir do 1º/2º mês) e Smash the Cake de 1 ano."
    },

    // Pets no Ensaio
    petFriendly: {
      confirmed: true,
      condition: "Permitido mediante aviso prévio para preparo e higienização adequada do ambiente."
    },

    // Locações Externas
    outdoorSessions: {
      confirmed: true,
      locations: ["Praias de Itapema e região", "Áreas verdes e campos de Tijucas", "Locações sob consulta"]
    },

    // Produtos Físicos (Álbuns & Quadros)
    physicalProducts: {
      confirmed: true,
      description: "Opções de fotolivros encadernados, quadros e revelações disponíveis conforme o pacote contratado."
    },

    // Região de Atendimento
    coverageCities: [
      "Tijucas",
      "Itapema",
      "Porto Belo",
      "Canelinha",
      "São João Batista",
      "Nova Trento",
      "Biguaçu"
    ]
  }
} as const;
