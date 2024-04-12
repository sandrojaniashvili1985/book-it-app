import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://book-it-app-six.vercel.app",
        // target: "http://localhost:5000",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
