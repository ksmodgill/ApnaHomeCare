"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useSiteContent } from "@/context/SiteContext";

export default function MobileCTA() {
  const { siteSettings, globalUI } = useSiteContent();

  if (!globalUI.stickyCallEnabled && !globalUI.stickyWhatsappEnabled) {
    return null;
  }

  const phone = siteSettings.phone || "";
  const whatsappNumber = siteSettings.whatsapp || "";
  const whatsappMessage = globalUI.whatsappMessage || "";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const heading = globalUI.defaultCTAHeading;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 md:hidden">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-xl backdrop-blur-md">
        <div className="p-4">
          {heading && (
            <p className="mb-3 text-center font-display text-sm font-bold text-secondary">
              {heading}
            </p>
          )}
          <div className="grid grid-cols-2 gap-3">
            {globalUI.stickyCallEnabled && phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 rounded-xl gradient-primary py-2.5 text-sm font-semibold text-white shadow-md transition-colors active:opacity-90"
                aria-label={globalUI.callButtonText || "Call now"}
              >
                <Phone className="h-4 w-4" />
                {globalUI.callButtonText || "Call Now"}
              </a>
            )}
            {globalUI.stickyWhatsappEnabled && whatsappNumber && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-sm font-semibold text-white shadow-md transition-colors active:bg-green-600"
                aria-label={globalUI.whatsappButtonText || "WhatsApp"}
              >
                <MessageCircle className="h-4 w-4" />
                {globalUI.whatsappButtonText || "WhatsApp"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
