export const env = {
  browser: true,
  es6: true,
  "jest/globals": true,
}
export const ext = ["eslint:recommended", "plugin:react/recommended"]
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 2018,
  sourceType: "module",
}
export const plugins = ["react", "jest"]
export const rules = {
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
