import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // Relative base keeps assets working on GitHub Pages project URLs.
  base: command === "build" ? "./" : "/",
  plugins: [react()],
}));
