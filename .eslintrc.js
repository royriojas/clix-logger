module.exports = {
  parser: 'babel-eslint',
  settings: {
    'import/ignore': [/node_modules/, /\.(scss|less|css)$/],
  },
  plugins: ['react', 'import', 'jsx-a11y', 'mocha', 'prettier'],
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 160,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        useTabs: false,
        semi: true,
        jsxBracketSameLine: true,
      },
    ],
    'arrow-parens': [2, 'as-needed'],
    'mocha/no-exclusive-tests': 2,
    eqeqeq: [2, 'smart'],
    curly: 2,
    quotes: [2, 'single', 'avoid-escape'],
    strict: 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-spaced-func': 0,
    'func-names': 2,
    'no-shadow': 2,
    camelcase: 1,
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['Then', 'When', 'Given', 'AfterFeatures', 'After', 'BeforeFeatures', 'Before', 'BeforeFeature', 'ClientFunction'],
      },
    ],
    'dot-notation': 2,
    'no-native-reassign': 1,
    'react/require-extension': 0,
    'no-new': 1,
    'no-confusing-arrow': [0, { allowParens: true }],
    'no-console': 0,
    'no-constant-condition': 1,
    'object-curly-spacing': 2,
    'consistent-return': 2,
    'jsx-quotes': 1,
    'newline-per-chained-call': 0,
    'no-extra-strict': 0,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 0,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 2,
    'no-sequences': 2,
    'no-undef': 2,
    'no-shadow-restricted-names': 2,
    'no-trailing-spaces': 2,
    'quote-props': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'template-curly-spacing': 0,
    'no-undef-init': 2,
    'id-length': 0,
    'no-use-before-define': 2,
    'no-with': 2,
    'comma-spacing': 2,
    'eol-last': 2,
    'padded-blocks': 0,
    'no-extra-parens': [2, 'functions'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'new-parens': 2,
    semi: 2,
    'semi-spacing': [2, { before: false, after: true }],
    'space-infix-ops': 2,
    'keyword-spacing': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    yoda: [2, 'never'],
    indent: 0,
    'vars-on-top': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 2,
    'brace-style': 2,
    'prefer-template': 2,
    'computed-property-spacing': 1,
    'space-in-parens': 1,
    'no-useless-constructor': 2,
    'prefer-rest-params': 2,
    'array-bracket-spacing': 1,
    'no-case-declarations': 2,
    'array-callback-return': 2,
    'global-require': 0,
    'no-useless-escape': 2,
    'no-duplicate-imports': [2, { includeExports: true }],
    'import/no-duplicates': [0, { commonjs: true }],
    'import/no-unresolved': [0, { commonjs: true }],
    'import/export': 1,
    'jsx-a11y/img-has-alt': 0,
    'react/jsx-equals-spacing': [1, 'never'],
    'react/display-name': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-no-bind': 2,
    'react/jsx-curly-spacing': [0, 'always'],
    'react/jsx-first-prop-new-line': [0, 'never'],
    'react/jsx-indent': [0, 2],
    'react/jsx-boolean-value': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 2,
    'react/sort-comp': 0,
    'react/wrap-multilines': 0,
    'react/jsx-indent-props': 0,
    // PSA: React functional components considered harmful. 😈

    // * Can’t make refs to them. Impossible for parent to know (at least on our current version of react)
    // * Can’t have state. Annoying to refactor if you need to add it.
    // * No lifecycle methods. Same issue with refactoring.
    // * Can't be optimized for rendering by adding handler functions that are not inlined
    //
    // https://twitter.com/devongovett/status/1021465501984124928
    // we can still enforce them in code review but I would encourage to remove them as errors
    'react/prefer-stateless-function': 0,
    'generator-star-spacing': 0,

    // see CPM-2410
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': 2,
    'import/imports-first': 0,
    'react/no-string-refs': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'no-mixed-operators': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
    'require-yield': 1,
    'no-extra-boolean-cast': 2,
    'no-continue': 2,
    'object-property-newline': 1,
    'no-prototype-builtins': 2,
    'operator-assignment': 2,
    'react/no-find-dom-node': 1,
    'no-lonely-if': 2,
    'dot-location': 2,
    'import/no-named-as-default': 1,
    'prefer-spread': 1,

    'react/no-array-index-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/no-children-prop': 2,
    'react/style-prop-object': 2,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'no-template-curly-in-string': 2,
    'no-bitwise': 2,
    'valid-typeof': 2,
    'jsx-a11y/anchor-has-content': 2,
    'comma-dangle': [2, 'always-multiline'],

    // consider enabling there rules
    'import/first': 0,
    'import/extensions': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'no-return-await': 0,
    'no-plusplus': 0,
    'no-tabs': 0,
    'class-methods-use-this': 0,
    'no-await-in-loop': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-dynamic-require': 0,
    'space-before-function-paren': 0,
    'func-call-spacing': 0,
    'lines-around-directive': 0,
    'no-multi-assign': 0,
    'no-useless-return': 0,
    'react/no-danger': 0,
    // we should consider to enable this one to avoid cases
    // where async keyword is used but no await is present
    // in the body of the function
    'require-await': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'import/order': 1,
    'import/named': 2,
    'import/no-cycle': 1,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-no-comment-textnodes': 0,
    'import/no-useless-path-segments': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-access-state-in-setstate': 1,
    'react/no-unused-state': 1,
    'react/default-props-match-prop-types': 1,
    'jsx-a11y/alt-text': 1,
    'react/no-this-in-sfc': 1,
    'jsx-a11y/label-has-for': 0, // this rule is depreacated https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/anchor-is-valid': 1,
    'react/no-typos': 2,
    'react/no-deprecated': 1,
    'react/button-has-type': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/no-redundant-roles': 1,
    'prefer-destructuring': 0,
    'lines-between-class-members': 1,
    'spaced-comment': 1,
    'no-restricted-globals': 1,
    'no-else-return': 1,
    'prefer-promise-reject-errors': 1,
    'no-buffer-constructor': 1,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-self-compare': 2,
    'no-control-regex': 1,
    'no-dupe-keys': 1,
    'guard-for-in': 2,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    impliedStrict: true,
    typescript: true,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  globals: {
    __MOBX_DEVTOOLS__: true,
    __DEVTOOLS__: true,
    socket: true,
    jest: true,
    expect: true,
    fixture: true,
  },
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'default-case': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
      'no-dupe-class-members': 'off',

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-namespace': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
    },
  },
};
