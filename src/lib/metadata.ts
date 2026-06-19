import type { Metadata } from "next";
import { SITE } from "./constants";
import { getImageUrl } from "./image";
import type { SiteSettingsDocument } from "./sanity-types";

export const defaultMetadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Home Nursing Services in Muzaffarpur | Apna Home Care Nursing Services",
    template: "%s | Apna Home Care",
  },
  description:
    "Professional home nursing services in Muzaffarpur. Elder care, patient care, post-surgery assistance, bedridden patient support and trained nursing staff at home.",
  keywords: [
    "Home Nursing Services in Muzaffarpur",
    "Nursing Care at Home Muzaffarpur",
    "Elder Care Services Muzaffarpur",
    "Patient Care Services Muzaffarpur",
    "Home Nurse in Muzaffarpur",
    "Bedridden Patient Care Muzaffarpur",
    "Home Healthcare Services Bihar",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Home Nursing Services in Muzaffarpur | Apna Home Care Nursing Services",
    description:
      "Professional home nursing services in Muzaffarpur. Elder care, patient care, post-surgery assistance, bedridden patient support and trained nursing staff at home.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Apna Home Care - Home Nursing Services in Muzaffarpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Nursing Services in Muzaffarpur | Apna Home Care",
    description:
      "Professional home nursing services in Muzaffarpur. Elder care, patient care, post-surgery assistance and trained nursing staff at home.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {},
};

export function buildMetadataFromSettings(
  settings?: SiteSettingsDocument | null
): Metadata {
  const siteUrl = settings?.siteUrl || SITE.url;
  const businessName = settings?.businessName || SITE.name;
  const title =
    settings?.seoTitle ||
    "Home Nursing Services in Muzaffarpur | Apna Home Care Nursing Services";
  const description =
    settings?.seoDescription ||
    "Professional home nursing services in Muzaffarpur. Elder care, patient care, post-surgery assistance, bedridden patient support and trained nursing staff at home.";
  const seoImageUrl = getImageUrl(settings?.seoImage, 1200);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${businessName}`,
    },
    description,
    keywords: defaultMetadata.keywords,
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    formatDetection: defaultMetadata.formatDetection,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: businessName,
      title,
      description,
      images: seoImageUrl
        ? [{ url: seoImageUrl, width: 1200, height: 630, alt: businessName }]
        : defaultMetadata.openGraph.images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: seoImageUrl ? [seoImageUrl] : defaultMetadata.twitter.images,
    },
    robots: defaultMetadata.robots,
    alternates: {
      canonical: siteUrl,
    },
    icons: defaultMetadata.icons,
    verification: defaultMetadata.verification,
  };
}
