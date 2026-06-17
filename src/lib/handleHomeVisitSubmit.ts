"use client";

import type { EmailJSResponseStatus } from "@emailjs/browser";
import {
  buildHomeVisitEmailPayload,
  validateHomeVisitFormData,
  type HomeVisitFormData,
} from "./homeVisitForm";

export type { HomeVisitFormData } from "./homeVisitForm";
export { validateHomeVisitFormData } from "./homeVisitForm";

function getEmailJsConfig() {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  if (!publicKey) {
    throw new Error("EmailJS public key is not configured.");
  }

  if (!serviceId) {
    throw new Error("EmailJS service ID is not configured.");
  }

  if (!templateId) {
    throw new Error("EmailJS template ID is not configured.");
  }

  return { publicKey, serviceId, templateId };
}

export async function handleHomeVisitSubmit(
  formData: HomeVisitFormData
): Promise<EmailJSResponseStatus> {
  const validationError = validateHomeVisitFormData(formData);

  if (validationError) {
    throw new Error(validationError);
  }

  const payload = buildHomeVisitEmailPayload(formData);

  if (process.env.NODE_ENV === "development") {
    console.log("Sending Home Visit enquiry via EmailJS...", payload);
  }

  try {
    const { publicKey, serviceId, templateId } = getEmailJsConfig();
    const emailjs = (await import("@emailjs/browser")).default;

    const response = await emailjs.send(serviceId, templateId, payload, publicKey);

    console.log("Home Visit Enquiry Sent Successfully");

    if (process.env.NODE_ENV === "development") {
      console.log("EmailJS response:", response);
    }

    return response;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Home Visit enquiry failed:", error);
    }

    throw error;
  }
}
