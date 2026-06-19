"use client";

import { Phone, CheckCircle, Shield } from "lucide-react";
import InquiryForm from "@/components/ui/InquiryForm";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import FeaturedReview from "@/components/sections/FeaturedReview";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import { useSiteContent } from "@/context/SiteContext";
import type { HeroSection, TestimonialDocument } from "@/lib/sanity-types";

interface HeroProps {
  data?: HeroSection;
  featuredReview?: TestimonialDocument;
}

export default function Hero({ data, featuredReview }: HeroProps) {
  const { siteSettings } = useSiteContent();

  if (!data?.title) return null;

  const phone = siteSettings.phone || "";
  const secondaryLink =
    data.secondaryButtonLink || (phone ? `tel:${phone}` : "#contact");

  return (
    <section className="gradient-hero relative overflow-hidden pt-28 pb-10 md:pt-28 md:pb-16 lg:pt-32">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {data.badgeText && (
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              {data.badgeText}
            </div>
          </Reveal>
        )}

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h1 className="font-display text-[1.7rem] font-bold leading-[1.15] tracking-tight text-balance text-secondary sm:text-3xl lg:text-[2.5rem] xl:text-[2.65rem]">
                {data.title}
              </h1>
            </Reveal>
            {(data.subtitle || data.subtitleHighlight) && (
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:mt-5 md:text-lg">
                  {data.subtitleHighlight && (
                    <>
                      Trained nurses and caregivers in{" "}
                      <span className="font-semibold text-secondary">
                        {data.subtitleHighlight}
                      </span>
                    </>
                  )}
                  {data.subtitle}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-nowrap items-center gap-2 md:mt-8 md:gap-3">
                {data.primaryButtonText && (
                  <CTAButton
                    href={data.primaryButtonLink || "#contact"}
                    className="shrink px-4 py-2.5 text-sm whitespace-nowrap"
                  >
                    {data.primaryButtonText}
                  </CTAButton>
                )}
                {data.secondaryButtonText && (
                  <CTAButton
                    href={secondaryLink}
                    variant="outline"
                    className="shrink px-4 py-2.5 text-sm whitespace-nowrap"
                  >
                    <Phone className="h-4 w-4" />
                    {data.secondaryButtonText}
                  </CTAButton>
                )}
              </div>
            </Reveal>

            {data.trustBadges && data.trustBadges.length > 0 && (
              <Reveal delay={0.2}>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:mt-8 md:gap-2.5">
                  {data.trustBadges.map((badge) => (
                    <li
                      key={badge}
                      className="flex items-center gap-2 text-sm font-medium text-secondary/85"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      {badge}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-secondary/10 ring-1 ring-black/5">
                <SanityImage
                  image={data.heroImage}
                  fallbackSrc={FALLBACK_IMAGES.hero}
                  alt="Home nursing care in Muzaffarpur"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {data.stats && data.stats.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface/80 p-4 backdrop-blur-sm sm:grid-cols-4 md:mt-8">
              {data.stats.map((stat) => (
                <div key={stat.title} className="text-center">
                  <p className="font-display text-lg font-bold text-primary md:text-xl">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted md:text-xs">{stat.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {featuredReview && <FeaturedReview review={featuredReview} />}

        {data.consultationFormTitle && (
          <Reveal delay={0.25}>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-lg md:mt-10 md:p-6 lg:p-7">
              <h2 className="mb-4 font-display text-lg font-bold text-secondary md:text-xl">
                {data.consultationFormTitle}
              </h2>
              <InquiryForm variant="hero" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
