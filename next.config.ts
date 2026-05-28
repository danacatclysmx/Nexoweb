import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 Para GitHub Pages (cambia 'nombre-repo' por el tuyo)
  basePath: "/nexoweb",
  assetPrefix: "/nexoweb",

  // 👇 Modo estático
  output: "export",

  // 👇 Deshabilita imágenes optimizadas (no funcionan en estático)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
