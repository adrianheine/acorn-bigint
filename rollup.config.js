export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/acorn-bigint.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/acorn-bigint.mjs",
      format: "es",
      sourcemap: true
    }
  ]
}
