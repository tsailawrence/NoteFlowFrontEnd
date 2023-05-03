import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";

const cert = readFileSync("./server.cert", "utf-8");
const key = readFileSync("./server.key", "utf-8");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key,
      cert,
    },
    port: 7414,
  },
});
