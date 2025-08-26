import { BaseFormatter } from './base.formatter';

export class NumberFormatter extends BaseFormatter<Intl.NumberFormat, Intl.NumberFormatOptions> {
    constructor(defaultLocale: string) {
        super(defaultLocale, Intl.NumberFormat);
        this.defaultOptions = {
            maximumFractionDigits: 3
        };
    }

    /**
     * Format a number using Intl.
     * @param value Value to be formatted.
     * @param locale Override of the current global locale.
     * @param options Options by which to format the number.
     * @returns Formatted value.
     */
    public formatNumber(value: number, locale?: string, options?: Intl.NumberFormatOptions) {
        const formatter = this.getIntlFormatter(locale, options);
        return formatter.format(value);
    }

    /**
     * Get the currency symbol for provided currency code.
     * @param currencyCode The currency code to get the symbol of.
     * @param currencyDisplay How should the currency code be rendered.
     * @param locale Override locale instead of the current one.
     * @returns String representation of the currency symbol.
     */
    public getCurrencySymbol(
        currencyCode: string,
        locale?: string,
        currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry
    ) {
        const options: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: currencyDisplay,
            maximumFractionDigits: 0
        };
        const formatter = this.getIntlFormatter(locale, options);
        return formatter.formatToParts(0).find((part) => part.type === 'currency')?.value;
    }

    /**
     * Get the currency symbol/name position in formatted value.
     * @param locale Override locale instead of the current one.
     * @returns Position of the symbol for number 0.
     */
    public getCurrencyPosition(locale?: string) {
        const options: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        };
        const formatter = this.getIntlFormatter(locale, options);
        return formatter.formatToParts(0).findIndex((part) => part.type === 'currency');
    }
}
