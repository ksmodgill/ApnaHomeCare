import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";

export interface HomeVisitFormData {
  name: string;
  phone: string;
  location: string;
  requirement: string;
}

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

export function validateHomeVisitFormData(
  formData: HomeVisitFormData
): string | null {
  if (!formData.name.trim()) return "Please enter your name.";
  if (!formData.phone.trim()) return "Please enter your phone number.";
  if (!formData.location.trim()) return "Please enter your location.";
  if (!formData.requirement.trim()) return "Please select a patient requirement.";
  return null;
}

export async function handleHomeVisitSubmit(
  formData: HomeVisitFormData
): Promise<EmailJSResponseStatus> {
  const validationError = validateHomeVisitFormData(formData);

  if (validationError) {
    throw new Error(validationError);
  }

  const payload = {
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    location: formData.location.trim(),
    requirement: formData.requirement.trim(),
  };

  if (process.env.NODE_ENV === "development") {
    console.log("Sending Home Visit enquiry via EmailJS...", payload);
  }

  try {
    const { publicKey, serviceId, templateId } = getEmailJsConfig();

    const response = await emailjs.send(
      serviceId,
      templateId,
      payload,
      publicKey
    );

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
