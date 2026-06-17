import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Apna Home Care Nursing Services",
    short_name: "Apna Home Care",
    description:
      "Professional home nursing services in Muzaffarpur, Bihar",
    start_url: "/",
    display: "standalone",
    background_color: "#f8ebe6",
    theme_color: "#fd4f24",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
