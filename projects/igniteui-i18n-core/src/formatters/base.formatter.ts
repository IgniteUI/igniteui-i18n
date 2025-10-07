import type { I18nFormatter, I18nFormatterOptions, IntlFormatter } from '../i18n-manager.interfaces.js';
import { generateLocaleKey, mergeOptions } from '../utils.js';

export class BaseFormatter<T extends I18nFormatter, O extends I18nFormatterOptions> {
  public defaultOptions = {} as O;
  protected cachedIntlFormatters = new Map<string, T>();
  protected currentLocale: string;
  protected formatterType: IntlFormatter<T, O>;

  constructor(defaultLocale: string, formatterType: IntlFormatter<T, O>) {
    this.currentLocale = defaultLocale;
    this.formatterType = formatterType;
  }

  /** Method that should be called once the global locale changes. Prevents parent reference to i18n manager. */
  public onLocaleChange(newLocale: string): void {
    this.currentLocale = newLocale;
  }

  /**
   * Get inner Intl formatter from cache, otherwise create it and cache it for further use. Time to retrieve cached formatter: ~0-0.1ms
   * @param locale Locale for which to get a specific formatter
   * @param options Options the formatter needs to have set
   * @returns The formatter desired
   */
  public getIntlFormatter(locale?: string, options?: O): T {
    const combinedOptions = mergeOptions(this.defaultOptions, options);
    const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
    const formatterKey = generateLocaleKey(canonLocale, combinedOptions);
    let formatter = this.cachedIntlFormatters.get(formatterKey);
    if (!formatter) {
      formatter = new this.formatterType(canonLocale, combinedOptions);
      this.cachedIntlFormatters.set(formatterKey, formatter);
    }
    return formatter;
  }
}
