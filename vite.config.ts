import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/app/",
  publicDir: "/app/",
  plugins: [
    reactRefresh(),
    legacy({
      targets: ["iOS 9"],
    }),
  ],
  build: {
    outDir: "./dist/app",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        h5: resolve(__dirname, "h5/index.html"),
      },
    },
  },
});