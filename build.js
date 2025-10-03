import { exec } from 'node:child_process';
import { copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const run = promisify(exec);

async function buildPackages() {
    await Promise.all([
        run('npm run clean:core'),
        run('npm run clean:resources')
    ]);

    await run('npm run build:core');
    await run('npm run build:resources');

    await Promise.all([
        copyFile(
            join(__dirname, 'projects/igniteui-i18n-core/package.json'),
            join(__dirname, 'dist/igniteui-i18n-core/package.json')
        ),
        copyFile(
            join(__dirname, 'projects/igniteui-i18n-resources/package.json'),
            join(__dirname, 'dist/igniteui-i18n-resources/package.json')
        ),
    ]);
}

buildPackages();
