import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.lottie"],
  server: {
    // Specify port number for the dev server
    port: 3000,
    // Allow access from local network
    host: true,
    // Open browser automatically when dev server starts
    open: true,
    watch: {
      // Enable polling for file system watching in environments where native watching doesn't work
      usePolling: true,
    },
    // Enable CORS for API requests during development
    cors: true,
    // Configure proxy for API requests
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
