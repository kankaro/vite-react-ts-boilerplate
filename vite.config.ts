/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';

import aliasImportChecker from 'vite-plugin-alias-import-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), aliasImportChecker({ level: 'error' }), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
    reporters: ['default', 'html'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      ignoreEmptyLines: true,
      thresholds: {
        lines: 75,
        functions: 75,
        branches: 75,
        statements: 75,
      },
      // Clean coverage results before running tests
      clean: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      // List of files excluded from coverage as glob patterns.
      exclude: [
        'html/**',
        '.husky/**',
        '.vscode/**',
        'node_modules/**',
        '**/{tailwind,postcss,commitlint}.config.*',
        '**/.{idea,git,cache,output,temp,editorconfig,gitattributes,gitignore,lintstagedrc,npmrc,yarnrc,nvmrc,prettierignore,}/**',
        'src/__tests__/setup.ts',
        'src/assets/**',
        'src/styles/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
