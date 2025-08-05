import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactNativePlugin from 'eslint-plugin-react-native';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        __DEV__: true
      }
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-native': reactNativePlugin,
      prettier: prettierPlugin
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      // Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          jsxBracketSameLine: false
        }
      ],

      // React
      'react/prop-types': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],

      // React Native
      'react-native/no-inline-styles': 'warn',
      'react-native/no-unused-styles': 'error',
      'react-native/no-color-literals': 'warn',
      'react-native/split-platform-components': 'error'
    }
  },

  prettierRecommended
];