"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import type { AboutSection } from "@/lib/sanity-types";

interface AboutProps {
  data?: AboutSection;
}

export default function About({ data }: AboutProps) {
  if (!data?.heading) return null;

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <SanityImage
                image={data.image}
                fallbackSrc={FALLBACK_IMAGES.about}
                alt="Apna Home Care nurse providing compassionate support to elderly patient at home in Muzaffarpur"
                width={600}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading badge={data.badge} title={data.heading} align="left" />
            </Reveal>
            {data.description && (
              <Reveal delay={0.1}>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {data.description}
                </p>
              </Reveal>
            )}
            {data.buttonText && (
              <Reveal delay={0.15}>
                <div className="mt-6">
                  <CTAButton href={data.buttonLink || "#contact"}>
                    {data.buttonText}
                  </CTAButton>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
