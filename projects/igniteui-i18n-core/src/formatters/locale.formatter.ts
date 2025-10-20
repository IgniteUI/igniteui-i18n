import { BaseFormatter } from './base.formatter.js';

export class LocaleFormatter extends BaseFormatter<Intl.Locale, Intl.LocaleOptions> {
  constructor(defaultLocale: string) {
    super(defaultLocale, Intl.Locale);
  }

  public static equalLocaleLanguages(leftLocale: Intl.Locale, rightLocale: Intl.Locale) {
    return (
      leftLocale.language === rightLocale.language &&
      leftLocale.script === rightLocale.script &&
      leftLocale.region === rightLocale.region
    );
  }
}
