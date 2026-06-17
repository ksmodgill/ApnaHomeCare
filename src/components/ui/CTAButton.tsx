"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  className?: string;
}

const variants = {
  primary:
    "gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35",
  secondary: "bg-secondary text-white shadow-lg hover:bg-secondary-light",
  outline:
    "border-2 border-secondary/15 bg-surface text-secondary hover:border-primary hover:text-primary",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-green-500/25 hover:bg-[#1fb855]",
};

function isAnchorHref(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http") ||
    href.startsWith("https")
  );
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold transition-colors";
  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      {isAnchorHref(href) ? (
        <a href={href} className={classes}>
          {children}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )}
    </motion.div>
  );
}
