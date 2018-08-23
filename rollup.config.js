import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

const commonMainConfigs = {
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  },
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**" // only transpile our source code
    })
  ]
};

const commonOutputConfigs = {
  dir: "dist",
  format: "umd"
};

export default [
  {
    input: "src/main.js",
    name: "main1",
    output: {
      file: "bundle.js",
      ...commonOutputConfigs
    },
    ...commonMainConfigs
  },
  {
    input: "src/main2.js",
    name: "main2",
    output: {
      file: "bundle2.js",
      ...commonOutputConfigs
    },
    ...commonMainConfigs
  }
];
