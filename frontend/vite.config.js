import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { manifest } from "vite-plugin-manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./src/main.jsx",
  build: {
    outDir: "./public",
  },
});
