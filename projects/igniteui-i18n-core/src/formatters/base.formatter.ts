import { generateLocaleKey, mergeOptions } from '../utils.js';

type IntlFormatter<T, O> =
    | (new (locale: string | Intl.Locale, options?: O) => T)
    | (new (locale: Intl.LocalesArgument, options: O) => T);

export class BaseFormatter<
    T extends Intl.DateTimeFormat | Intl.NumberFormat | Intl.Locale | Intl.DisplayNames,
    O extends Intl.DateTimeFormatOptions | Intl.NumberFormatOptions | Intl.LocaleOptions
> {
    public defaultOptions = {} as O;
    protected cachedIntlFormatters = new Map<string, T>();
    protected currentLocale: string;
    protected formatterType: IntlFormatter<T, O>;

    constructor(defaultLocale: string, formatterType: IntlFormatter<T, O>) {
        this.currentLocale = defaultLocale;
        this.formatterType = formatterType;
    }

    /** Method that should be called once the global locale changes. Prevents parent reference to i18n manager. */
    public onLocaleChange(newLocale: string) {
        this.currentLocale = newLocale;
    }

    /**
     * Get inner Intl formatter from cache, otherwise create it and cache it for further use. Time to retrieve cached formatter: ~0-0.1ms
     * @param locale Locale for which to get a specific formatter
     * @param options Options the formatter needs to have set
     * @returns The formatter desired
     */
    public getIntlFormatter(locale?: string, options?: O) {
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
