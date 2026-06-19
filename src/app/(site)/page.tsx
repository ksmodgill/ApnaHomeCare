import { fetchSiteContent } from "@/lib/sanity-data";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import CarePackages from "@/components/sections/CarePackages";
import Comparison from "@/components/sections/Comparison";
import CoverageMap from "@/components/sections/CoverageMap";
import GoogleReviews from "@/components/sections/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const revalidate = 60;

export default async function HomePage() {
  const siteContent = await fetchSiteContent();
  const { homepage, testimonials } = siteContent;
  const featuredReview =
    testimonials.find((item) => item.featured) || testimonials[0];

  return (
    <>
      <Hero data={homepage.heroSection} featuredReview={featuredReview} />
      <Services data={homepage.servicesSection} />
      <EmergencyCTA data={homepage.ctaBanner} />
      <WhyChooseUs data={homepage.whyHomeCare} />
      <About data={homepage.aboutSection} />
      <Process data={homepage.processSection} />
      <CarePackages data={homepage.pricingSection} />
      <Comparison data={homepage.comparisonSection} />
      <CoverageMap data={homepage.serviceAreasSection} />
      <GoogleReviews
        data={homepage.testimonialsSection}
        testimonials={testimonials}
        featuredReview={featuredReview}
      />
      <FAQ data={homepage.faqSection} />
      <Contact data={homepage.contactSection} />
    </>
  );
}
