import withRspack from "next-rspack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generar HTML estático para Arweave

  // Permitir uso de rutas absolutas desde src/

  // Configurar imágenes si llegas a usar <Image />
  images: {
    unoptimized: true, // Desactiva el loader, necesario para exportación estática
  },

  // SEO-friendly: esto permite precacheo y navegación estática
  trailingSlash: true, // Mejora compatibilidad en sitios 100% exportados

  // Desactiva el runtime de servidores (no usamos SSR)
};

export default withRspack(nextConfig);
