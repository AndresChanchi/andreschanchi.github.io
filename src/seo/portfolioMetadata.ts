import type { Metadata } from "next";

export const portfolioMetadata: Metadata = {
  title: "🌐 Andrés · Desarrollador Web3 & Frontend",
  description:
    "Soy Andrés: desarrollador Web3 y frontend. Me gusta crear interfaces limpias, robustas y modernas usando herramientas como Bun, Tailwind y arquitectura modular.",
  keywords: [
    "Web3",
    "Frontend",
    "Tailwind CSS",
    "Bun",
    "React",
    "TypeScript",
    "Clean Architecture",
    "Portafolio",
    "Desarrollador",
  ],
  authors: [{ name: "Andrés" }],
  robots: "index, follow",
  themeColor: "#0f172a",
  openGraph: {
    title: "Portafolio de Andrés",
    description:
      "Frontend y Web3, construido con tecnologías modernas y diseño limpio. Explora proyectos y arquitectura.",
    url: "https://andres.arweave.dev",
    siteName: "Portafolio de Andrés",
    images: [
      {
        url: "https://andres.arweave.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen destacada del portafolio de Andrés",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Andrés – Web3 & Frontend",
    description:
      "Interfaces limpias y robustas con arquitectura moderna. Portfolio técnico construido desde cero.",
    creator: "@andres",
    images: ["https://andres.arweave.dev/og-image.png"],
  },
};
