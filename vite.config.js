import { defineConfig } from "vite";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // exclude node_modules
    }),
  ],
});
