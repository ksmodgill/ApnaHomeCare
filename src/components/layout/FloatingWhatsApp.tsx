"use client";

import { MessageCircle } from "lucide-react";
import { useSiteContent } from "@/context/SiteContext";

export default function FloatingWhatsApp() {
  const { siteSettings, globalUI } = useSiteContent();

  if (globalUI.stickyWhatsappEnabled === false) {
    return null;
  }

  const whatsappNumber = siteSettings.whatsapp || "";
  if (!whatsappNumber) return null;

  const whatsappMessage = globalUI.whatsappMessage || "";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl md:flex"
      aria-label={globalUI.whatsappButtonText || "Chat on WhatsApp"}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400" />
      </span>
    </a>
  );
}
