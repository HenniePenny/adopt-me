import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
});

//root is going to be wherever I keep the index.html; root not necessary if html file is at the root of directory
