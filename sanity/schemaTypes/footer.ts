import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "logo", title: "Logo", type: "imageWithAlt" }),
    defineField({ name: "aboutText", title: "About Text", type: "text" }),
    defineField({
      name: "footerMenus",
      title: "Footer Menus",
      type: "array",
      of: [{ type: "footerMenu" }],
    }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "hours", title: "Hours", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "socialLink" }],
    }),
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
    defineField({ name: "developerCredit", title: "Developer Credit", type: "string" }),
    defineField({ name: "developerLink", title: "Developer Link", type: "url" }),
  ],
});
