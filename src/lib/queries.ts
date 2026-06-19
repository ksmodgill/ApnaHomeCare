const imageProjection = `{
  ...,
  asset->{
    _id,
    url
  }
}`;

export const homepageQuery = `*[_type == "homepage"][0]{
  heroSection{
    ...,
    heroImage ${imageProjection}
  },
  servicesSection{
    ...,
    services[]{
      ...,
      image ${imageProjection}
    }
  },
  ctaBanner{
    ...,
    backgroundImage ${imageProjection}
  },
  whyHomeCare{
    ...,
    image ${imageProjection}
  },
  aboutSection{
    ...,
    image ${imageProjection}
  },
  processSection,
  pricingSection,
  comparisonSection{
    ...,
    leftImage ${imageProjection},
    rightImage ${imageProjection}
  },
  serviceAreasSection,
  testimonialsSection,
  faqSection,
  contactSection{
    ...,
    image ${imageProjection},
    secondaryImage ${imageProjection}
  }
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(featured desc, _createdAt desc){
  _id,
  name,
  location,
  rating,
  review,
  date,
  featured,
  photo ${imageProjection}
}`;

export const headerQuery = `*[_type == "header"][0]{
  ...,
  logo ${imageProjection}
}`;

export const footerQuery = `*[_type == "footer"][0]{
  ...,
  logo ${imageProjection}
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  ...,
  seoImage ${imageProjection}
}`;

export const globalUIQuery = `*[_type == "globalUI"][0]{
  ...,
  fallbackImage ${imageProjection}
}`;

export const siteContentQuery = `{
  "homepage": ${homepageQuery},
  "testimonials": ${testimonialsQuery},
  "header": ${headerQuery},
  "footer": ${footerQuery},
  "siteSettings": ${siteSettingsQuery},
  "globalUI": ${globalUIQuery}
}`;
