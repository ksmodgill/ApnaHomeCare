"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 md:hidden">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-xl backdrop-blur-md">
        <div className="p-4">
          <p className="mb-3 text-center font-display text-sm font-bold text-secondary">
            Need a Nurse at Home? Call Us Now
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl gradient-primary py-2.5 text-sm font-semibold text-white shadow-md transition-colors active:opacity-90"
              aria-label="Call Apna Home Care"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I need home nursing services in Muzaffarpur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-2.5 text-sm font-semibold text-white shadow-md transition-colors active:bg-green-600"
              aria-label="WhatsApp Apna Home Care"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
