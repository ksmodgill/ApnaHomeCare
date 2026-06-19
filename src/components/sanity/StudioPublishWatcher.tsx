"use client";

import { useEffect, useRef } from "react";
import { sanityClient } from "@/lib/sanity";
import {
  notifyOpenSiteTabs,
  triggerSiteRevalidation,
} from "@/lib/sanity-revalidate";

const WATCH_QUERY = `{
  "homepage": *[_type == "homepage"][0]._updatedAt,
  "header": *[_type == "header"][0]._updatedAt,
  "footer": *[_type == "footer"][0]._updatedAt,
  "siteSettings": *[_type == "siteSettings"][0]._updatedAt,
  "globalUI": *[_type == "globalUI"][0]._updatedAt,
  "testimonials": count(*[_type == "testimonial"])
}`;

const POLL_INTERVAL_MS = 2000;

export default function StudioPublishWatcher() {
  const lastSnapshot = useRef<string | null>(null);

  useEffect(() => {
    let active = true;

    const checkForUpdates = async () => {
      try {
        const snapshot = await sanityClient.fetch<Record<string, string | number>>(
          WATCH_QUERY,
          {},
          { cache: "no-store" }
        );
        const serialized = JSON.stringify(snapshot);

        if (lastSnapshot.current && lastSnapshot.current !== serialized) {
          const ok = await triggerSiteRevalidation();
          if (ok) {
            notifyOpenSiteTabs();
          }
        }

        lastSnapshot.current = serialized;
      } catch {
        // Ignore polling errors; next interval will retry.
      }
    };

    void checkForUpdates();
    const intervalId = window.setInterval(() => {
      if (active) void checkForUpdates();
    }, POLL_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return null;
}
