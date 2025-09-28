import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ensure GitHub Pages works under /<repo>/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? "/spreadsheet-mvp/" : "/",
});
