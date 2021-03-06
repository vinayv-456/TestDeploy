module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', { code: 120 }, { ignoreStrings: true }],
    'constructor-super': 2,
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-case-declarations': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-import-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-misleading-character-class': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-new-symbol': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-self-assign': 2,
    'no-setter-return': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-labels': 2,
    'no-unused-vars': 1,
    'no-useless-catch': 2,
    'no-useless-escape': 2,
    'no-with': 2,
    'require-yield': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'jsx-quotes': 0,
    'no-var': 2,
    'no-irregular-whitespace': 0,
    'no-trailing-whitespace': 0,
    'object-curly-newline': 'off',
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 1,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'react/jsx-boolean-value': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'react/prop-types': [2, { skipUndeclared: true }],

    'jsx-a11y/no-static-element-interactions': [
      'off',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
      }
    ]
  }
};

// enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
