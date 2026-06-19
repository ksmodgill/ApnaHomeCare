"use client";

import { useState } from "react";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LocationModal from "@/components/ui/LocationModal";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { useSiteContent } from "@/context/SiteContext";
import type { ServiceAreasSection } from "@/lib/sanity-types";

interface CoverageMapProps {
  data?: ServiceAreasSection;
}

export default function CoverageMap({ data }: CoverageMapProps) {
  const { siteSettings } = useSiteContent();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  if (!data?.heading || !data.areas?.length) return null;

  const selectedLocation =
    data.areas.find((area) => area.slug === selectedSlug) ?? null;

  const modalLocation = selectedLocation
    ? {
        slug: selectedLocation.slug || selectedLocation.name?.toLowerCase() || "",
        name: selectedLocation.name || "",
        description: selectedLocation.description || "",
      }
    : null;

  const locationsForModal = data.areas.map((area) => ({
    slug: area.slug || area.name?.toLowerCase().replace(/\s+/g, "-") || "",
    name: area.name || "",
    description: area.description || "",
  }));

  return (
    <section id="coverage" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        {data.stats && data.stats.length > 0 && (
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mb-8">
            {data.stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-border bg-surface p-4 text-center"
              >
                <p className="font-display text-xl font-bold text-primary md:text-2xl">
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.title}</p>
              </div>
            ))}
          </div>
        )}

        <RevealStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.areas.map((location) => {
            const slug =
              location.slug || location.name?.toLowerCase().replace(/\s+/g, "-") || "";
            return (
              <RevealItem key={slug}>
                <button
                  type="button"
                  onClick={() => setSelectedSlug(slug)}
                  className="card-hover group flex h-full w-full flex-col rounded-2xl border border-border bg-surface p-5 text-left shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-secondary group-hover:text-primary">
                    {location.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {location.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View services
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:mt-8 md:p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-display font-bold text-secondary">
                  {data.officeLabel || "Primary Office"}
                </p>
                <p className="mt-1 text-sm text-muted">{siteSettings.address}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {(data.ctaText || data.buttonText) && (
          <Reveal delay={0.15}>
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl gradient-primary p-5 text-white sm:flex-row md:mt-6 md:p-6">
              {data.ctaText && (
                <p className="text-sm md:text-base">{data.ctaText}</p>
              )}
              {data.buttonText && (
                <a
                  href={data.buttonLink || `tel:${siteSettings.phone}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-primary shadow-lg transition-colors hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" />
                  {data.buttonText}
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>

      <LocationModal
        location={modalLocation}
        locations={locationsForModal}
        onClose={() => setSelectedSlug(null)}
        onSelectLocation={setSelectedSlug}
      />
    </section>
  );
}
