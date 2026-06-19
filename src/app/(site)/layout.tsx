import type { Metadata } from "next";
import { buildMetadataFromSettings } from "@/lib/metadata";
import { fetchSiteContent } from "@/lib/sanity-data";
import {
  getLocalBusinessSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { SiteProvider } from "@/context/SiteContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ContentRefreshListener from "@/components/sanity/ContentRefreshListener";

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await fetchSiteContent();
  return buildMetadataFromSettings(siteContent.siteSettings);
}

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await fetchSiteContent();
  const schemas = [
    getLocalBusinessSchema(),
    getFAQSchema(),
    getBreadcrumbSchema([{ name: "Home", url: SITE.url }]),
    getServiceSchema(),
  ];

  return (
    <SiteProvider value={siteContent}>
      <ContentRefreshListener />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCTA />
      <FloatingWhatsApp />
      <div className="h-36 md:hidden" aria-hidden="true" />
    </SiteProvider>
  );
}
