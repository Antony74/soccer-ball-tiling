import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import noMixedOperators from 'eslint-plugin-no-mixed-operators';

export default defineConfig([
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: { js, noMixedOperators },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            'noMixedOperators/no-mixed-operators': ['error'],
        },
    },
]);
