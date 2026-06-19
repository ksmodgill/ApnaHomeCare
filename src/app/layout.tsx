import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { buildMetadataFromSettings } from "@/lib/metadata";
import { fetchSiteContent } from "@/lib/sanity-data";
import { SiteProvider } from "@/context/SiteContext";
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

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await fetchSiteContent();
  return buildMetadataFromSettings(siteContent.siteSettings);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContent = await fetchSiteContent();

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SiteProvider value={siteContent}>{children}</SiteProvider>
      </body>
    </html>
  );
}
