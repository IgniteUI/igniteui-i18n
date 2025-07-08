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

export interface IResourceStrings extends IGridResourceStrings, ITimePickerResourceStrings, ICalendarResourceStrings,
    ICarouselResourceStrings, IChipResourceStrings, IComboResourceStrings, IInputResourceStrings, IDatePickerResourceStrings,
    IDateRangePickerResourceStrings, IListResourceStrings, IPaginatorResourceStrings, ITreeResourceStrings,
    IActionStripResourceStrings, IQueryBuilderResourceStrings, IBannerResourceStrings { }


export type I18nHandler<T> = (event: T) => void;
export interface ResourceChangeEvent {
    oldLocale: string;
    newLocale: string;
}

export class igI18nManager {
    // Default options match angular defaults
    public defaultDateOptions: Intl.DateTimeFormatOptions = {
        dateStyle: 'medium'
    };

    // Default options match angular defaults
    public defaultNumberOptions: Intl.NumberFormatOptions = {
        maximumFractionDigits: 3
    };

    public defaultLocale: string = 'en';
    public currentLocale: string = 'en';

    private _resourcesMap = new Map<string, IResourceStrings>();
    private _numberFormattersCache = new Map<string, Intl.NumberFormat>();
    private _dateTimeFormattersCache = new Map<string, Intl.DateTimeFormat>();
    private _resourceChangeHandlers: I18nHandler<ResourceChangeEvent>[] = [];

    /**
     * Bind to `resourceChange` event, that's triggered after the current resources change.
     * @param handler The handler function for the event.
     */
    public onResourceChange(handler: I18nHandler<ResourceChangeEvent>) {
        this._resourceChangeHandlers.push(handler);
    }

    /**
     * Register resource for a locale. Can be the current locale as well or a new one. Results are merged.
     */
    public registerI18n(resources: IResourceStrings, locale: string) {
        const presentResources = this._resourcesMap.get(locale);
        if (presentResources) {
            const mergedResources = Object.assign(presentResources, resources);
            this._resourcesMap.set(locale, mergedResources);
        } else {
            this._resourcesMap.set(locale, resources);
        }
        if (this.currentLocale === locale) {
            this.triggerResourceChange(locale, locale);
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

    /**
     * Format a number using Intl.
     * @param value Value to be formatted.
     * @param locale Override of the current global locale.
     * @param options Options by which to format the number.
     * @returns Formatted value.
     */
    public formatNumber(value: number, locale?: string, options?: Intl.NumberFormatOptions) {
        const combinedOptions = this.mergeOptions(this.defaultNumberOptions, options!);
        const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
        const formatterKey = this.generateLocaleKey(canonLocale, combinedOptions);
        let formatter = this._numberFormattersCache.get(formatterKey);
        if (!formatter) {
            formatter = new Intl.NumberFormat(canonLocale, combinedOptions);
            this._numberFormattersCache.set(formatterKey, formatter);
        }
        return formatter.format(value);
    }

    /**
     * Format a date object or date number using Intl.
     * @param value Value to be formatted
     * @param locale Override of the current global locale.
     * @param options Options by which to format the date.
     * @returns Formatted value.
     */
    public formatDateTime(value: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions) {
        const combinedOptions = this.mergeOptions(this.defaultDateOptions, options!);
        const canonLocale = locale ? Intl.getCanonicalLocales(locale)[0] : this.currentLocale;
        const formatterKey = this.generateLocaleKey(canonLocale, combinedOptions);
        let formatter = this._dateTimeFormattersCache.get(formatterKey);
        if (!formatter) {
            formatter = new Intl.DateTimeFormat(canonLocale, combinedOptions);
            this._dateTimeFormattersCache.set(formatterKey, formatter);
        }
        return formatter.format(value);
    }

    private generateLocaleKey(locale: string, formatterOptions?: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions) {
        return locale + '-' + (formatterOptions ? JSON.stringify(formatterOptions) : "default");
    }

    /**
     * Merge options. A bit more complex than Object.assign, due to setting an option to `undefined` should be possible and lead to default behavior, which if set from source, overrides target.
     * @param target Object whose values act as a base for the merged object
     * @param source Object that is merged onto the target object values.
     * @returns Merged options.
     */
    private mergeOptions(target: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions, source: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions) {
        const result: any = Object.assign({}, target);
        const sourceKeys = Object.keys(source);
        for (const key of sourceKeys) {
            if ((source as any)[key] !== null && (source as any)[key] !== undefined) {
                result[key] = (source as any)[key];
            }
        }
        return result;
    }

    private triggerResourceChange(oldLocale: string, newLocale: string) {
        const eventArgs: ResourceChangeEvent = {
            oldLocale,
            newLocale
        }
        for (const handler of this._resourceChangeHandlers) {
            handler(eventArgs);
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
export function registerI18n(resourceStrings: IResourceStrings, locale: string = 'en') {
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
