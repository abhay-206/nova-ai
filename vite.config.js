import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  plugins: [react()],

  // GitHub Pages needs the repository name as the base path.
  // During local development this remains "/".
  base: process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : "/",

  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },

  build: {
    target: "es2022",
    sourcemap: false,
    cssMinify: "esbuild",
    chunkSizeWarningLimit: 1000,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "lucide-react",
    ],
  },
});