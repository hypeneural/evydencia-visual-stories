import { BUSINESS_DATA } from "@/data/business";
import type { BreadcrumbItem } from "./breadcrumbs";

/**
 * Gerador de Schema.org JSON-LD tipado para o Estúdio Evydência
 * Em estrita conformidade com Google Search Central e Schema.org
 */

export const CANONICAL_IDS = {
  business: `${BUSINESS_DATA.url}/#business`,
  website: `${BUSINESS_DATA.url}/#website`,
  anderson: `${BUSINESS_DATA.url}/#anderson`,
  elaine: `${BUSINESS_DATA.url}/#elaine`
} as const;

export function buildLocalBusinessGraph(currentUrl: string, pageTitle: string, pageDescription: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": CANONICAL_IDS.business,
        "name": BUSINESS_DATA.name,
        "legalName": BUSINESS_DATA.legalName,
        "alternateName": BUSINESS_DATA.alternateName,
        "description": BUSINESS_DATA.description,
        "url": `${BUSINESS_DATA.url}/`,
        "foundingDate": "2011",
        "telephone": BUSINESS_DATA.telephoneE164,
        "email": BUSINESS_DATA.email,
        "image": "https://evydencia.com.br/imgs/GESTANTES.png",
        "logo": {
          "@type": "ImageObject",
          "@id": `${BUSINESS_DATA.url}/#logo`,
          "url": BUSINESS_DATA.logoUrl
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_DATA.address.street,
          "addressLocality": BUSINESS_DATA.address.city,
          "addressRegion": BUSINESS_DATA.address.state,
          "postalCode": BUSINESS_DATA.address.postalCode,
          "addressCountry": BUSINESS_DATA.address.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_DATA.geo.latitude,
          "longitude": BUSINESS_DATA.geo.longitude
        },
        "hasMap": BUSINESS_DATA.links.googleMaps,
        "areaServed": BUSINESS_DATA.areaServed.map(city => ({
          "@type": "City",
          "name": `${city}, SC`
        })),
        "openingHoursSpecification": BUSINESS_DATA.openingHours.map(schedule => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": schedule.daysSchema,
          "opens": schedule.opens,
          "closes": schedule.closes
        })),
        "sameAs": [
          BUSINESS_DATA.links.instagram,
          BUSINESS_DATA.links.facebook,
          BUSINESS_DATA.links.googleMaps
        ],
        "founder": [
          { "@id": CANONICAL_IDS.anderson },
          { "@id": CANONICAL_IDS.elaine }
        ]
      },
      {
        "@type": "Person",
        "@id": CANONICAL_IDS.anderson,
        "name": "Anderson",
        "jobTitle": "Fotógrafo e Fundador",
        "image": "https://evydencia.com.br/imgs/anderson.jpg",
        "worksFor": {
          "@id": CANONICAL_IDS.business
        }
      },
      {
        "@type": "Person",
        "@id": CANONICAL_IDS.elaine,
        "name": "Elaine",
        "jobTitle": "Fotógrafa e Fundadora",
        "image": "https://evydencia.com.br/imgs/elaine.jpg",
        "worksFor": {
          "@id": CANONICAL_IDS.business
        }
      },
      {
        "@type": "WebSite",
        "@id": CANONICAL_IDS.website,
        "url": `${BUSINESS_DATA.url}/`,
        "name": BUSINESS_DATA.name,
        "alternateName": BUSINESS_DATA.alternateName,
        "publisher": {
          "@id": CANONICAL_IDS.business
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": pageTitle,
        "description": pageDescription,
        "isPartOf": {
          "@id": CANONICAL_IDS.website
        },
        "about": {
          "@id": CANONICAL_IDS.business
        },
        "inLanguage": "pt-BR"
      }
    ]
  };
}

export function buildServiceGraph(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  imageUrl: string,
  breadcrumbItems: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${serviceUrl}#webpage`,
        "url": serviceUrl,
        "name": serviceName,
        "description": serviceDescription,
        "isPartOf": {
          "@id": CANONICAL_IDS.website
        },
        "about": {
          "@id": `${serviceUrl}#service`
        }
      },
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@id": CANONICAL_IDS.business
        },
        "url": serviceUrl,
        "image": imageUrl,
        "areaServed": BUSINESS_DATA.areaServed.map(city => ({
          "@type": "City",
          "name": `${city}, SC`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      }
    ]
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
