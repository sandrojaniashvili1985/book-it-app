import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://book-it-app-six.vercel.app",
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
