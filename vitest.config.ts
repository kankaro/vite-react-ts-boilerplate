import { coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setup-tests.ts'],
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
          '**/{tailwind,postcss,commitlint,eslint}.config.*',
          '**/.{idea,git,cache,output,temp,editorconfig,gitattributes,gitignore,lintstagedrc,npmrc,yarnrc,nvmrc,prettierignore,}/**',
          'src/setup-tests.ts',
          'src/assets/**',
          'src/styles/**',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  }),
);
