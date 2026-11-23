import { defineConfig } from 'vitest/config';

/** Host zone for specs. No DST; +05:30 differs from UTC and whole-hour zones. */
export const TEST_TIME_ZONE = 'Asia/Kolkata';

// Workers inherit it.
process.env.TZ = TEST_TIME_ZONE;

export default defineConfig({
    resolve: {
        tsconfigPaths: true
    },
    test: {
        environment: 'jsdom',
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
