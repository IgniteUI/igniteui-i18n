/// <reference types="vitest" />
import { defineConfig, mergeConfig  } from 'vite'
import vitestConfig from './vitest.config'

export default mergeConfig(vitestConfig ,defineConfig({
    test: {
        browser: {
            provider: 'playwright',
            headless: true,
            instances: [
                { browser: 'chromium' },
            ],
            testerHtmlPath: './index.html',
            enabled: true,
            isolate: true,
        }
    }
}))