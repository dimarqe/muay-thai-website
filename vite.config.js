import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/muay-thai-website",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
