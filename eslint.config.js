import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import importXPlugin from 'eslint-plugin-import-x';
import { defineConfig, globalIgnores } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default defineConfig([
  globalIgnores(['**/build/**', '**/dist/**', '**/node_modules/**']),
  {
    // files: ['**/*.{js,jsx}'],
    files: ['apps/*/**/*.{js,jsx}', 'packages/*/**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs['recommended-latest'], reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 2025,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'import-x': importXPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: './jsconfig.json',
          alwaysTryTypes: true,
        }),
      ],
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/display-name': 0,
      'react/prop-types': 0,
      'no-unused-vars': [1, { varsIgnorePattern: '^_', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      ...importXPlugin.flatConfigs.recommended.rules,
      'import/default': 0,
      // 'import-x/no-unresolved': [
      //   'error',
      //   { ignore: ['\\?'] }, // 用于忽略 ?url 这种 Vite 资源查询参数
      // ],
    },
  },
]);
