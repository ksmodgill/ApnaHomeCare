export const SANITY_REFRESH_CHANNEL = "apna-sanity-content-updated";

export async function triggerSiteRevalidation() {
  const secret = process.env.NEXT_PUBLIC_SANITY_REVALIDATE_SECRET;
  if (!secret) return false;

  try {
    const response = await fetch(`/api/revalidate?secret=${secret}`, {
      method: "POST",
    });
    return response.ok;
  } catch {
    return false;
  }
}

export function notifyOpenSiteTabs() {
  if (typeof window === "undefined" || !("BroadcastChannel" in window)) return;
  const channel = new BroadcastChannel(SANITY_REFRESH_CHANNEL);
  channel.postMessage({ type: "revalidated", at: Date.now() });
  channel.close();
}
