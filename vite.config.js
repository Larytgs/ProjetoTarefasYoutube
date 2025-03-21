import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(
  {
    plugins: [react()],
  }
  // build: {
  //   rollupOptions: {
  //     external: ["react-router-dom"], // Deixe vazio para evitar que módulos sejam externalizados
  //   },
  // },
);
