import { spawnSync } from 'node:child_process';
import { copyFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = import.meta.dirname;
const TSC = join(ROOT, 'node_modules/typescript/bin/tsc');

// Process exit codes.
const EXIT_SUCCESS = 0;
const EXIT_FAILURE = 1;

// Resources compile against core's build output, so core goes first.
const PACKAGES = ['igniteui-i18n-core', 'igniteui-i18n-resources'];

// Shipped next to the compiled code, e.g. 'projects/igniteui-i18n-core/README.md'.
const PACKAGE_FILES = ['package.json', 'README.md'];

/** Runs tsc on a project. @returns Whether it compiled. */
function compile(project) {
    // Inherit stdio, so compiler errors print as-is.
    const { status, error } = spawnSync(process.execPath, [TSC, '--project', project], { stdio: 'inherit' });

    // A spawn failure, e.g. EACCES, prints nothing on its own.
    if (error) {
        console.error(`Cannot run tsc: ${error.message}`);
    }

    return status === EXIT_SUCCESS;
}

/** Compiles a package into `dist/`. @returns Whether it compiled. */
async function buildPackage(name) {
    const source = join(ROOT, 'projects', name);
    const dist = join(ROOT, 'dist', name);

    if (!compile(join(source, 'tsconfig.build.json'))) {
        return false;
    }

    await Promise.all([
        ...PACKAGE_FILES.map((file) => copyFile(join(source, file), join(dist, file))),
        copyFile(join(ROOT, 'LICENSE'), join(dist, 'LICENSE')),
    ]);

    return true;
}

async function buildPackages() {
    // Clear every package first, so a failed build leaves no stale output behind.
    await Promise.all(PACKAGES.map((name) => rm(join(ROOT, 'dist', name), { recursive: true, force: true })));

    for (const name of PACKAGES) {
        if (!(await buildPackage(name))) {
            process.exitCode = EXIT_FAILURE;
            return;
        }
    }
}

buildPackages();
