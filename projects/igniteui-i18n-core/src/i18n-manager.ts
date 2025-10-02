import type { BaseFormatter } from './formatters/base.formatter.js';
import { DateFormatter } from './formatters/date.formatter.js';
import { DisplayNamesFormatter } from './formatters/display-names.formatter.js';
import { LocaleFormatter } from './formatters/locale.formatter.js';
import { NumberFormatter } from './formatters/number.formatter.js';
import type { IResourceStrings } from './i18n/interfaces/resources.interface.js';
import {
    type CustomEventListenerObject,
    Formatter,
    type I18nManagerEventMap,
    I18nManagerEventTarget,
    type IIgI18nManager,
    type IResourceChangeEventArgs
} from './i18n-manager.interfaces.js';
import { isBrowser } from './utils.js';

const defaultLang = 'en';
const defaultLocale = 'en-US';

export class I18nManager extends I18nManagerEventTarget implements IIgI18nManager {
    public defaultLang = defaultLang;
    public defaultLocale = defaultLocale;
    public currentLocale = defaultLocale;

    private static _instance: I18nManager;
    private _formatters = new Map<Formatter, BaseFormatter<any, any>>();
    private _resourcesMap = new Map<string, IResourceStrings>([[defaultLang, {}]]);
    private _rootObserver: MutationObserver | undefined;

    public get localeFormatter(): LocaleFormatter {
        return this._formatters.get(Formatter.Locale) as LocaleFormatter;
    }

    public get dateFormatter(): DateFormatter {
        return this._formatters.get(Formatter.Date) as DateFormatter;
    }

    public get numberFormatter(): NumberFormatter {
        return this._formatters.get(Formatter.Number) as NumberFormatter;
    }

    public get displayNamesFormatter(): DisplayNamesFormatter {
        return this._formatters.get(Formatter.DisplayNames) as DisplayNamesFormatter;
    }

    public static get instance() {
        if (!I18nManager._instance) {
            I18nManager._instance = new I18nManager();
        }
        return I18nManager._instance;
    }

    private constructor() {
        super();
        this._formatters.set(Formatter.Locale, new LocaleFormatter(this.defaultLocale));
        this._formatters.set(Formatter.Date, new DateFormatter(this.defaultLocale, this.localeFormatter));
        this._formatters.set(Formatter.Number, new NumberFormatter(this.defaultLocale));
        this._formatters.set(Formatter.DisplayNames, new DisplayNamesFormatter(this.defaultLocale, this.dateFormatter));

        if (typeof document !== 'undefined') {
            const initialLocale = document.documentElement.getAttribute('lang') ?? this.defaultLocale;
            this.setCurrentI18n(initialLocale);

            if (typeof MutationObserver !== 'undefined') {
                this._rootObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) =>
                    this.htmlElementObserve(mutations, observer)
                );
                this._rootObserver.observe(document.documentElement, {
                    attributeFilter: ['lang']
                });
            }
        }
    }

    /**
     * Sets up a function that will be called whenever the specified event is delivered to the target.
     * Currently supported events: onResourceChange
     * Note: Make sure to bind to events only in browser environment or emulated one. Anything else like server environment does not need to have events.
     * @param type Name of the event
     * @param listener The function to be called when event is triggered.
     * @param options
     */
    public override addEventListener<K extends 'onResourceChange'>(
        type: K,
        listener: ((evt: I18nManagerEventMap[K]) => void) | CustomEventListenerObject<I18nManagerEventMap[K]>,
        options?: boolean | EventListenerOptions
    ): void {
        if (isBrowser()) {
            super.addEventListener(type, listener, options);
        }
    }

    /**
     * Register resource for a locale. Can be the current locale as well or a new one. Results are merged.
     */
    public registerI18n(resources: IResourceStrings, locale: string) {
        // Use locales language when saving, to make sure for different locales with same language we return same resource strings.
        const localeLang = this.localeFormatter.getIntlFormatter(locale).language;
        const presentResources = this._resourcesMap.get(localeLang);
        let bResourcesChanged = true;
        if (presentResources) {
            bResourcesChanged = Object.keys(resources).some(
                (key) => resources[key as keyof IResourceStrings] !== presentResources[key as keyof IResourceStrings]
            );
            const mergedResources = Object.assign(presentResources, resources);
            this._resourcesMap.set(localeLang, mergedResources);
        } else {
            this._resourcesMap.set(localeLang, resources);
        }
        const currentLocaleLang = this.localeFormatter.getIntlFormatter(this.currentLocale).language;
        if (bResourcesChanged && currentLocaleLang === localeLang) {
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

            // Update formatters with latest locale.
            for (const [_, formatter] of this._formatters) {
                formatter.onLocaleChange(newLocale);
            }
        }
    }

    /**
     * Get the current resource string for all components in a single object.
     */
    public getCurrentResourceStrings(locale?: string) {
        const lang = this.localeFormatter.getIntlFormatter(locale ?? this.currentLocale).language;
        const currentResources = this._resourcesMap.get(lang);
        if (currentResources) {
            return currentResources;
        }
        return this._resourcesMap.get(this.defaultLang) ?? ({} as IResourceStrings);
    }

    private triggerResourceChange(oldLocale: string, newLocale: string) {
        const eventArgs = {
            oldLocale,
            newLocale
        } as IResourceChangeEventArgs;
        if (isBrowser()) {
            this.dispatchEvent(new CustomEvent<IResourceChangeEventArgs>('onResourceChange', { detail: eventArgs }));
        }
    }

    private htmlElementObserve(mutations: MutationRecord[], _: MutationObserver) {
        if (mutations.length && mutations[0].attributeName === 'lang') {
            const newLocale = (mutations[0].target as Element).getAttribute('lang') ?? this.currentLocale;
            this.setCurrentI18n(newLocale);
        }
    }
}

/**
 * Gets in the i18nManager instance.
 * @internal
 */
export function getI18nManager() {
    return I18nManager.instance;
}

export function getDateFormatter() {
    return getI18nManager().dateFormatter;
}

export function getNumberFormatter() {
    return getI18nManager().numberFormatter;
}

export function getDisplayNamesFormatter() {
    return getI18nManager().displayNamesFormatter;
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
