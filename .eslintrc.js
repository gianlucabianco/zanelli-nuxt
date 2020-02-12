module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:tailwind/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'tailwind',
  ],
  // add your custom rules here
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen"
        ]
      }
    ]
  }
}
