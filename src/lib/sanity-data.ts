import { cache } from "react";
import { sanityClient } from "./sanity";
import { siteContentQuery } from "./queries";
import { mergeSiteContent } from "./sanity-fallback";
import type { SiteContent } from "./sanity-types";

export const SITE_CONTENT_TAG = "site-content";
export const REVALIDATE_SECONDS = 60;

function getFetchOptions() {
  if (process.env.NODE_ENV === "development") {
    return { cache: "no-store" as const };
  }

  return {
    next: {
      revalidate: REVALIDATE_SECONDS,
      tags: [SITE_CONTENT_TAG],
    },
  };
}

export const fetchSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    const data = await sanityClient.fetch<Partial<SiteContent>>(
      siteContentQuery,
      {},
      getFetchOptions()
    );

    return mergeSiteContent(data || {});
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Sanity fetch failed, using fallback content:", error);
    }
    return mergeSiteContent({});
  }
});
