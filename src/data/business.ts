/**
 * NAP Source of Truth & Business Entity Information
 * Dados unificados para cabeçalho, rodapé, contato e Schema JSON-LD.
 */
import { BUSINESS_FACTS } from "./business-truth";

const currentYear = new Date().getFullYear();
const foundingYear = BUSINESS_FACTS.foundingYear;
const calculatedYears = currentYear - foundingYear;

export const BUSINESS_DATA = {
  name: BUSINESS_FACTS.businessName,
  legalName: BUSINESS_FACTS.legalName,
  alternateName: BUSINESS_FACTS.alternateName,
  slogan: "Fotografia que eterniza momentos em Tijucas e região",
  description: "Estúdio de fotografia em Tijucas - SC especializado em ensaios de gestante, família, acompanhamento do bebê, smash the cake e retratos corporativos.",
  foundingYear: foundingYear,
  yearsOfExperience: calculatedYears,
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
  telephone: BUSINESS_FACTS.contact.phone,
  telephoneE164: BUSINESS_FACTS.contact.phoneE164,
  email: BUSINESS_FACTS.contact.email,
  url: "https://evydencia.com.br",
  canonicalUrl: "https://evydencia.com.br/",
  logoUrl: "https://evydencia.com.br/bio/logoPreta.png",
  logoWhiteUrl: "https://evydencia.com.br/img/logo-branca.png",
  
  address: {
    street: BUSINESS_FACTS.address.street,
    neighborhood: BUSINESS_FACTS.address.neighborhood,
    city: BUSINESS_FACTS.address.city,
    state: BUSINESS_FACTS.address.state,
    stateFullName: BUSINESS_FACTS.address.stateFullName,
    postalCode: BUSINESS_FACTS.address.postalCode, // 88201-568
    country: BUSINESS_FACTS.address.country,
    countryFullName: BUSINESS_FACTS.address.countryFullName,
    formatted: BUSINESS_FACTS.address.formatted
  },
  
  geo: {
    latitude: -27.2417,
    longitude: -48.6467
  },
  
  openingHours: [
    {
      days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
      daysSchema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: "09:00 às 12:00 e 14:00 às 18:00",
      opens: "09:00",
      closes: "18:00"
    },
    {
      days: ["Sábado"],
      daysSchema: ["Saturday"],
      hours: "Sob agendamento prévio",
      opens: "08:30",
      closes: "12:00"
    }
  ],
  
  links: {
    whatsapp: BUSINESS_FACTS.contact.whatsappUrl,
    googleMaps: BUSINESS_FACTS.contact.googleMapsUrl,
    googleReviews: BUSINESS_FACTS.contact.googleReviewsUrl,
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5123456789!2d-48.6467!3d-27.2417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8abe77ad9d3db%3A0x6c2f30b48e88088f!2sEvyd%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr",
    waze: "https://www.waze.com/ul?ll=-27.2417%2C-48.6467&navigate=yes",
    instagram: BUSINESS_FACTS.contact.instagramUrl,
    facebook: BUSINESS_FACTS.contact.facebookUrl
  },
  
  stats: [
    { value: calculatedYears, label: "Anos de história (Desde 2011)", suffix: "+" },
    { value: 5000, label: "Famílias e clientes fotografados", suffix: "+" },
    { value: 15000, label: "Ensaios e memórias eternizadas", suffix: "+" }
  ],

  areaServed: BUSINESS_FACTS.servicesTruth.coverageCities
} as const;

export type BusinessData = typeof BUSINESS_DATA;
