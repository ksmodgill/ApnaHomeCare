"use client";

import {
  ShieldCheck,
  Stethoscope,
  IndianRupee,
  Zap,
  Heart,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import type { WhyHomeCare } from "@/lib/sanity-types";

const defaultIcons = [ShieldCheck, Stethoscope, IndianRupee, Zap, Heart, Phone];

interface WhyChooseUsProps {
  data?: WhyHomeCare;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  if (!data?.heading || !data.benefits?.length) return null;

  return (
    <section id="why-us" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.description}
          />
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-lg lg:min-h-0">
              <SanityImage
                image={data.image}
                fallbackSrc={FALLBACK_IMAGES.whyHomeCare}
                alt="Nurse supporting Indian family with home patient care in Muzaffarpur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="image-overlay absolute inset-0" />
              {(data.overlayTitle || data.overlayText) && (
                <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-white/95 p-3.5 shadow-lg md:p-4">
                  {data.overlayTitle && (
                    <p className="text-[11px] font-bold uppercase tracking-wide text-primary">
                      {data.overlayTitle}
                    </p>
                  )}
                  {data.overlayText && (
                    <p className="mt-1 text-xs leading-snug text-secondary md:text-sm">
                      {data.overlayText}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Reveal>

          <RevealStagger className="grid content-start gap-2.5 sm:grid-cols-2 lg:col-span-7 lg:gap-3">
            {data.benefits.map((item, index) => {
              const Icon = defaultIcons[index % defaultIcons.length];
              return (
                <RevealItem key={item.title}>
                  <div className="flex h-full gap-3 rounded-xl border border-border bg-background p-3 md:p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-sm font-bold leading-snug text-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
