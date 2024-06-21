import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vanguard Translate",
      fileName: `vanguard-translate`,
    },
    rollupOptions: {
      external: ["@inertiajs/vue3", "axios"],
    },
  },
})