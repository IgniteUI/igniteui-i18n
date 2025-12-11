# Ignite UI Internationalization (i18n) Core

This package contains i18n core utilities used across the Ignite UI components ranging from resources handling to Intl implementations related to formatting of dates, numbers and strings.

## Usage

Install the modules:

```
npm install igniteui-i18n-core --save
```

> **Note**: If you are using `typescript`, minimum version required is `5.5.2`, due to missing `Intl` types in older versions.

## Public API:

|name|description|properties|
|--|--|---|
| registerI18n | Register resources globally | resourceStrings: object, lang?: string |
| setCurrentI18n | Set global locale |lang: string (ex: "en", "bg", etc) | |
| getCurrentI18n | Get global locale set |  |
| getCurrentResourceStrings | Gets the resources for the current locale | |
| getDateFormatter | Gets the Intl.DateTimeFormat implementation | |
| getDisplayNamesFormatter | Gets the Intl.DisplayNames implementation | |
| getI18nManager | Gets the global resource manager that is based on locale | |
| getNumberFormatter | Gets the Intl.NumberFormat implementation | |
