import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { defaultMetadata } from "@/lib/metadata";
import {
  getLocalBusinessSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    getLocalBusinessSchema(),
    getFAQSchema(),
    getBreadcrumbSchema([{ name: "Home", url: SITE.url }]),
    getServiceSchema(),
  ];

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <FloatingWhatsApp />
        <div className="h-36 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
