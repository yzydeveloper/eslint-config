module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:yml/standard',
        "eslint-config-airbnb-base"
    ],
    plugins: ['html'],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
        },
    },
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'quote-props': ['error', 'always'],
                'comma-dangle': ['error', 'never'],
            },
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'name',
                            'version',
                            'description',
                            'keywords',
                            'license',
                            'repository',
                            'funding',
                            'author',
                            'type',
                            'files',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'bin',
                            'scripts',
                            'husky',
                            'lint-staged',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'devDependencies',
                            'eslintConfig',
                        ],
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                ],
            },
        },
    ],
    rules: {
        'no-debugger': 'off',
        'no-console': 'off',
        'template-curly-spacing': 'off',
        "camelcase": "off",
        "consistent-return": "off",
        "no-restricted-syntax": "off",
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
        'max-len': ['error', { code: 180 }],
        'linebreak-style': 'off',
        'arrow-parens': 'off',
        'generator-star-spacing': 'off',
        'operator-linebreak': ['error', 'before'],
        'eol-last': 'off',
        'global-require': 'off',
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'only-multiline'],
        'no-underscore-dangle': 'off',
        'space-before-function-paren': [0, 'always'],
        'keyword-spacing': 'off',
        'no-new': 'off',
        'default-case': 'off',
        'func-names': ['error', 'as-needed'],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],
        'no-mixed-operators': 'off',
        'no-bitwise': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/named': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-duplicates': 'off',
        'import/no-cycle': 'off',
        'import/order': 'off',
        'import/no-self-import': 'off',
        'import/no-useless-path-segments': 'off',
        "import/prefer-default-export": "off",
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
    },
}
