import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "complexity": ["error"],
      "max-depth": ["error"],
      "max-len": ["error"],
      "max-lines": ["error"],
      "max-lines-per-function": ["error"],
      "max-params": ["error"],
      "max-statements": ["error"],
    },
  },
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
];
