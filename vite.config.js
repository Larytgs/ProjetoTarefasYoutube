import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-router-dom": new URL(
        "node_modules/react-router-dom/",
        import.meta.url
      ).pathname,
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: ["react-router-dom"], // Deixe vazio para evitar que módulos sejam externalizados
  //   },
  // },
});
