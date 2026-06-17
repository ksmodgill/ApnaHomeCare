"use client";

import Image from "next/image";
import { Phone, AlertCircle, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.emergency}
          alt="Emergency home nursing support available 24/7 in Muzaffarpur"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="section-padding relative">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <AlertCircle className="h-4 w-4 text-primary-light" />
              Emergency Response · 24/7
            </div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Hospital Discharged Them Today?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              Don&apos;t panic. Call us now — we&apos;ve placed nurses in Muzaffarpur homes within
              hours of discharge, often the same evening.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                href={`tel:${SITE.phone}`}
                className="!px-10 !py-4 !text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now — {SITE.phoneDisplay}
              </CTAButton>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4" />
              Average response time: under 4 hours
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
