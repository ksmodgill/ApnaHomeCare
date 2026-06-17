"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Heart, MessageCircle, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I need home nursing services in Muzaffarpur.")}`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-[70] transition-shadow duration-300 ${
          scrolled || isOpen ? "glass shadow-md" : "glass shadow-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-md">
              <Heart className="h-5 w-5 text-white" fill="white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-secondary">
                {SITE.shortName}
              </span>
              <span className="text-[10px] text-muted sm:text-xs">
                Nursing Services
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-secondary/80 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden items-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-primary/30 sm:flex"
              aria-label="Call Apna Home Care"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-surface pt-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 overflow-y-auto overscroll-y-contain px-4 pt-5 pb-4">
              <div className="mb-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                <p className="font-display text-base font-bold leading-snug text-secondary">
                  Give Your Parents the Care They Deserve at Home
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Trained nurses in Muzaffarpur, Kanti & Motihari — same-day dispatch,
                  elder care, post-surgery recovery, and 24/7 emergency support at your
                  doorstep.
                </p>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t border-border pt-5 pb-2">
                <h2 className="mb-4 text-center font-display text-sm font-bold uppercase tracking-wider text-secondary">
                  Quick Contact
                </h2>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Call us anytime</p>
                      <p className="font-semibold text-secondary">{SITE.phoneDisplay}</p>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-green-500/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">WhatsApp us</p>
                      <p className="font-semibold text-secondary">Chat on WhatsApp</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-xl border border-border p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Our location</p>
                      <p className="text-sm font-medium text-secondary">{SITE.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-border p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Availability</p>
                      <p className="font-semibold text-secondary">{SITE.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-border bg-surface px-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl gradient-primary py-3 text-sm font-semibold text-white shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3 text-sm font-semibold text-white shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
