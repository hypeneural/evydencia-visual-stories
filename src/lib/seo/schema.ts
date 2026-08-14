import { BUSINESS_DATA } from "@/data/business";
import type { BreadcrumbItem } from "./breadcrumbs";

/**
 * Gerador de Schema.org JSON-LD tipado para o Estúdio Evydência
 */

export function buildLocalBusinessGraph(currentUrl: string, pageTitle: string, pageDescription: string) {
  const businessId = `${BUSINESS_DATA.url}/#business`;
  const websiteId = `${BUSINESS_DATA.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PhotographyBusiness", "LocalBusiness"],
        "@id": businessId,
        "name": BUSINESS_DATA.name,
        "legalName": BUSINESS_DATA.legalName,
        "alternateName": BUSINESS_DATA.alternateName,
        "description": BUSINESS_DATA.description,
        "url": `${BUSINESS_DATA.url}/`,
        "telephone": BUSINESS_DATA.telephoneE164,
        "email": BUSINESS_DATA.email,
        "priceRange": BUSINESS_DATA.priceRange,
        "image": BUSINESS_DATA.logoUrl,
        "logo": BUSINESS_DATA.logoUrl,
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
        "openingHoursSpecification": BUSINESS_DATA.openingHours.map(schedule => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": schedule.daysSchema,
          "opens": schedule.opens,
          "closes": schedule.closes
        })),
        "sameAs": [
          BUSINESS_DATA.links.instagram,
          BUSINESS_DATA.links.facebook
        ],
        "founder": BUSINESS_DATA.founders.map(f => ({
          "@type": "Person",
          "name": f.name,
          "jobTitle": f.role,
          "image": f.image
        }))
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        "url": `${BUSINESS_DATA.url}/`,
        "name": BUSINESS_DATA.name,
        "publisher": {
          "@id": businessId
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
          "@id": websiteId
        },
        "about": {
          "@id": businessId
        },
        "inLanguage": "pt-BR"
      }
    ]
  };
}

export function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  imageUrl: string
) {
  const businessId = `${BUSINESS_DATA.url}/#business`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@id": businessId
    },
    "url": serviceUrl,
    "image": imageUrl,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Tijucas e Vale do Itajaí, SC"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ensaios Fotográficos Profissionais"
    }
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
