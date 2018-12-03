// import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const extensions = [".ts", ".tsx", ".js", ".jsx", ".json"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  // external: [
  //   ...Object.keys(pkg.dependencies || {}),
  //   ...Object.keys(pkg.peerDependencies || {})
  // ],
  plugins: [
    // typescript({
    //   // eslint-disable-next-line global-require
    //   typescript: require("typescript")
    // }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "./src"
      },
      extensions,
      preferBuiltins: false
    }),
    babel({
      extensions,
      exclude: ["node_modules/**", "../../node_modules/**"]
    })
  ]
};
