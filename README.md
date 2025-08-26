<h1 align="center">
  Ignite UI Localization - from Infragistics 
</h1>

![Node.js CI](https://github.com/IgniteUI/igniteui-i18n/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-i18n/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-i18n?branch=master)
[![npm version](https://badge.fury.io/js/igniteui-i18n.svg)](https://badge.fury.io/js/igniteui-i18n)

The Ignite UI i18n repository provides localized strings and locale formatting to all Ignite UI products and components. The core package provides the functionality for locale and resource strings management, while the resources package provides localized resource strings for each currently supported language by Ignite UI. Both combined gives a unified and easy way of setting desired language or locale for the Ignite UI components globally and individually for each component.

## Setup

To setup the repo for local work run:

```
npm install
```

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

## Tests

The repo uses [Vitest](https://vitest.dev/guide/) for a base testing framework and [Playwright](https://vitest.dev/guide/browser/playwright.html) for in browser testing. Also the ability for out of browser testing is available using [jsdom](https://github.com/jsdom/jsdom). It is highly encouraged to use the native browser one, while the other can be used for easier debugging of tests and core functionality, but keep in might the nature of `jsdom` not being a native browser.

If you are using `VSCode`, I recommend to install the [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) as well, otherwise debugging using `Javscript Debug Console` does not work for me as expected and the source maps are not correct. Maybe its a config issue, but using the plugin is easier anyway for debugging.

To run the tests run:

```
npm run test
```

If you use Playwright for the first time it will throw an error. Just install the necessary dependencies using:

```
npx playwright install --with-deps --only-shell chromium
```

By default the tests run in `headless` mode using `Chromium`. If you would like to see it in the browser itself you need to set [headless](https://vitest.dev/guide/browser/config.html#browser-headless) option in the `vitest.browser.config.ts` file for the desired browser:

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

## License

This is a commercial product, requiring a valid paid-for license for commercial use.
This product is free to use for non-commercial educational use for students in K through 12 grades or University programs, and for educators to use in a classroom setting as examples / tools in their curriculum.
In order for us to verify your eligibility for free usage, please [register for trial](https://Infragistics.com/Angular) and open a support ticket with a request for free license.

To acquire a license for commercial usage, please [register for trial](https://Infragistics.com/Angular) and refer to the purchasing options in the pricing section on the product page.

© Copyright 2020 INFRAGISTICS. All Rights Reserved.
The Infragistics Ultimate license & copyright applies to this distribution.
For information on that license, please go to our website [https://www.infragistics.com/legal/license](https://www.infragistics.com/legal/license).
