import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ocean D'souza | Platform Product Manager Portfolio",
    short_name: "Ocean D'souza",
    description:
      "Portfolio of Ocean D'souza, Platform Product Manager in Dubai scaling D2C commerce, payment architectures, omnichannel data, and enterprise AI systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
