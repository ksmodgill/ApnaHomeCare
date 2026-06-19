"use client";

import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import SanityImage from "@/components/ui/SanityImage";
import { FALLBACK_IMAGES } from "@/lib/sanity-fallback";
import { useSiteContent } from "@/context/SiteContext";
import type { ContactSection } from "@/lib/sanity-types";

interface ContactProps {
  data?: ContactSection;
}

export default function Contact({ data }: ContactProps) {
  const { siteSettings, globalUI } = useSiteContent();

  if (!data?.heading) return null;

  const phone = data.phone || siteSettings.phone || "";
  const phoneDisplay = siteSettings.phoneDisplay || phone;
  const whatsapp = data.whatsapp || siteSettings.whatsapp || "";
  const whatsappMessage =
    globalUI.whatsappMessage || "Hi, I need home nursing in Muzaffarpur.";

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={data.badge}
            title={data.heading}
            subtitle={data.subHeading}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal direction="right">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                  <SanityImage
                    image={data.image}
                    fallbackSrc={FALLBACK_IMAGES.contactMain}
                    alt="Nurse arriving for home visit in Muzaffarpur"
                    width={500}
                    height={280}
                    className="h-40 w-full object-cover md:h-48"
                    sizes="(max-width: 1024px) 66vw, 33vw"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <SanityImage
                    image={data.secondaryImage}
                    fallbackSrc={FALLBACK_IMAGES.contactSupport}
                    alt="Care coordinator supporting family by phone"
                    width={200}
                    height={200}
                    className="h-40 w-full object-cover md:h-48"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm md:p-6">
                <h3 className="font-display text-lg font-bold text-secondary">
                  {siteSettings.businessName}
                </h3>
                <div className="mt-4 space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted">{siteSettings.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`tel:${phone}`} className="font-semibold text-primary">
                      {phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted">{siteSettings.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`mailto:${siteSettings.email}`} className="text-primary">
                      {siteSettings.email}
                    </a>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <CTAButton href={`tel:${phone}`}>
                    <Phone className="h-4 w-4" />
                    {globalUI.callButtonText || "Call Now"}
                  </CTAButton>
                  <CTAButton
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                    variant="whatsapp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {globalUI.whatsappButtonText || "WhatsApp"}
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-lg md:p-7">
              <h3 className="mb-4 font-display text-lg font-bold text-secondary">
                {data.formTitle || "Book a Free Home Visit"}
              </h3>
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
