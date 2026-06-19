"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import StudioPublishWatcher from "@/components/sanity/StudioPublishWatcher";

export default function Studio() {
  return (
    <>
      <StudioPublishWatcher />
      <NextStudio config={config} />
    </>
  );
}
