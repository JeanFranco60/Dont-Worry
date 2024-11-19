import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Directorio de salida
  },
  base: "./", // Úsalo si necesitas rutas relativas
});
