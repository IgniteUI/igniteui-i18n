import { BaseFormatter } from './base.formatter.js';

export class LocaleFormatter extends BaseFormatter<Intl.Locale, Intl.LocaleOptions> {
  public static equalLocaleLanguages(leftLocale: Intl.Locale, rightLocale: Intl.Locale) {
    return (
      leftLocale.language === rightLocale.language &&
      leftLocale.script === rightLocale.script &&
      leftLocale.region === rightLocale.region
    );
  }
}
