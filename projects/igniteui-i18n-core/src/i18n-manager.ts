import type { IDatePickerResourceStrings } from './interfaces/date-picker.interface';
import type { IDateRangePickerResourceStrings } from './interfaces/date-range-picker.interface';
import type { IGridResourceStrings } from './interfaces/grid.interface';
import type { ITimePickerResourceStrings } from './interfaces/time-picker.interface';
import type { IPaginatorResourceStrings } from './interfaces/paginator.interface';
import type { ICarouselResourceStrings } from './interfaces/carousel.interface';
import type { IChipResourceStrings } from './interfaces/chip.interface';
import type { IListResourceStrings } from './interfaces/list.interface';
import type { ICalendarResourceStrings } from './interfaces/calendar.interface';
import type { IInputResourceStrings } from './interfaces/input.interface';
import type { ITreeResourceStrings } from './interfaces/tree.interface';
import type { IActionStripResourceStrings } from './interfaces/action-strip.interface';
import type { IQueryBuilderResourceStrings } from './interfaces/query-builder.interface';
import type { IComboResourceStrings } from './interfaces/combo.interface';
import type { IBannerResourceStrings } from './interfaces/banner.interface';

const defaultLocale = 'en-US';

export interface IResourceStrings extends IGridResourceStrings, ITimePickerResourceStrings, ICalendarResourceStrings,
    ICarouselResourceStrings, IChipResourceStrings, IComboResourceStrings, IInputResourceStrings, IDatePickerResourceStrings,
    IDateRangePickerResourceStrings, IListResourceStrings, IPaginatorResourceStrings, ITreeResourceStrings,
    IActionStripResourceStrings, IQueryBuilderResourceStrings, IBannerResourceStrings { }


export type I18nHandler<T> = (event: T) => void;
export interface ResourceChangeEventArgs {
    oldLocale: string;
    newLocale: string;
}

export class igI18nManager {
    // Default options match angular defaults
    public defaultDateOptions: Intl.DateTimeFormatOptions = {
    };

    // Default options match angular defaults
    public defaultNumberOptions: Intl.NumberFormatOptions = {
        maximumFractionDigits: 3
    };

    public defaultLocale = defaultLocale;
    public currentLocale = defaultLocale;
    public id = crypto.randomUUID();

    private _resourcesMap = new Map<string, IResourceStrings>([[defaultLocale, {}]]);
    private _localesCache = new Map<string, Intl.Locale>();
    private _numberFormattersCache = new Map<string, Intl.NumberFormat>();
    private _dateTimeFormattersCache = new Map<string, Intl.DateTimeFormat>();
    private _resourceChangeHandlers: I18nHandler<ResourceChangeEventArgs>[] = [];
    private _rootObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => this.htmlElementObserve(mutations, observer));

    constructor() {
        const initialLocale = document.documentElement.getAttribute('lang') ?? this.defaultLocale;
        this.setCurrentI18n(initialLocale);
        this._rootObserver.observe(document.documentElement, { attributeFilter: ['lang'] });
    }

    /**
     * Bind to `resourceChange` event, that's triggered after the current resources change.
     * @param handler The handler function for the event.
     */
    public onResourceChange(handler: I18nHandler<ResourceChangeEventArgs>) {
        this._resourceChangeHandlers.push(handler);
    }

    /**
     * Register resource for a locale. Can be the current locale as well or a new one. Results are merged.
     */
    public registerI18n(resources: IResourceStrings, locale: string) {
        const presentResources = this._resourcesMap.get(locale);
        let bResourcesChanged = true;
        if (presentResources) {
            bResourcesChanged = Object.keys(resources).some(key => resources[key as keyof IResourceStrings] !== presentResources[key as keyof IResourceStrings]);
            const mergedResources = Object.assign(presentResources, resources);
            this._resourcesMap.set(locale, mergedResources);
        } else {
            this._resourcesMap.set(locale, resources);
        }
        if (bResourcesChanged && this.currentLocale === locale) {
            this.triggerResourceChange(this.currentLocale, this.currentLocale);
        }
    }

    /**
     * Set current locale across all components.
     */
    public setCurrentI18n(locale: string) {
        const newLocale = Intl.getCanonicalLocales(locale)[0];
        if (this.currentLocale !== newLocale) {
            const oldLocale = this.currentLocale;
            this.currentLocale = newLocale;
            this.triggerResourceChange(oldLocale, newLocale);
        }
    }

    /**
     * Get the current resource string for all components in a single object.
     */
    public getCurrentResourceStrings() {
        const currentResources = this._resourcesMap.get(this.currentLocale);
        if (currentResources) {
            return currentResources;
        }
        return this._resourcesMap.get(this.defaultLocale)!;
    }

    public getFirstDayOfWeek(locale?: string): number {
        const formatter = this.getLocale(locale);
        let firstDay = 1;
        // Missing some typescript definitions for Int.Locale. Disable lint for now until this is merged: https://github.com/microsoft/TypeScript/pull/58084
        /* eslint-disable */
        if ((formatter as any).getWeekInfo) {
            // Firefox currently doesn't support getWeekInfo, default to Monday in this case.
            firstDay = (formatter as any).getWeekInfo().firstDay;
        }
        /* eslint-enable */
        return firstDay;
    }

    /**
     * Format a number using Intl.
     * @param value Value to be formatted.
     * @param locale Override of the current global locale.
     * @param options Options by which to format the number.
     * @returns Formatted value.
     */
    public formatNumber(value: number, locale?: string, options?: Intl.NumberFormatOptions) {
        const formatter = this.getNumberFormatter(locale, options);
        return formatter.format(value);
    }

    /**
     * Get the currency symbol for provided currency code.
     * @param currencyCode The currency code to get the symbol of.
     * @param currencyDisplay How should the currency code be rendered.
     * @param locale Override locale instead of the current one.
     * @returns String representation of the currency symbol.
     */
    public getCurrencySymbol(currencyCode: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry, locale?: string) {
        const options: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: currencyDisplay,
            maximumFractionDigits: 0
        };
        const formatter = this.getNumberFormatter(locale, options);
        return formatter.formatToParts(0).find(part => part.type === "currency")?.value;
    }

    /**
     * Get the currency symbol/name position in formatted value.
     * @param locale Override locale instead of the current one.
     * @returns Position of the symbol for number 0.
     */
    public getCurrencyPosition(locale?: string) {
        const options: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 0
        };
        const formatter = this.getNumberFormatter(locale, options);
        return formatter.formatToParts(0).findIndex(part => part.type === 'currency');
    }

    /**
     * Format a date object or date number using Intl.
     * @param value Value to be formatted
     * @param locale Override of the current global locale.
     * @param options Options by which to format the date.
     * @returns String representing the formatted value.
     */
    public formatDateTime(value: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions) {
        const formatter = this.getDateFormatter(locale, options);
        return formatter.format(value);
    }

    /**
     * Format a date object or date number using Intl.
     * @param value Value to be formatted
     * @param locale Override of the current global locale.
     * @param options Options by which to format the date.
     * @returns Array of strings representing the formatted value, separated in parts.
     */
    public formatDateTimeToParts(value: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions) {
        const formatter = this.getDateFormatter(locale, options);
        return formatter.formatToParts(value);
    }

    /**
     * Use custom formatting to format a date to match the provided strings
     * @param value Date to be formatted
     * @param locale 
     * @param format String containing custom strings describing how the date should be formatted
     * @param timezone Timezone the date to be formatted to using the `IANA time zone` specification. Ex: GMT+0230 is Etc/GMT+02:30, UTS is Etc/UTC+02:30
     * @returns 
     */
    public formatDateCustomFormat(value: Date, locale: string, format: string, timezone =  "GMT") {
        const formatRegex = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
        let parts: string[] = [];
        let match;
        while (format) {
            match = formatRegex.exec(format);
            if (match) {
                parts = parts.concat(match.slice(1));
                const part = parts.pop();
                if (!part) {
                    break;
                }
                format = part;
            } else {
                parts.push(format);
                break;
            }
        }

        let dateText = '';
        for (const part of parts) {
            dateText += this.formatPartialDateValue(value, part, locale, timezone);
        }
        return dateText;
    }

    public formatPartialDateValue(date: Date, format: string, locale: string, timezone: string) {
        // No zeroed values except for 2 digit ones.
        let periodStyle: 'narrow' | 'short' | 'long' | undefined = undefined;
        const options: Intl.DateTimeFormatOptions = {};
        switch (format) {
            case 'G':
            case 'GG':
            case 'GGG':
                options.era = 'short';
                break;
            case 'GGGG':
                options.era = 'long';
                break;
            case 'GGGGG':
                options.era = 'narrow';
                break;
            case 'yy':
                options.year = '2-digit';
                break;
            case 'y':
            case 'yyy':
            case 'yyyy':
                options.year = 'numeric';
                break;

            case 'YY':
                options.year = '2-digit';
                options.calendar = 'iso8601';
                break;
            case 'Y':
            case 'YYY':
            case 'YYYY':
                options.year = 'numeric';
                options.calendar = 'iso8601';
                break;

            case 'M':
            case 'L':
                options.month = 'numeric';
                break;
            case 'MM':
            case 'LL':
                options.month = '2-digit';
                break;

            // Month of the year (January, ...), string, format
            case 'MMM':
            case 'LLL':
                options.month = 'short';
                break;
            case 'MMMM':
            case 'LLLL':
                options.month = 'long';
                break;
            case 'MMMMM':
            case 'LLLLL':
                options.month = 'narrow';
                break;

            //Deprecated.
            // Week of the year (1, ... 52)
            case 'w':
            case 'ww':
            // Week of the month (1, ...)
            // falls through
            case 'W':
                console.warn("Week of the year and week of the month has been deprecated for Ignite UI. Please use custom formatting.");
                return format;

            // Day of the month (1-31)
            case 'd':
                options.day = 'numeric';
                break;
            case 'dd':
                options.day = '2-digit';
                break;

            // Day of the Week
            case 'c':
            case 'cc':
            case 'ccc':
            case 'cccccc':
            case 'E':
            case 'EE':
            case 'EEE':
            case 'EEEEEE':
                options.weekday = 'short';
                break;
            case 'cccc':
            case 'EEEE':
                options.weekday = 'long';
                break;
            case 'ccccc':
            case 'EEEEE':
                options.weekday = 'narrow';
                break;
            // Generic period of the day (am-pm)
            case 'a':
            case 'aa':
            case 'aaa':
                periodStyle = 'short';
                options.timeStyle = 'short';
                break;
            case 'aaaa':
                periodStyle = 'long';
                options.timeStyle = 'short';
                break;
            case 'aaaaa':
                periodStyle = 'narrow';
                options.timeStyle = 'short';
                break;

            // Extended period of the day (midnight, at night, ...), standalone
            case 'b':
            case 'bb':
            case 'bbb':
            case 'B':
            case 'BB':
            case 'BBB':
                options.dayPeriod = 'short';
                break;
            case 'bbbb':
            case 'BBBB':
                options.dayPeriod = 'long';
                break;
            case 'bbbbb':
            case 'BBBBB':
                options.dayPeriod = 'narrow';
                break;

            // Hour in AM/PM, (1-12)
            case 'h':
                options.hour12 = true;
                options.hour = 'numeric';
                break;
            case 'hh':
                options.hour12 = true;
                options.hour = '2-digit';
                break;

            // Hour of the day (0-23)
            case 'H':
                options.hour = 'numeric';
                break;
            // Hour in day, padded (00-23)
            case 'HH':
                options.hour = '2-digit';
                break;

            // Minute of the hour (0-59)
            case 'm':
                options.minute = 'numeric';
                break;
            case 'mm':
                // Also for some reason this is not working in Intl for all locales ??
                options.minute = '2-digit';
                break;

            // Second of the minute (0-59)
            case 's':
                options.second = 'numeric';
                break;
            case 'ss':
                // Also for some reason this is not working in Intl for all locales ??
                options.second = '2-digit';
                break;
            case 'S':
                options.fractionalSecondDigits = 1;
                break;
            case 'SS':
                options.fractionalSecondDigits = 2;
                break;
            case 'SSS':
                options.fractionalSecondDigits = 3;
                break;
            // Timezone short format (GMT+4)
            case 'O':
            case 'OO':
            case 'OOO':
            case 'z':
            case 'zz':
            case 'zzz':
            case 'Z':
            case 'ZZ':
            case 'ZZZ':
                options.timeZone = timezone;
                options.timeZoneName = 'short';
                break;
            // Timezone long format (GMT+0430)
            case 'OOOO':
            case 'zzzz':
            case 'ZZZZ':
                options.timeZone = timezone;
                options.timeZoneName = 'long';
                break;
            default:
                return format;
        }
        const dateParts = getI18nManager().formatDateTimeToParts(date, locale, options);
        if (options.era) {
            return this.findDatePart(dateParts, 'era');
        } else if (periodStyle || options.dayPeriod) {
            let value = dateParts.find(part => part.type === 'dayPeriod')?.value;
            if (!value && periodStyle) {
                // Current locale doesn't have generic day period. Just use the `en` one.
                value = this.findDatePart(this.formatDateTimeToParts(date, 'en', options), 'dayPeriod');
            }
            switch (periodStyle ?? options.dayPeriod) {
                case 'narrow':
                    return value?.split(' ').map(part => part.substring(0, 1)).join('');
                case 'short':
                    return value?.split(' ').map(part => part.substring(0, 2) + (part.length > 2 ? '.' : '')).join(' ');
                case 'long':
                default:
                    return value;
            }
        } else if (options.minute === '2-digit') {
            // For some reason not working as expected in Intl
            const minutes = this.findDatePart(dateParts, 'minute');
            return minutes?.length === 1 ? "0" + minutes : minutes;
        } else if (options.second === '2-digit') {
            // For some reason not working as expected in Intl
            const seconds = this.findDatePart(dateParts, 'second');
            return seconds?.length === 1 ? "0" + seconds : seconds;
        } else if (options.timeZone) {
            return this.findDatePart(dateParts, 'timeZoneName');
        } else if (options.fractionalSecondDigits) {
            return this.findDatePart(dateParts, 'fractionalSecond');
        }
        return dateParts[0].value;
    }

    private findDatePart(parts: Intl.DateTimeFormatPart[], partName: string) {
        return parts.find(part => part.type === partName)?.value;
    }

    private getLocale(locale?: string, options?: Intl.LocaleOptions) {
        const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
        const formatterKey = this.generateLocaleKey(canonLocale, options);
        let formatter = this._localesCache.get(formatterKey);
        if (!formatter) {
            formatter = new Intl.Locale(canonLocale, options);
            this._localesCache.set(formatterKey, formatter);
        }
        return formatter;
    }

    private getNumberFormatter(locale?: string, options?: Intl.NumberFormatOptions) {
        const combinedOptions = this.mergeOptions(this.defaultNumberOptions, options);
        const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
        const formatterKey = this.generateLocaleKey(canonLocale, combinedOptions);
        let formatter = this._numberFormattersCache.get(formatterKey);
        if (!formatter) {
            formatter = new Intl.NumberFormat(canonLocale, combinedOptions);
            this._numberFormattersCache.set(formatterKey, formatter);
        }
        return formatter;
    }

    private getDateFormatter(locale?: string, options?: Intl.DateTimeFormatOptions) {
        const combinedOptions = this.mergeOptions(this.defaultDateOptions, options);
        const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
        const formatterKey = this.generateLocaleKey(canonLocale, combinedOptions);
        let formatter = this._dateTimeFormattersCache.get(formatterKey);
        if (!formatter) {
            formatter = new Intl.DateTimeFormat(canonLocale, combinedOptions);
            this._dateTimeFormattersCache.set(formatterKey, formatter);
        }
        return formatter;
    }

    private generateLocaleKey(locale: string, formatterOptions?: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions) {
        return locale + '-' + (formatterOptions ? Object.entries(formatterOptions).map(([k, v]) => `${k}:${v}`).join('-') : "default");
    }

    /**
     * Merge options. A bit more complex than Object.assign, due to setting an option to `undefined` should be possible and lead to default behavior, which if set from source, overrides target.
     * @param target Object whose values act as a base for the merged object
     * @param source Object that is merged onto the target object values.
     * @returns Merged options.
     */
    private mergeOptions<T extends Intl.NumberFormatOptions | Intl.DateTimeFormatOptions>(target: T, source: T = {} as T) {
        const result = Object.assign({}, target);
        const sourceKeys = Object.keys(source).map(key => key as keyof T);
        for (const key of sourceKeys) {
            if (source[key] !== null && source[key] !== undefined) {
                result[key] = source[key];
            }
        }
        return result;
    }

    private triggerResourceChange(oldLocale: string, newLocale: string) {
        const eventArgs: ResourceChangeEventArgs = {
            oldLocale,
            newLocale
        }
        for (const handler of this._resourceChangeHandlers) {
            handler(eventArgs);
        }
    }

    private htmlElementObserve(mutations: MutationRecord[], _: MutationObserver) {
        if (mutations.length && mutations[0].attributeName === 'lang') {
            const newLocale = (mutations[0].target as Element).getAttribute('lang') ?? this.currentLocale;
            this.setCurrentI18n(newLocale);
        }
    }
}

const igI18nManagerInstance = new igI18nManager();

/**
 * Gets in the i18nManager instance.
 * @internal
 */
export function getI18nManager() {
    return igI18nManagerInstance;
}

/**
 * Register resources for a specific locale.
 * @param resourceStrings Object containing the translated resource strings.
 * @param locale The name of the locale. A string using the BCP 47 language tag.
 */
export function registerI18n(resourceStrings: IResourceStrings, locale: string) {
    getI18nManager().registerI18n(resourceStrings, locale);
}

/**
 * Set the current locale of all IgniteUI components. 
 * @param locale The name of the locale. A string using the BCP 47 language tag.
 */
export function setCurrentI18n(locale: string) {
    getI18nManager().setCurrentI18n(locale);
}


export function getCurrentI18n() {
    return getI18nManager().currentLocale;
}

export function getCurrentResourceStrings() {
    return getI18nManager().getCurrentResourceStrings();
}
