import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        ignores: [
            "**/dist/",
            "coverage/",
            "eslint.config.mjs",
        ],
    },
    {
        languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
        },
    },
    {
        rules: {
            "no-shadow": "off",
            "no-prototype-builtins": "off",
            "no-case-declarations": "warn",
            "prefer-spread": "warn",
            "no-async-promise-executor": "warn",
            "prefer-const": "warn",
            "no-useless-escape": "warn",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-shadow": "error",
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": ["warn", {
                args: "all",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            }],

            "@typescript-eslint/consistent-type-definitions": "error",
            "@typescript-eslint/dot-notation": "off",

            "@typescript-eslint/explicit-member-accessibility": ["error", {
                accessibility: "explicit",

                overrides: {
                    constructors: "no-public",
                },
            }],

            "@typescript-eslint/naming-convention": ["error", {
                selector: "enumMember",
                format: ["PascalCase"],
            }],

            "@angular-eslint/no-input-rename": "off",

            "brace-style": ["error", "1tbs"],
            "id-blacklist": "off",
            "id-match": "off",
            "no-underscore-dangle": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-restricted-types": "warn",
            "@typescript-eslint/no-floating-promises": "off"
        },
    }
);