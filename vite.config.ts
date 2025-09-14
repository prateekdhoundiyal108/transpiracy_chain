import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
      open: true, // Automatically open the app in browser on server start
      strictPort: true, // Exit if port is already in use
    },
    preview: {
      port: 8080,
      strictPort: true,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
    },
    build: {
      outDir: "dist",
      sourcemap: mode === "development",
      minify: mode === "production" ? "esbuild" : false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            vendor: ["@tanstack/react-query", "react-hook-form"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      esbuildOptions: {
        // Enable esbuild's tree shaking
        treeShaking: true,
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || mode),
    },
  };
});
