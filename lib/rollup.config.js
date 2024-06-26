// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "lib",
    format: "es",
    sourcemap: "inline",
  },
  plugins: [typescript()],
};
