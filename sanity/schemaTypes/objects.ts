import { defineField, defineType } from "sanity";

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const statItem = defineType({
  name: "statItem",
  title: "Statistic",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
  ],
});

export const badgeItem = defineType({
  name: "badgeItem",
  title: "Badge",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "icon", title: "Icon Name", type: "string" }),
  ],
});

export const serviceCard = defineType({
  name: "serviceCard",
  title: "Service Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "icon", title: "Icon Name", type: "string" }),
    defineField({ name: "image", title: "Image", type: "imageWithAlt" }),
    defineField({ name: "link", title: "Link", type: "string" }),
    defineField({ name: "buttonText", title: "Button Text", type: "string" }),
  ],
});

export const benefitItem = defineType({
  name: "benefitItem",
  title: "Benefit",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "icon", title: "Icon Name", type: "string" }),
  ],
});

export const featureItem = defineType({
  name: "featureItem",
  title: "Feature",
  type: "object",
  fields: [defineField({ name: "title", title: "Title", type: "string" })],
});

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",
  fields: [
    defineField({ name: "stepNumber", title: "Step Number", type: "number" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "icon", title: "Icon Name", type: "string" }),
  ],
});

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "buttonText", title: "Button Text", type: "string" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
  ],
});

export const areaItem = defineType({
  name: "areaItem",
  title: "Service Area",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Answer", type: "text" }),
  ],
});

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "url", title: "URL", type: "string" }),
    defineField({ name: "openInNewTab", title: "Open in New Tab", type: "boolean" }),
  ],
});

export const footerMenu = defineType({
  name: "footerMenu",
  title: "Footer Menu",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "menuItem" }],
    }),
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({ name: "platform", title: "Platform", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
  ],
});
