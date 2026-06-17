import Link from "next/link";
import { Heart, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import {
  SITE,
  FOOTER_SERVICES,
  FOOTER_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="font-display text-lg font-bold">{SITE.shortName}</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Trusted home nursing services in Muzaffarpur and
              surrounding areas of Bihar.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-green-500"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <a
            href="https://sintyz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 transition-colors hover:text-primary-light"
          >
            Designed and Developed by Sintyz.com
          </a>
        </div>
      </div>
    </footer>
  );
}
