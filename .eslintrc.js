"use strict";

module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },

  extends: [
    "eslint:recommended",
    "hardcore",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "react-app",
  ],

  ignorePatterns: [
    "/src/react-app-env.d.ts",
    "/src/serviceWorker.ts",
    "/src/setupTests.ts",
  ],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: [
    "inclusive-language",
    "jest",
    "jsx-a11y",
    "react",
    "@typescript-eslint",
    "woke",
  ],

  rules: {
    "inclusive-language/use-inclusive-words": "error",
    "import/extensions": "off",
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
    "woke/all": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
