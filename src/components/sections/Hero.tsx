"use client";

import Image from "next/image";
import { Phone, CheckCircle, Shield } from "lucide-react";
import { TRUST_BADGES, SITE } from "@/lib/constants";
import InquiryForm from "@/components/ui/InquiryForm";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import FeaturedReview from "@/components/sections/FeaturedReview";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-28 pb-10 md:pt-28 md:pb-16 lg:pt-32">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="h-4 w-4" />
            Trusted Home Nursing in Muzaffarpur
          </div>
        </Reveal>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h1 className="font-display text-[1.7rem] font-bold leading-[1.15] tracking-tight text-balance text-secondary sm:text-3xl lg:text-[2.5rem] xl:text-[2.65rem]">
                Give Your Parents the Care They Deserve at Home
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:mt-5 md:text-lg">
                Trained nurses and caregivers in{" "}
                <span className="font-semibold text-secondary">Muzaffarpur, Kanti & Motihari</span>
                . Elder care, post-surgery recovery, and emergency support — at your doorstep.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-nowrap items-center gap-2 md:mt-8 md:gap-3">
                <CTAButton href="#contact" className="shrink px-4 py-2.5 text-sm whitespace-nowrap">
                  Book Home Visit
                </CTAButton>
                <CTAButton
                  href={`tel:${SITE.phone}`}
                  variant="outline"
                  className="shrink px-4 py-2.5 text-sm whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </CTAButton>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:mt-8 md:gap-2.5">
                {TRUST_BADGES.map((badge) => (
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
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-secondary/10 ring-1 ring-black/5">
                <Image
                  src="/hero-image.png"
                  alt="Indian nurse providing compassionate home care to elderly patient in Muzaffarpur"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface/80 p-4 backdrop-blur-sm sm:grid-cols-4 md:mt-8">
            {[
              { v: "500+", l: "Families helped" },
              { v: "GNM", l: "Certified nurses" },
              { v: "24/7", l: "Always open" },
              { v: "<4 hrs", l: "Emergency dispatch" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-lg font-bold text-primary md:text-xl">{s.v}</p>
                <p className="text-[11px] text-muted md:text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <FeaturedReview />

        <Reveal delay={0.25}>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-lg md:mt-10 md:p-6 lg:p-7">
            <h2 className="mb-4 font-display text-lg font-bold text-secondary md:text-xl">
              Book a Free Home Care Consultation
            </h2>
            <InquiryForm variant="hero" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
