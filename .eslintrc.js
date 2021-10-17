module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error', { usePrettierrc: true }], 
    'prefer-promise-reject-errors': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/no-v-html': 'off',
    'vue/no-template-shadow': 'off',
    'vue/max-attributes-per-line': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],

  },
};
