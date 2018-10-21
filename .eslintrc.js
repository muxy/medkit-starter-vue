module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  extends: ['plugin:prettier/recommended', 'plugin:vue/essential'],
  plugins: ['prettier', 'vue'],

  env: {
    browser: true
  },

  settings: {
    ecmascript: 6
  }
};
