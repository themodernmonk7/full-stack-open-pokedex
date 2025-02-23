const env = {
  browser: true,
  es6: true,
  "jest/globals": true,
}
const ext = ["eslint:recommended", "plugin:react/recommended"]
const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 2018,
  sourceType: "module",
}
const plugins = ["react", "jest"]
const rules = {
  indent: ["error", 2],
  // "linebreak-style": ["error", "unix"],
  quotes: ["error", "double"],
  semi: ["error", "never"],
  eqeqeq: "error",
  "no-trailing-spaces": "error",
  "object-curly-spacing": ["error", "always"],
  "arrow-spacing": ["error", { before: true, after: true }],
  "no-console": "error",
  "react/prop-types": 0,
}
