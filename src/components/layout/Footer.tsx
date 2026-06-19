"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { useSiteContent } from "@/context/SiteContext";
import SanityImage from "@/components/ui/SanityImage";

const socialIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
};

export default function Footer() {
  const { footer, siteSettings } = useSiteContent();
  const currentYear = new Date().getFullYear();
  const brandName =
    footer.logo?.altText ||
    siteSettings.shortName ||
    siteSettings.businessName ||
    "";
  const footerMenus = footer.footerMenus || [];
  const socialLinks = footer.socialLinks || [];
  const phone = footer.phone || siteSettings.phoneDisplay || siteSettings.phone || "";
  const copyright =
    footer.copyright ||
    `© ${currentYear} ${siteSettings.businessName || brandName}. All rights reserved.`;

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              {footer.logo ? (
                <SanityImage
                  image={footer.logo}
                  alt={brandName}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                  <Heart className="h-5 w-5 text-white" fill="white" />
                </div>
              )}
              <span className="font-display text-lg font-bold">{brandName}</span>
            </div>
            {footer.aboutText && (
              <p className="mb-4 text-sm leading-relaxed text-white/70">{footer.aboutText}</p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform?.toLowerCase() || ""] || MessageCircle;
                  const hoverClass =
                    social.platform?.toLowerCase() === "instagram"
                      ? "hover:bg-pink-600"
                      : social.platform?.toLowerCase() === "facebook"
                        ? "hover:bg-[#1877F2]"
                        : social.platform?.toLowerCase() === "whatsapp"
                          ? "hover:bg-green-500"
                          : "hover:bg-primary";

                  return (
                    <a
                      key={`${social.platform}-${social.url}`}
                      href={social.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors ${hoverClass}`}
                      aria-label={`Follow us on ${social.platform || "social media"}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
                {phone && (
                  <a
                    href={`tel:${siteSettings.phone || phone}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                    aria-label="Call us"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {footerMenus.map((menu) => (
            <div key={menu.title}>
              {menu.title && (
                <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
                  {menu.title}
                </h3>
              )}
              {menu.links && menu.links.length > 0 && (
                <ul className="space-y-2.5">
                  {menu.links.map((item) => (
                    <li key={`${item.label}-${item.url}`}>
                      <Link
                        href={item.url || "#"}
                        target={item.openInNewTab ? "_blank" : undefined}
                        rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/70 transition-colors hover:text-primary-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              {(footer.address || siteSettings.address) && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{footer.address || siteSettings.address}</span>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${siteSettings.phone || phone}`} className="hover:text-white">
                    {phone}
                  </a>
                </div>
              )}
              {(footer.hours || siteSettings.hours) && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  <span>{footer.hours || siteSettings.hours}</span>
                </div>
              )}
              {(footer.email || siteSettings.email) && (
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${footer.email || siteSettings.email}`}
                    className="hover:text-white"
                  >
                    {footer.email || siteSettings.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">{copyright}</p>
          {footer.developerCredit && footer.developerLink && (
            <a
              href={footer.developerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 transition-colors hover:text-primary-light"
            >
              {footer.developerCredit}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
