# Changelog

This file records all notable changes to `igniteui-i18n-core` and `igniteui-i18n-resources`. The two packages have the same version number.

This file uses the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format. The versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Color picker: `color_picker_no_color`, `color_picker_copied`, `color_picker_copy_failed`, `color_picker_apply`, `color_picker_cancel`, `color_picker_swatches`, `color_picker_view_gradient`, `color_picker_view_swatches`, `color_picker_format_hex`, `color_picker_format_rgb`, `color_picker_format_hsl`, `color_picker_format_oklch`, `color_picker_clear` and `color_picker_initial_color`.
- Color picker color names: `color_picker_name_pattern` (the word order), `color_picker_name_with_alpha`, `color_picker_value_with_name`, the lightness words `color_picker_name_very_dark`, `color_picker_name_dark`, `color_picker_name_light` and `color_picker_name_very_light`, the chroma words `color_picker_name_grayish` and `color_picker_name_vibrant`, the hue words `color_picker_name_red`, `color_picker_name_orange`, `color_picker_name_brown`, `color_picker_name_yellow`, `color_picker_name_yellow_green`, `color_picker_name_green`, `color_picker_name_cyan`, `color_picker_name_blue`, `color_picker_name_purple`, `color_picker_name_magenta` and `color_picker_name_pink`, and `color_picker_name_black`, `color_picker_name_white` and `color_picker_name_gray`.
- Color picker contrast readout: `color_picker_contrast_ratio` ("Contrast {0}:1", `{0}` is the ratio), `color_picker_contrast_pass` ("{0} pass") and `color_picker_contrast_fail` ("{0} fail"), where `{0}` is the name of the WCAG level, and the level names `color_picker_contrast_aa` ("AA") and `color_picker_contrast_aaa` ("AAA").
- Color picker OKLCH area: `color_picker_canvas_oklch_label` ("Lightness and chroma") and `color_picker_canvas_oklch_value` ("Lightness {0}%, chroma {1}", `{0}` is the lightness and `{1}` the chroma).

## [2.0.0] - 2026-06-14

### Removed

- **Breaking:** `getI18nManager()` does not have `dateFormatter`, `numberFormatter` and `displayNamesFormatter`. Use `getDateFormatter()`, `getNumberFormatter()` and `getDisplayNamesFormatter()`.

### Added

- Strings in all languages for color picker, copy to clipboard, dialog, speech to text, splitter, tile and tooltip.
- Chat: `chat_input_label`, `chat_attach_files`, `chat_file_input_label`, `chat_send_message` and `chat_remove_attachment`. In `chat_remove_attachment`, `{0}` is the file name, for example `Remove photo.png`.
- Carousel: `carousel_role_description`.
- Validation: `step_validation_error`.
- Combo: `combo_select_all`, `combo_loading`, `combo_apply` and `combo_cancel`.
- Dock manager strings in 16 more languages. Before, only Spanish, Japanese and Korean had them.
- The core English entry and the resources root export the dock manager strings.

### Changed

- The manager makes each formatter at first use. Bundlers remove the formatters that you do not use. A strings-only bundle decreased from 12,285 B to 4,399 B (esbuild, minified).

### Fixed

- `registerI18n()` with an invalid locale tag registered the strings to the current locale. Now it registers them to `en-US`, as documented. It shows one warning, not three.
- `registerI18n()` made a new resource object when no string changed. Consumers that cache by object identity lost their cache on each call.
- `setCurrentI18n()` sent `onResourceChange` before it updated the formatters. Listeners formatted values with the old locale.
- The `zh-Hant` subpath pointed to a folder that did not exist.
- All languages had English text in `mask_validation_error`, `url_validation_error` and `disabled_date_validation_error`.
- Spanish, Japanese and Korean dock manager strings had "Panes" and "Documents" in English.
- Czech, Portuguese and Romanian carousel strings used an incorrect term for "slide".
- The locale and `Intl` formatter caches had no size limit. In long-lived processes, each new locale tag increased memory use. The limits are now 64 locale tags and 256 formatters.
- The npm package descriptions referred only to Ignite UI for Angular.

## [1.0.5] - 2026-05-07

### Added

- Chat strings in all languages.

## [1.0.4] - 2026-02-20

### Changed

- Date and number formatters catch `Intl` errors, for example from an invalid time zone. They write a console warning and return a fallback value. Format methods return the input as a string. Parts methods return an empty array.

## [1.0.3] - 2026-02-16

### Fixed

- Date strings with a single-digit month or day, for example `2025-01-1`, caused an error.

## [1.0.2] - 2025-12-19

### Fixed

- `getLocaleDateTimeFormat()` read the hour cycle from `Intl.Locale`. Some browsers do not supply this value. In these browsers, the hour format was incorrect.
- The package `homepage` and `bugs` links pointed to the igniteui-angular repository.
- The core package `license` field did not show MIT.

## [1.0.1] - 2025-12-11

### Added

- A README for each package.

### Changed

- The license is MIT. Before, it was a commercial license.

## [1.0.0] - 2025-12-11

### Added

- `igniteui-i18n-core` package: locale and resource string management, `Intl` date, number and display name formatters, and English strings.
- `igniteui-i18n-resources` package: strings in Bulgarian, Czech, Danish, German, Spanish, French, Hungarian, Italian, Japanese, Korean, Norwegian Bokmål, Dutch, Polish, Portuguese, Romanian, Swedish, Turkish, Simplified Chinese and Traditional Chinese.
- Strings for action strip, banner, calendar, carousel, chip, combo, date picker, date range picker, file input, grid, list, paginator, query builder, time picker, tree and validation.
- Dock manager strings in English, Spanish, Japanese and Korean.

[Unreleased]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.5...HEAD
[1.0.5]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/IgniteUI/igniteui-i18n/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/IgniteUI/igniteui-i18n/releases/tag/1.0.0
