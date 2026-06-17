import { SITE } from "./constants";

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
