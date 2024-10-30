import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  entryPoints: ['src/index.ts'],
  format: ["cjs"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: false,
  clean: true,
  skipNodeModulesBundle: true,
});
