import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

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
    watch: {
      // Enable polling for file system watching in environments where native watching doesn't work
      usePolling: true,
    },
  },
});
