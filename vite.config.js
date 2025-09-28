import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "public",   // 👈 tell Vite to start from /public
  base: process.env.GITHUB_PAGES ? "/spreadsheet-mvp/" : "/",
});
