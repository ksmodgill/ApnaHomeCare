export interface SanityImageAsset {
  _id: string;
  url?: string;
}

export interface SanityImage {
  _type?: "image";
  asset?: SanityImageAsset;
  altText?: string;
}

export interface StatItem {
  title?: string;
  value?: string;
}

export interface ServiceCard {
  title?: string;
  description?: string;
  icon?: string;
  image?: SanityImage;
  link?: string;
  buttonText?: string;
}

export interface BenefitItem {
  title?: string;
  description?: string;
  icon?: string;
}

export interface ProcessStep {
  stepNumber?: number;
  title?: string;
  description?: string;
  icon?: string;
}

export interface PricingPlan {
  title?: string;
  price?: string;
  duration?: string;
  description?: string;
  featured?: boolean;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface AreaItem {
  name?: string;
  slug?: string;
  description?: string;
}

export interface FaqItem {
  question?: string;
  answer?: string;
}

export interface HeroSection {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  subtitleHighlight?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  heroImage?: SanityImage;
  googleRating?: number;
  googleReviewCount?: string;
  trustBadges?: string[];
  stats?: StatItem[];
  consultationFormTitle?: string;
}

export interface ServicesSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  services?: ServiceCard[];
}

export interface CtaBanner {
  badge?: string;
  backgroundImage?: SanityImage;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  footerNote?: string;
}

export interface WhyHomeCare {
  badge?: string;
  heading?: string;
  description?: string;
  image?: SanityImage;
  overlayTitle?: string;
  overlayText?: string;
  benefits?: BenefitItem[];
}

export interface AboutSection {
  badge?: string;
  heading?: string;
  description?: string;
  image?: SanityImage;
  features?: { title?: string }[];
  buttonText?: string;
  buttonLink?: string;
}

export interface ProcessSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  steps?: ProcessStep[];
  calloutTitle?: string;
  calloutDescription?: string;
}

export interface PricingSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  plans?: PricingPlan[];
  footerNote?: string;
  footerLinkText?: string;
  footerLink?: string;
}

export interface ComparisonSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  leftTitle?: string;
  rightTitle?: string;
  leftItems?: string[];
  rightItems?: string[];
  leftImage?: SanityImage;
  rightImage?: SanityImage;
}

export interface ServiceAreasSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  stats?: StatItem[];
  areas?: AreaItem[];
  officeLabel?: string;
  ctaText?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface TestimonialsSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
}

export interface FaqSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  faqs?: FaqItem[];
  ctaText?: string;
}

export interface ContactSection {
  badge?: string;
  heading?: string;
  subHeading?: string;
  image?: SanityImage;
  secondaryImage?: SanityImage;
  phone?: string;
  whatsapp?: string;
  formTitle?: string;
  submitButtonText?: string;
}

export interface HomepageDocument {
  heroSection?: HeroSection;
  servicesSection?: ServicesSection;
  ctaBanner?: CtaBanner;
  whyHomeCare?: WhyHomeCare;
  aboutSection?: AboutSection;
  processSection?: ProcessSection;
  pricingSection?: PricingSection;
  comparisonSection?: ComparisonSection;
  serviceAreasSection?: ServiceAreasSection;
  testimonialsSection?: TestimonialsSection;
  faqSection?: FaqSection;
  contactSection?: ContactSection;
}

export interface TestimonialDocument {
  _id: string;
  name?: string;
  location?: string;
  rating?: number;
  review?: string;
  date?: string;
  photo?: SanityImage;
  featured?: boolean;
}

export interface MenuItem {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
}

export interface HeaderDocument {
  logo?: SanityImage;
  brandName?: string;
  brandSubtext?: string;
  menuItems?: MenuItem[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  phoneNumber?: string;
  mobileMenuTitle?: string;
  mobileMenuDescription?: string;
}

export interface FooterMenu {
  title?: string;
  links?: MenuItem[];
}

export interface SocialLink {
  platform?: string;
  url?: string;
}

export interface FooterDocument {
  logo?: SanityImage;
  aboutText?: string;
  footerMenus?: FooterMenu[];
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  socialLinks?: SocialLink[];
  copyright?: string;
  developerCredit?: string;
  developerLink?: string;
}

export interface SiteSettingsDocument {
  businessName?: string;
  shortName?: string;
  tagline?: string;
  siteUrl?: string;
  phone?: string;
  phoneDisplay?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  hours?: string;
  googleMapUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: SanityImage;
  schemaOrganization?: string;
  googleReviewUrl?: string;
}

export interface GlobalUIDocument {
  primaryColor?: string;
  secondaryColor?: string;
  callButtonText?: string;
  whatsappButtonText?: string;
  stickyCallEnabled?: boolean;
  stickyWhatsappEnabled?: boolean;
  defaultCTAHeading?: string;
  defaultCTADescription?: string;
  fallbackImage?: SanityImage;
  whatsappMessage?: string;
}

export interface SiteContent {
  homepage: HomepageDocument;
  testimonials: TestimonialDocument[];
  header: HeaderDocument;
  footer: FooterDocument;
  siteSettings: SiteSettingsDocument;
  globalUI: GlobalUIDocument;
}
