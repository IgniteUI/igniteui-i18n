import { build } from 'esbuild';
import { basename, join } from 'node:path';

// Resolve 'igniteui-i18n-core' from the build output through its package.json, like a consumer.
const DIST = join(import.meta.dirname, 'dist');

// The manager needs these, so every bundle has them.
const CORE_FORMATTERS = ['base.formatter.js', 'locale.formatter.js'];

const DATE = 'date.formatter.js';
const DISPLAY_NAMES = 'display-names.formatter.js';
const NUMBER = 'number.formatter.js';

// Imported exports -> other formatter modules their bundle must contain, sorted.
// Strings-only imports must not pull formatters in.
// Formatter getters prove the check detects formatter code at all.
const CASES = [
    {
        imports: ['registerI18n', 'setCurrentI18n', 'getCurrentI18n', 'getCurrentResourceStrings', 'getI18nManager'],
        expected: [],
    },
    { imports: ['getDateFormatter'], expected: [DATE] },
    { imports: ['getNumberFormatter'], expected: [NUMBER] },
    { imports: ['getDisplayNamesFormatter'], expected: [DATE, DISPLAY_NAMES] },
];

/** Bundles the imports and lists the formatter modules that survive tree-shaking. */
async function bundledFormatters(imports) {
    const { metafile } = await build({
        stdin: { contents: `export { ${imports.join(', ')} } from 'igniteui-i18n-core';`, resolveDir: DIST },
        nodePaths: [DIST],
        // Skip the repo tsconfig.json, whose `paths` map the package to its sources.
        tsconfigRaw: {},
        bundle: true,
        format: 'esm',
        metafile: true,
        outfile: 'bundle.js',
        write: false,
    });

    const [output] = Object.values(metafile.outputs);
    return Object.entries(output.inputs)
        .filter(([path, input]) => input.bytesInOutput > 0 && path.includes('/formatters/'))
        .map(([path]) => basename(path))
        .filter((file) => !CORE_FORMATTERS.includes(file))
        .sort();
}

/** @returns A failure message, or `undefined` when the bundle matches. */
async function checkCase({ imports, expected }) {
    const actual = await bundledFormatters(imports);
    if (actual.join() === expected.join()) {
        return undefined;
    }

    return `{ ${imports.join(', ')} }: expected [${expected}], got [${actual}]`;
}

async function checkBundles() {
    const failures = (await Promise.all(CASES.map(checkCase))).filter(Boolean);

    if (failures.length) {
        console.error(`Bundle check failed:\n${failures.join('\n')}`);
        process.exitCode = 1;
        return;
    }

    console.log(`Bundle check passed (${CASES.length} cases).`);
}

checkBundles();
