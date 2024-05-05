// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true
    },
    globals: {
      firebase: true,
      getAuth: true,
      getAnalytics: true,
      initializeApp: true,
      useHistory: true // Add useHistory to the globals
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: [
      'react'
    ],
    rules: {
      // Add custom ESLint rules if needed
    }
  };
  