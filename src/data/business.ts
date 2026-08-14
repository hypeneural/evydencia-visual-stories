/**
 * NAP Source of Truth & Business Entity Information
 * Dados unificados para cabeçalho, rodapé, contato e Schema JSON-LD.
 */
export const BUSINESS_DATA = {
  name: "Estúdio Evydência",
  legalName: "Estúdio Evydência",
  alternateName: "Evydência Fotografia",
  slogan: "Fotografia que eterniza momentos em Tijucas e região",
  description: "Estúdio de fotografia em Tijucas - SC especializado em ensaios de gestante, família, infantil, acompanhamento de bebê, smash the cake e retratos corporativos.",
  foundingYear: 2011,
  yearsOfExperience: 13,
  founders: [
    {
      name: "Anderson",
      role: "Fotógrafo Fundador",
      image: "https://evydencia.com.br/imgs/anderson.jpg"
    },
    {
      name: "Elaine",
      role: "Fotógrafa Fundadora",
      image: "https://evydencia.com.br/imgs/elaine.jpg"
    }
  ],
  telephone: "(48) 9642-5287",
  telephoneE164: "+5548996425287",
  email: "contato@evydencia.com.br",
  url: "https://evydencia.com.br",
  canonicalUrl: "https://evydencia.com.br/",
  logoUrl: "https://evydencia.com.br/bio/logoPreta.png",
  logoWhiteUrl: "https://evydencia.com.br/img/logo-branca.png",
  priceRange: "$$",
  
  address: {
    street: "Rua Mauri Afonso da Silva, 892",
    neighborhood: "Universitário",
    city: "Tijucas",
    state: "SC",
    stateFullName: "Santa Catarina",
    postalCode: "88200-000",
    country: "BR",
    countryFullName: "Brasil",
    formatted: "R. Mauri Afonso da Silva, 892 - Universitário, Tijucas - SC, 88200-000"
  },
  
  geo: {
    latitude: -27.2417,
    longitude: -48.6467
  },
  
  openingHours: [
    {
      days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      daysSchema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "13:00 às 18:00",
      opens: "13:00",
      closes: "18:00"
    },
    {
      days: ["Sábado"],
      daysSchema: ["Saturday"],
      hours: "08:30 às 11:00",
      opens: "08:30",
      closes: "11:00"
    }
  ],
  
  links: {
    whatsapp: "https://wa.me/5548996425287?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20ensaios%20do%20Est%C3%BAdio%20Evyd%C3%AAncia.",
    googleMaps: "https://maps.app.goo.gl/8LWCyHni7TvovNAb9",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5123456789!2d-48.6467!3d-27.2417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8abe77ad9d3db%3A0x6c2f30b48e88088f!2sEvyd%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr",
    waze: "https://www.waze.com/ul?ll=-27.2417%2C-48.6467&navigate=yes",
    instagram: "https://www.instagram.com/estudioevydencia",
    facebook: "https://www.facebook.com/profile.php?id=61573374213482"
  },
  
  stats: [
    { value: 13, label: "Anos de história", suffix: "+" },
    { value: 5000, label: "Famílias e clientes fotografados", suffix: "+" },
    { value: 15000, label: "Ensaios e memórias eternizadas", suffix: "+" }
  ]
} as const;

export type BusinessData = typeof BUSINESS_DATA;
