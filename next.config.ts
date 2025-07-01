import withRspack from "next-rspack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = withRspack({
  output: "export", // Genera HTML estático para Arweave

  images: {
    unoptimized: true, // Necesario para exportación sin SSR
  },

  trailingSlash: true, // Para que todas las rutas terminen en /
  
  // Puedes agregar aquí cualquier otra opción, incluyendo rewrites si los necesitas
  experimental: {
    // Si usas features experimentales como View Transitions o Server Actions
  },
});

export default nextConfig;
