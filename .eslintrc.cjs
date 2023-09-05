module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "no-restricted-syntax": [ "warn", "ForStatement", "ForOfStatement" ],
  },
  ignorePatterns: [
    ".eslintrc.cjs",
    "vite.config.ts"
  ],
};
