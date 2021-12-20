module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "17",
    },
  },
  ignorePatterns: ["**/dist/*.js"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-typescript",
    "prettier",
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.spec.ts", "*.spec.tsx", "spec.ts", "spec.tsx"],
      env: {
        jest: true,
      },
      extends: ["plugin:jest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["webpack.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
