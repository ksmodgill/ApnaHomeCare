"use client";

import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Get Started"
            title="A Nurse Can Be at Your Home Today"
            subtitle="Tell us what your patient needs. Our coordinator calls back within 30 minutes — 24 hours a day."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal direction="right">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={IMAGES.contact.main}
                    alt="Nurse arriving for home visit in Muzaffarpur"
                    width={500}
                    height={280}
                    loading="lazy"
                    className="h-40 w-full object-cover md:h-48"
                    sizes="(max-width: 1024px) 66vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={IMAGES.contact.support}
                    alt="Care coordinator supporting family by phone"
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-40 w-full object-cover md:h-48"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm md:p-6">
                <h3 className="font-display text-lg font-bold text-secondary">
                  {SITE.name}
                </h3>
                <div className="mt-4 space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted">{SITE.address.full}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted">{SITE.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`mailto:${SITE.email}`} className="text-primary">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <CTAButton href={`tel:${SITE.phone}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </CTAButton>
                  <CTAButton
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I need home nursing in Muzaffarpur.")}`}
                    variant="whatsapp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-lg md:p-7">
              <h3 className="mb-4 font-display text-lg font-bold text-secondary">
                Book a Free Home Visit
              </h3>
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
