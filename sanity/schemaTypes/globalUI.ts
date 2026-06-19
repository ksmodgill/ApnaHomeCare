import { defineField, defineType } from "sanity";

export const globalUI = defineType({
  name: "globalUI",
  title: "Global UI",
  type: "document",
  fields: [
    defineField({ name: "primaryColor", title: "Primary Color", type: "string" }),
    defineField({ name: "secondaryColor", title: "Secondary Color", type: "string" }),
    defineField({ name: "callButtonText", title: "Call Button Text", type: "string" }),
    defineField({ name: "whatsappButtonText", title: "WhatsApp Button Text", type: "string" }),
    defineField({ name: "stickyCallEnabled", title: "Sticky Call Enabled", type: "boolean" }),
    defineField({ name: "stickyWhatsappEnabled", title: "Sticky WhatsApp Enabled", type: "boolean" }),
    defineField({ name: "defaultCTAHeading", title: "Default CTA Heading", type: "string" }),
    defineField({ name: "defaultCTADescription", title: "Default CTA Description", type: "text" }),
    defineField({ name: "fallbackImage", title: "Fallback Image", type: "imageWithAlt" }),
    defineField({ name: "whatsappMessage", title: "WhatsApp Message", type: "string" }),
  ],
});
