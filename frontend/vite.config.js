import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { manifest } from "vite-plugin-manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    manifest({
      content: {
        start_url: "index.html",
        display: "standalone",
      },
    }),
  ],
});
