/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        nodePolyfills()
    ],
    test: {
        allowOnly: true,
        environment: 'jsdom',
        globals: true,
        includeSource: ["projects/**/*.ts"],
        include: ['projects/**/*.spec.ts'],
        coverage: {
            enabled: true,
            provider: 'istanbul',
            reportOnFailure: false,
            reporter: ['html', "lcov"]
        },
    }
})