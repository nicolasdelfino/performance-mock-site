import babel from "rollup-plugin-babel";

/*
 * Import commonJS from 'rollup-plugin-commonjs';
 * import resolve from 'rollup-plugin-node-resolve';
 */
import { terser } from "rollup-plugin-terser";

export default {
  external: ["react", "react-dom"],
  globals: {
    axios: "axios",
    react: "React",
    "react-dom": "ReactDOM"
  },
  input: "features/products/react/v1.js",
  output: {
    file: "public/js/products.v1.js",
    format: "iife"
  },
  plugins: [
    babel({
      presets: ["@babel/react"]
    }),
    terser()
  ]
};
