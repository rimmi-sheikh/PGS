import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Async plugin loading using Vite's defineConfig with async function
export default defineConfig(async () => {
  const isReplit = process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined;

  const replitPlugins = isReplit
    ? [
        (await import("@replit/vite-plugin-cartographer")).cartographer(),
        (await import("@replit/vite-plugin-dev-banner")).devBanner(),
      ]
    : [];

  return {
    base: "/", // Keep this if deploying to GitHub Pages at rimmi-sheikh.github.io/PGS
    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
