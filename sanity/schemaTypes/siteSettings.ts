import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business Name", type: "string" }),
    defineField({ name: "shortName", title: "Short Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "siteUrl", title: "Site URL", type: "url" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "phoneDisplay", title: "Phone Display", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({ name: "hours", title: "Hours", type: "string" }),
    defineField({ name: "googleMapUrl", title: "Google Map URL", type: "url" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text" }),
    defineField({ name: "seoImage", title: "SEO Image", type: "imageWithAlt" }),
    defineField({ name: "schemaOrganization", title: "Schema Organization", type: "text" }),
    defineField({ name: "googleReviewUrl", title: "Google Review URL", type: "url" }),
  ],
});
