import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    // Opcional, para entorno de desarrollo
    open: true,
  },
  resolve: {
    alias: {
      "@": "/src", // Alias opcional para imports
    },
  },
});
