import type { BaseFormatter } from './formatters/base.formatter.js';
import { DateFormatter } from './formatters/date.formatter.js';
import { DisplayNamesFormatter } from './formatters/display-names.formatter.js';
import { LocaleFormatter } from './formatters/locale.formatter.js';
import { NumberFormatter } from './formatters/number.formatter.js';
import {
    Formatter,
    I18nManagerEventTarget,
    type IIgI18nManager,
    type IResourceChangeEventArgs
} from './i18n-manager.interfaces.js';
import type { IResourceStrings } from './interfaces/resources.interface.js';

const defaultLang = 'en';
const defaultLocale = 'en-US';
const maxEventListeners = 9999;

export class I18nManager extends I18nManagerEventTarget implements IIgI18nManager {
    public defaultLang = defaultLang;
    public defaultLocale = defaultLocale;
    public currentLocale = defaultLocale;

    private formatters = new Map<Formatter, BaseFormatter<any, any>>();
    private _resourcesMap = new Map<string, IResourceStrings>([[defaultLang, {}]]);
    private _rootObserver: MutationObserver | undefined;
    private _eventsEnabled = true;

    public get localeFormatter(): LocaleFormatter {
        return this.formatters.get(Formatter.Locale) as LocaleFormatter;
    }

    public get dateFormatter(): DateFormatter {
        return this.formatters.get(Formatter.Date) as DateFormatter;
    }

    public get numberFormatter(): NumberFormatter {
        return this.formatters.get(Formatter.Number) as NumberFormatter;
    }

    public get displayNamesFormatter(): DisplayNamesFormatter {
        return this.formatters.get(Formatter.DisplayNames) as DisplayNamesFormatter;
    }

    constructor() {
        super();
        this.formatters.set(Formatter.Locale, new LocaleFormatter(this.defaultLocale));
        this.formatters.set(Formatter.Date, new DateFormatter(this.defaultLocale, this.localeFormatter));
        this.formatters.set(Formatter.Number, new NumberFormatter(this.defaultLocale));
        this.formatters.set(Formatter.DisplayNames, new DisplayNamesFormatter(this.defaultLocale, this.dateFormatter));

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
     * Warning: Do not use this method unless you are sure you want to disable updates of i18n for everything.
     * Temporary toggle triggering of `onResourceChange` event.
     * Currently this is used for Angular's test bed having concurrency errors if triggering events while a component is still initializing.
     * @param enable
     */
    public toggleEvents(enable?: boolean) {
        if (enable !== undefined) {
            this._eventsEnabled = enable;
        } else {
            this._eventsEnabled = !this._eventsEnabled;
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
            for (const [_, formatter] of this.formatters) {
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (Object.getPrototypeOf(CustomEvent).name === 'Event' && this._eventsEnabled) {
            // Make sure inheritance is correct due to Angular SSR having issues with it.
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

const i18nManagerInstance = new I18nManager();

// By default Node.js expects max event listeners per object to be 10, otherwise error is thrown.
// The manager is one for a page and each component adds at least 1 listener (the grids add a bit more) so they can get quite many.
// Components should clear any listeners when they are destroyed, but still can have a lot at once.
import('node:events')
    .then((nodeEvents) => {
        const eventsDefault = nodeEvents.default;
        if (typeof eventsDefault.setMaxListeners === 'function') {
            eventsDefault.setMaxListeners(maxEventListeners, i18nManagerInstance);
        }
    })
    .catch(() => {
        // The modules is not available, so we are not in a Node env.
    });

/**
 * Gets in the i18nManager instance.
 * @internal
 */
export function getI18nManager() {
    return i18nManagerInstance;
}

export function getDateFormatter() {
    return i18nManagerInstance.dateFormatter;
}

export function getNumberFormatter() {
    return i18nManagerInstance.numberFormatter;
}

export function getDisplayNamesFormatter() {
    return i18nManagerInstance.displayNamesFormatter;
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
