import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({ name: "logo", title: "Logo", type: "imageWithAlt" }),
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "brandSubtext", title: "Brand Subtext", type: "string" }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [{ type: "menuItem" }],
    }),
    defineField({ name: "primaryButtonText", title: "Primary Button Text", type: "string" }),
    defineField({ name: "primaryButtonLink", title: "Primary Button Link", type: "string" }),
    defineField({ name: "phoneNumber", title: "Phone Number", type: "string" }),
    defineField({ name: "mobileMenuTitle", title: "Mobile Menu Title", type: "string" }),
    defineField({ name: "mobileMenuDescription", title: "Mobile Menu Description", type: "text" }),
  ],
});
