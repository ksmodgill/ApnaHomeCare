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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EmergencyCTA />
      <WhyChooseUs />
      <About />
      <Process />
      <CarePackages />
      <Comparison />
      <CoverageMap />
      <GoogleReviews />
      <FAQ />
      <Contact />
    </>
  );
}
