import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';
import vitestConfig, { TEST_TIME_ZONE } from './vitest.config.js';

export default mergeConfig(
  vitestConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        headless: true,
        provider: playwright({ contextOptions: { timezoneId: TEST_TIME_ZONE } }),
        testerHtmlPath: './index.html',
        instances: [{ browser: 'chromium' }],
        screenshotFailures: false
      }
    }
  })
);
