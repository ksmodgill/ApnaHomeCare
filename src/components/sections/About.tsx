"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/about-us-image.png"
                alt="Apna Home Care nurse providing compassionate support to elderly patient at home in Muzaffarpur"
                width={600}
                height={600}
                loading="lazy"
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                badge="About Us"
                title="We Started This Because Families in Bihar Deserve Better Home Care"
                align="left"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                Apna Home Care is a Muzaffarpur-based nursing service built for sons,
                daughters, and spouses who cannot be at the bedside 24 hours a day. We
                send trained nurses and attendants to your home — for recovery after
                surgery, long-term elder care, or the urgent hours after hospital
                discharge.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6">
                <CTAButton href="#contact">Talk to Our Care Team</CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
