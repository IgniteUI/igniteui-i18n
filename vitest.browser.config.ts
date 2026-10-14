import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';
import vitestConfig from './vitest.config.js';

export default mergeConfig(
  vitestConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        headless: true,
        provider: playwright(),
        testerHtmlPath: './index.html',
        instances: [{ browser: 'chromium' }],
        screenshotFailures: false
      }
    }
  })
);
