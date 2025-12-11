<h1 align="center">
  Ignite UI Localization - from Infragistics 
</h1>

![Node.js CI](https://github.com/IgniteUI/igniteui-i18n/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-i18n/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-i18n?branch=master)
[![npm version](https://badge.fury.io/js/igniteui-i18n-resources.svg)](https://badge.fury.io/js/igniteui-i18n-resources)

The Ignite UI i18n repository provides localized strings and locale formatting to all Ignite UI products and components. The core package provides the functionality for locale and resource strings management, while the resources package provides localized resource strings for each currently supported language by Ignite UI. Both combined gives a unified and easy way of setting desired language or locale for the Ignite UI components globally and individually for each component.

## Setup

To setup the repo for local work run:

```
npm install
```

>Note: Minimum typescript version supported - 5.5.2!!!

## Building

To build all packages run:

```
npm run build
```

To build just the core package run:

```
npm run build:core
```

To build just the resources package run:

```
npm run build:resources
```

## Lint

The repo follows coding guidelines, which are kept in check using lint. To run it locally run:

```
npm run lint
```

For errors that are easily fixable, use:

```
npm run lint:fix
```

## Tests

The repo uses [Vitest](https://vitest.dev/guide/) for a base testing framework and [Playwright](https://vitest.dev/guide/browser/playwright.html) for in browser testing. Also the ability for out of browser testing is available using [jsdom](https://github.com/jsdom/jsdom). It is highly encouraged to use the native browser one, while the other can be used for easier debugging of tests and core functionality, but keep in might the nature of `jsdom` not being a native browser.

If you are using `VSCode`, I recommend to install the [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) as well, otherwise debugging using `Javscript Debug Console` does not work for me as expected and the source maps are not correct. Maybe its a config issue, but using the plugin is easier anyway for debugging.

> Note: There are two configurations - ESBuild(default) and Playwright(browser/chromium). Debugging the browser one for me is very inconsistent for now using both VSCode plugin and in browser, so I thats is why I suggest trying debugging using the default one first. The default ones might produce some errors that are solely ESBuild specific, so ignore these as well.

To run the tests:

```
npm run test
```

If you use Playwright for the first time it will throw an error. Just install the necessary dependencies using:

```
npx playwright install --with-deps --only-shell chromium
```

By default the tests run in `headless` mode using `Chromium`. If you would like to see the tests in the browser, you need to set [headless](https://vitest.dev/guide/browser/config.html#browser-headless) option in the `vitest.browser.config.ts` file for the desired browser:

```
test: {
        browser: {
            headless: false
        }
}
```

To run a specific test, set in the test source `only` option for a test in the following way:

```typescript
it('should test something', { only: true }, () => {
    // Test code
});
```

The following way should also work (but not for me :s ):

```typescript
it.only('should test something', () => {
    // Test code
});
```
