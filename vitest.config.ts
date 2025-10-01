/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        allowOnly: true,
        environment: 'jsdom',
        globals: true,
        includeSource: ['projects/**/*.ts'],
        include: ['projects/**/*.spec.ts'],
        coverage: {
            enabled: true,
            provider: 'istanbul',
            reportOnFailure: false,
            reporter: ['html', 'lcov'],
            include: ['projects/igniteui-i18n-core/src/**/*.ts', 'projects/igniteui-i18n-resources/src/**/*.ts']
        }
    }
});
