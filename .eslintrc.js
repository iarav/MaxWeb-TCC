module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["unused-imports"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "unused-imports/no-unused-imports": "error",
  },
};
