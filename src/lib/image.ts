import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./sanity";
import type { SanityImage } from "./sanity-types";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImage | NonNullable<SanityImage["asset"]>) {
  return builder.image(source);
}

export function getImageUrl(
  image?: SanityImage | null,
  width = 1200
): string | undefined {
  if (!image?.asset) return undefined;
  return urlFor(image).width(width).auto("format").quality(85).url();
}

export function getImageAlt(image?: SanityImage | null, fallback = ""): string {
  return image?.altText || fallback;
}
