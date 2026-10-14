<h1 align="center">
  Ignite UI Localization - from Infragistics
</h1>

[![Node.js CI](https://github.com/IgniteUI/igniteui-i18n/actions/workflows/nodejs.yml/badge.svg)](https://github.com/IgniteUI/igniteui-i18n/actions/workflows/nodejs.yml)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-i18n/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-i18n?branch=master)
[![npm version](https://badge.fury.io/js/igniteui-i18n-resources.svg)](https://badge.fury.io/js/igniteui-i18n-resources)

Localized strings and locale formatting for all Ignite UI products. Set the language and locale globally or per component.

| Package | Contents |
|--|--|
| [igniteui-i18n-core](projects/igniteui-i18n-core) | Locale and resource string management, `Intl` formatters, English strings |
| [igniteui-i18n-resources](projects/igniteui-i18n-resources) | Strings for every other supported language |

## Setup

Requires Node.js 24.

```
npm install
npx playwright install --with-deps --only-shell chromium
```

## Scripts

| Command | Does |
|--|--|
| `npm run build` | Builds both packages into `dist/` |
| `npm run check:bundle` | Checks unused formatters tree-shake out of the built core. Run after `build` |
| `npm run lint` | Lints and checks formatting |
| `npm run lint:fix` | Fixes what `lint` can |
| `npm run typecheck` | Type-checks sources, specs and configs |
| `npm test` | Tests in headless Chromium, in watch mode |
| `npm run test:inline` | Tests in jsdom, in watch mode |

Append `-- --run` to a test script to run once, e.g. `npm test -- --run`.

## Tests

[Vitest](https://vitest.dev/guide/) runs the specs in Chromium through [Playwright](https://vitest.dev/guide/browser/playwright.html). `test:inline` runs them in [jsdom](https://github.com/jsdom/jsdom), which is easier to debug but is not a browser. Trust the Chromium result.

The [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) for VS Code gives the most reliable debugging and source maps.

To watch Chromium run the tests, set `headless: false` in `vitest.browser.config.ts`.

To focus a test, use `it.only`. CI fails on a committed `.only`.

## Resource strings

Each component has its strings in one file per language. For a `tile` component:

```
projects/igniteui-i18n-core/src/
├── i18n/interfaces/tile.interface.ts      ITileResourceStrings
└── i18n/EN/tile-resources.ts              TileResourceStringsEN
projects/igniteui-i18n-resources/src/
└── i18n/<LANG>/tile-resources.ts          TileResourceStrings<LANG>
```

For a new component, add these files, then wire them into:

- `IResourceStrings` in `interfaces/resources.interface.ts`
- every language's `resources.ts`, which merges its strings into `ResourceStrings<LANG>`
- every language's `index.ts`, and both packages' `src/index.ts`

For a new language, copy an existing `i18n/<LANG>` folder, export it from `src/index.ts`, add its subpath to `exports` in the resources `package.json`, and list it in the resources `README.md`.

## Release

Creating a GitHub release triggers [npm-publish.yml](.github/workflows/npm-publish.yml). It publishes both packages under the release tag as version, e.g. `2.0.0`. Prereleases, e.g. `2.0.0-rc.1`, publish to the `next` dist-tag. npm rejects a release lower than `latest`, e.g. `1.0.7` after `2.0.0`.
