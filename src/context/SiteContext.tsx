"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteContent } from "@/lib/sanity-types";

const SiteContext = createContext<SiteContent | null>(null);

export function SiteProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: SiteContent;
}) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContent must be used within SiteProvider");
  }
  return context;
}
