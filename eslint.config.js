import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import eslintPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  { ignores: ['.idea/*', '.yarn/*', 'node_modules/*', 'coverage/*'] },
  js.configs.recommended,
  eslintPrettier,
  {
    files: ['**/*.js'],
    linterOptions: {
      noInlineConfig: true,
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-syntax-import-assertions'],
        },
      },
    },
  },
  {
    files: ['**/*.test.js'],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
