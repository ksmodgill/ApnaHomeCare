import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "rating", title: "Rating", type: "number" }),
    defineField({ name: "review", title: "Review", type: "text" }),
    defineField({ name: "date", title: "Date", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "imageWithAlt" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
  ],
});
