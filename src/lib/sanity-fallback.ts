import {
  SITE,
  NAV_LINKS,
  TRUST_BADGES,
  SERVICES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  CARE_PACKAGES,
  COMPARISON,
  LOCATIONS,
  FAQS,
  REVIEWS,
  FEATURED_REVIEW,
  FOOTER_SERVICES,
  FOOTER_LINKS,
} from "./constants";
import type {
  FooterDocument,
  GlobalUIDocument,
  HeaderDocument,
  HomepageDocument,
  SiteContent,
  SiteSettingsDocument,
  TestimonialDocument,
} from "./sanity-types";

export const FALLBACK_IMAGES = {
  hero: "/hero-image.png",
  about: "/about-us-image.png",
  emergency: "/hero-image.png",
  whyHomeCare: "/hero-image.png",
  comparisonHome: "/hero-image.png",
  comparisonHospital: "/about-us-image.png",
  contactMain: "/hero-image.png",
  contactSupport: "/about-us-image.png",
} as const;

export const fallbackTestimonials: TestimonialDocument[] = REVIEWS.map((review, index) => ({
  _id: `fallback-review-${index}`,
  name: review.name,
  location: "Muzaffarpur",
  rating: review.rating,
  review: review.text,
  date: review.date,
  featured: review.name === FEATURED_REVIEW.name,
}));

export const fallbackHomepage: HomepageDocument = {
  heroSection: {
    badgeText: "Trusted Home Nursing in Muzaffarpur",
    title: "Give Your Parents the Care They Deserve at Home",
    subtitle:
      ". Elder care, post-surgery recovery, and emergency support — at your doorstep.",
    subtitleHighlight: "Muzaffarpur, Kanti & Motihari",
    primaryButtonText: "Book Home Visit",
    primaryButtonLink: "#contact",
    secondaryButtonText: "Call Now",
    secondaryButtonLink: `tel:${SITE.phone}`,
    trustBadges: [...TRUST_BADGES],
    stats: [
      { title: "Families helped", value: "500+" },
      { title: "Certified nurses", value: "GNM" },
      { title: "Always open", value: "24/7" },
      { title: "Emergency dispatch", value: "<4 hrs" },
    ],
    consultationFormTitle: "Book a Free Home Care Consultation",
  },
  servicesSection: {
    badge: "Services",
    heading: "Whatever Your Patient Needs, We Send the Right Nurse",
    subHeading:
      "Eight types of home care across Muzaffarpur — from a 2-hour injection visit to round-the-clock elder support.",
    services: SERVICES.map((service) => ({
      title: service.title,
      description: service.description,
      icon: service.icon,
      link: "#contact",
      buttonText: "Learn More",
    })),
  },
  ctaBanner: {
    badge: "Emergency Response · 24/7",
    title: "Hospital Discharged Them Today?",
    subtitle:
      "Don't panic. Call us now — we've placed nurses in Muzaffarpur homes within hours of discharge, often the same evening.",
    buttonText: `Call Now — ${SITE.phoneDisplay}`,
    buttonLink: `tel:${SITE.phone}`,
    footerNote: "Average response time: under 4 hours",
  },
  whyHomeCare: {
    badge: "Why Families Choose Us",
    heading: "When Your Parent Needs Care, You Shouldn't Have to Guess",
    description:
      "Verified nurses, doctor-aligned plans, and round-the-clock support — the basics every Muzaffarpur family deserves.",
    overlayTitle: "Our Standard",
    overlayText:
      "Background checks · Clinical training · Hygiene protocols · Doctor coordination · 24/7 supervision",
    benefits: WHY_CHOOSE_US.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  },
  aboutSection: {
    badge: "About Us",
    heading: "We Started This Because Families in Bihar Deserve Better Home Care",
    description:
      "Apna Home Care is a Muzaffarpur-based nursing service built for families who cannot be at the bedside 24/7. Whether your parent is recovering from surgery, needs elder support, or was just discharged — we send trained nurses and caregivers to your home.",
    buttonText: "Talk to Our Care Team",
    buttonLink: "#contact",
  },
  processSection: {
    badge: "How It Works",
    heading: "From Your First Call to a Nurse at Your Door",
    subHeading: "Five simple steps. Most families have a nurse assigned the same day.",
    steps: PROCESS_STEPS.map((step) => ({
      stepNumber: step.step,
      title: step.title,
      description: step.description,
    })),
    calloutTitle: "Doctor Coordinated Care",
    calloutDescription:
      "Share your discharge summary or prescription. We build a home care plan around your physician's instructions and send vitals reports they can use for follow-ups.",
  },
  pricingSection: {
    badge: "Packages",
    heading: "Pay Only for the Care You Actually Need",
    subHeading:
      "Hourly, daily, weekly, or long-term — we'll quote based on your patient's condition. No hidden charges.",
    plans: CARE_PACKAGES.map((pkg, index) => ({
      title: pkg.title,
      description: pkg.description,
      features: [...pkg.features],
      buttonText: pkg.cta,
      buttonLink: "#contact",
      featured: index === 2,
    })),
    footerNote: "Pricing depends on patient condition and location.",
    footerLinkText: "Get a free personalized quote →",
    footerLink: "#contact",
  },
  comparisonSection: {
    badge: "Make the Right Choice",
    heading: "Home Care vs. Staying in Hospital",
    subHeading: "For many recoveries and elder care situations, home is safer, cheaper, and kinder.",
    leftTitle: "Home Nursing Care",
    rightTitle: "Extended Hospital Stay",
    leftItems: [...COMPARISON.homeCare],
    rightItems: [...COMPARISON.hospitalStay],
  },
  serviceAreasSection: {
    badge: "Where We Serve",
    heading: "Home Nurses Across Muzaffarpur District",
    subHeading:
      "Based in Muzaffarpur — we reach families in the city, nearby towns, and surrounding villages across North Bihar.",
    stats: [
      { title: "Towns & Areas", value: "8+" },
      { title: "Dispatch", value: "24/7" },
      { title: "Emergency Response", value: "<4 hrs" },
      { title: "Primary Hub", value: "Muzaffarpur" },
    ],
    areas: LOCATIONS.map((location) => ({
      name: location.name,
      slug: location.slug,
      description: location.description,
    })),
    officeLabel: "Primary Office",
    ctaText: "Not sure if we cover your village? Call — we'll confirm in minutes.",
    buttonText: SITE.phoneDisplay,
    buttonLink: `tel:${SITE.phone}`,
  },
  testimonialsSection: {
    badge: "Reviews",
    heading: "What Muzaffarpur Families Say About Us",
    subHeading:
      "Real feedback from families who trusted Apna Home Care with their loved ones.",
  },
  faqSection: {
    badge: "Questions?",
    heading: "Straight Answers Before You Decide",
    subHeading:
      "The things families in Muzaffarpur ask us most — about cost, urgency, areas, and what a nurse actually does at home.",
    faqs: FAQS.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
    ctaText: `Still have questions? Call ${SITE.phoneDisplay}`,
  },
  contactSection: {
    badge: "Get Started",
    heading: "A Nurse Can Be at Your Home Today",
    subHeading:
      "Tell us what your patient needs. Our coordinator calls back within 30 minutes — 24 hours a day.",
    phone: SITE.phone,
    whatsapp: SITE.whatsapp,
    formTitle: "Book a Free Home Visit",
    submitButtonText: "Book Home Visit",
  },
};

export const fallbackHeader: HeaderDocument = {
  brandName: SITE.shortName,
  brandSubtext: "Nursing Services",
  menuItems: NAV_LINKS.map((link) => ({
    label: link.label,
    url: link.href,
    openInNewTab: false,
  })),
  primaryButtonText: "Call Now",
  primaryButtonLink: `tel:${SITE.phone}`,
  phoneNumber: SITE.phone,
  mobileMenuTitle: "Give Your Parents the Care They Deserve at Home",
  mobileMenuDescription:
    "Trained nurses in Muzaffarpur, Kanti & Motihari — same-day dispatch, elder care, post-surgery recovery, and 24/7 emergency support at your doorstep.",
};

export const fallbackFooter: FooterDocument = {
  aboutText: `${SITE.tagline}. Trusted home nursing services in Muzaffarpur and surrounding areas of Bihar.`,
  footerMenus: [
    {
      title: "Our Services",
      links: FOOTER_SERVICES.map((item) => ({
        label: item.label,
        url: item.href,
      })),
    },
    {
      title: "Quick Links",
      links: FOOTER_LINKS.map((item) => ({
        label: item.label,
        url: item.href,
      })),
    },
  ],
  address: SITE.address.full,
  phone: SITE.phoneDisplay,
  email: SITE.email,
  hours: SITE.hours,
  socialLinks: [
    { platform: "instagram", url: SITE.social.instagram },
    { platform: "facebook", url: SITE.social.facebook },
  ],
  developerCredit: "Designed and Developed by Sintyz.com",
  developerLink: "https://sintyz.com",
};

export const fallbackSiteSettings: SiteSettingsDocument = {
  businessName: SITE.name,
  shortName: SITE.shortName,
  tagline: SITE.tagline,
  siteUrl: SITE.url,
  phone: SITE.phone,
  phoneDisplay: SITE.phoneDisplay,
  whatsapp: SITE.whatsapp,
  email: SITE.email,
  address: SITE.address.full,
  hours: SITE.hours,
};

export const fallbackGlobalUI: GlobalUIDocument = {
  primaryColor: "#fd4f24",
  secondaryColor: "#1a1a2e",
  callButtonText: "Call Now",
  whatsappButtonText: "WhatsApp",
  stickyCallEnabled: true,
  stickyWhatsappEnabled: true,
  defaultCTAHeading: "Need a Nurse at Home? Call Us Now",
  whatsappMessage: "Hi, I need home nursing services in Muzaffarpur.",
};

function mergeSection<T extends object>(cms?: T | null, fallback?: T): T | undefined {
  if (!cms && !fallback) return undefined;
  if (!cms) return fallback;
  if (!fallback) return cms;
  return { ...fallback, ...cms };
}

function mergeArray<T>(cms?: T[] | null, fallback?: T[]): T[] | undefined {
  if (cms && cms.length > 0) return cms;
  if (fallback && fallback.length > 0) return fallback;
  return undefined;
}

export function mergeHomepage(cms?: HomepageDocument | null): HomepageDocument {
  const fb = fallbackHomepage;
  if (!cms) return fb;

  return {
    heroSection: mergeSection(cms.heroSection, fb.heroSection),
    servicesSection: cms.servicesSection
      ? {
          ...fb.servicesSection,
          ...cms.servicesSection,
          services: mergeArray(cms.servicesSection.services, fb.servicesSection?.services),
        }
      : fb.servicesSection,
    ctaBanner: mergeSection(cms.ctaBanner, fb.ctaBanner),
    whyHomeCare: cms.whyHomeCare
      ? {
          ...fb.whyHomeCare,
          ...cms.whyHomeCare,
          benefits: mergeArray(cms.whyHomeCare.benefits, fb.whyHomeCare?.benefits),
        }
      : fb.whyHomeCare,
    aboutSection: mergeSection(cms.aboutSection, fb.aboutSection),
    processSection: cms.processSection
      ? {
          ...fb.processSection,
          ...cms.processSection,
          steps: mergeArray(cms.processSection.steps, fb.processSection?.steps),
        }
      : fb.processSection,
    pricingSection: cms.pricingSection
      ? {
          ...fb.pricingSection,
          ...cms.pricingSection,
          plans: mergeArray(cms.pricingSection.plans, fb.pricingSection?.plans),
        }
      : fb.pricingSection,
    comparisonSection: mergeSection(cms.comparisonSection, fb.comparisonSection),
    serviceAreasSection: cms.serviceAreasSection
      ? {
          ...fb.serviceAreasSection,
          ...cms.serviceAreasSection,
          areas: mergeArray(cms.serviceAreasSection.areas, fb.serviceAreasSection?.areas),
          stats: mergeArray(cms.serviceAreasSection.stats, fb.serviceAreasSection?.stats),
        }
      : fb.serviceAreasSection,
    testimonialsSection: mergeSection(cms.testimonialsSection, fb.testimonialsSection),
    faqSection: cms.faqSection
      ? {
          ...fb.faqSection,
          ...cms.faqSection,
          faqs: mergeArray(cms.faqSection.faqs, fb.faqSection?.faqs),
        }
      : fb.faqSection,
    contactSection: mergeSection(cms.contactSection, fb.contactSection),
  };
}

export function mergeSiteContent(partial: Partial<SiteContent>): SiteContent {
  return {
    homepage: mergeHomepage(partial.homepage),
    testimonials:
      partial.testimonials && partial.testimonials.length > 0
        ? partial.testimonials
        : fallbackTestimonials,
    header: { ...fallbackHeader, ...partial.header },
    footer: {
      ...fallbackFooter,
      ...partial.footer,
      footerMenus: mergeArray(partial.footer?.footerMenus, fallbackFooter.footerMenus),
      socialLinks: mergeArray(partial.footer?.socialLinks, fallbackFooter.socialLinks),
    },
    siteSettings: { ...fallbackSiteSettings, ...partial.siteSettings },
    globalUI: { ...fallbackGlobalUI, ...partial.globalUI },
  };
}

export const fallbackSiteContent: SiteContent = mergeSiteContent({});
