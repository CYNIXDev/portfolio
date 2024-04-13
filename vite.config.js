import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        // This alias maps "routes" to the index.js file inside the "src/component" directory
        find: /^component$/,
        replacement: path.resolve("./", "src/component/index.js"),
      },
    ],
  },
});
