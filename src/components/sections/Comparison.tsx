"use client";

import { Check, X, Home, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import type { ComparisonSection } from "@/lib/sanity-types";

interface ComparisonProps {
  data?: ComparisonSection;
}

export default function Comparison({ data }: ComparisonProps) {
  if (!data?.heading || !data.leftItems?.length || !data.rightItems?.length) return null;

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Reveal direction="right">
            <article className="card-hover overflow-hidden rounded-2xl border-2 border-primary/30 bg-background shadow-lg">
              <div className="relative h-40">
                <SanityImage
                  image={data.leftImage}
                  fallbackSrc={FALLBACK_IMAGES.comparisonHome}
                  alt="Patient recovering comfortably at home with nursing support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="image-overlay absolute inset-0" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {data.leftTitle || "Home Nursing Care"}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 p-5 md:p-6">
                {data.leftItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal direction="left" delay={0.08}>
            <article className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <div className="relative h-40">
                <SanityImage
                  image={data.rightImage}
                  fallbackSrc={FALLBACK_IMAGES.comparisonHospital}
                  alt="Hospital ward environment"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-secondary/50" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {data.rightTitle || "Extended Hospital Stay"}
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 p-5 md:p-6">
                {data.rightItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
