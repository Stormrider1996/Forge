module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'better-styled-components',
    'react',
    'simple-import-sort'
  ],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 2,
    'func-style': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-multi-spaces': 'error',
    'no-unused-vars': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: true
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    semi: ['error', 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-mixed-spaces-and-tabs': ['error'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never']
  }
}
