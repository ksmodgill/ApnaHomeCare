"use client";

import { Phone, AlertCircle, Clock } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import { useSiteContent } from "@/context/SiteContext";
import type { CtaBanner } from "@/lib/sanity-types";

interface EmergencyCTAProps {
  data?: CtaBanner;
}

export default function EmergencyCTA({ data }: EmergencyCTAProps) {
  const { siteSettings } = useSiteContent();

  if (!data?.title) return null;

  const phone = siteSettings.phone || "";
  const phoneDisplay = siteSettings.phoneDisplay || phone;
  const buttonLink = data.buttonLink || (phone ? `tel:${phone}` : "#contact");
  const buttonText =
    data.buttonText || (phoneDisplay ? `Call Now — ${phoneDisplay}` : "Call Now");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SanityImage
          image={data.backgroundImage}
          fallbackSrc={FALLBACK_IMAGES.emergency}
          alt="Emergency home nursing support available 24/7 in Muzaffarpur"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="section-padding relative">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            {data.badge && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <AlertCircle className="h-4 w-4 text-primary-light" />
                {data.badge}
              </div>
            )}
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                {data.subtitle}
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href={buttonLink} className="!px-10 !py-4 !text-lg">
                <Phone className="h-5 w-5" />
                {buttonText}
              </CTAButton>
            </div>
            {data.footerNote && (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4" />
                {data.footerNote}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
