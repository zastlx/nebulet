import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
      port: 6009
  },
  css: {
      modules: {
          scopeBehaviour: "local",
          generateScopedName: "[hash:8]",
      }
  }
});