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
import ContentRefreshListener from "@/components/sanity/ContentRefreshListener";

export default function SiteLayout({
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
    <>
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
    </>
  );
}
