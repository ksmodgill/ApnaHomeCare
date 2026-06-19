import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { SITE_CONTENT_TAG } from "@/lib/sanity-data";

export async function POST(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ||
    request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag(SITE_CONTENT_TAG);
  revalidatePath("/", "layout");
  revalidatePath("/");

  return NextResponse.json({
    revalidated: true,
    timestamp: Date.now(),
  });
}
