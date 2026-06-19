"use client";

import Image from "next/image";
import { getImageAlt, getImageUrl } from "@/lib/image";
import type { SanityImage } from "@/lib/sanity-types";

interface SanityImageProps {
  image?: SanityImage | null;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function SanityImage({
  image,
  fallbackSrc,
  alt,
  className = "",
  fill,
  width,
  height,
  priority,
  sizes,
}: SanityImageProps) {
  const src = getImageUrl(image) || fallbackSrc;

  if (!src) return null;

  const imageAlt = getImageAlt(image, alt);

  if (fill) {
    return (
      <Image
        src={src}
        alt={imageAlt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={imageAlt}
      width={width || 800}
      height={height || 600}
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}
