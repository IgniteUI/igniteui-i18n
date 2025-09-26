/// <reference types="vitest/config" />
import { defineConfig, mergeConfig } from 'vite';
import vitestConfig from './vitest.config';

export default mergeConfig(
    vitestConfig,
    defineConfig({
        test: {
            browser: {
                enabled: true,
                headless: true,
                provider: 'playwright',
                testerHtmlPath: './index.html',
                instances: [{ browser: 'chromium' }],
                isolate: true,
                screenshotFailures: false
            }
        }
    })
);
