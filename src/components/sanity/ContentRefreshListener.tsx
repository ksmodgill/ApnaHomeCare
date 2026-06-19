"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SANITY_REFRESH_CHANNEL } from "@/lib/sanity-revalidate";

export default function ContentRefreshListener() {
  const router = useRouter();

  useEffect(() => {
    if (!("BroadcastChannel" in window)) return;

    const channel = new BroadcastChannel(SANITY_REFRESH_CHANNEL);
    channel.onmessage = () => {
      router.refresh();
    };

    return () => channel.close();
  }, [router]);

  return null;
}
