import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonJS from "rollup-plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const config = {
  input: "features/products/react/v2.js",
  output: {
    file: "public/js/products.v2.js",
    format: "iife"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    resolve({ browser: true }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/react"]
    }),
    commonJS({
      include: "node_modules/**",
      namedExports: {
        react: ["useState", "useEffect"],
        "react-lazy-load-image-component": [
          "LazyLoadImage",
          "trackWindowScroll"
        ]
      }
    }),
    terser()
  ]
};

export default config;
