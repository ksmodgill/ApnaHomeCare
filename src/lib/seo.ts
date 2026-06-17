import { SITE, FAQS, LOCATIONS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description:
      "Professional home nursing services in Muzaffarpur. Elder care, patient care, post-surgery assistance, bedridden patient support and trained nursing staff at home.",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/favicon.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1209,
      longitude: 85.3647,
    },
    areaServed: LOCATIONS.map((loc) => ({
      "@type": "City",
      name: loc.name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      `https://wa.me/${SITE.whatsapp}`,
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`,
    ],
    medicalSpecialty: "Home Health Care",
    availableService: [
      "Home Nursing Care",
      "Elder Care Services",
      "Post Surgery Care",
      "Bedridden Patient Care",
      "Caregiver Services",
    ],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Home Nursing Services",
    description:
      "Professional home nursing care including elder care, post-surgery support, and patient care services in Muzaffarpur, Bihar.",
    provider: {
      "@type": "MedicalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: "Muzaffarpur",
    },
  };
}

export function getWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}
