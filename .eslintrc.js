module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // This needs to be last in this list to be able to overwrite other plugins' rules.
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'esnext',
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
        'no-console': ['error', { allow: ['info', 'error'] }],
    },
};
