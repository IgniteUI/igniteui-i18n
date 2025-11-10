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
  type IResourceCategories,
  type IResourceChangeEventArgs,
} from './i18n-manager.interfaces.js';
import { isBrowser } from './utils.js';

type ConcreteFormatter = LocaleFormatter | DateFormatter | NumberFormatter | DisplayNamesFormatter;

export class I18nManager extends I18nManagerEventTarget implements IIgI18nManager {
  private readonly _defaultLang = 'en';
  public readonly defaultLocale = 'en-US';

  private static _instance: I18nManager;
  private _currentLocale = 'en-US';
  private readonly _formatters = new Map<Formatter, ConcreteFormatter>();
  private readonly _resourcesMap = new Map<string, IResourceCategories>([
    [
      this._defaultLang,
      {
        default: 'US',
        scripts: new Map<string, IResourceStrings>(),
        regions: new Map<string, IResourceStrings>([['US', {}]]),
      },
    ],
  ]);
  private readonly _rootObserver: MutationObserver | undefined;

  public get currentLocale(): string {
    return this._currentLocale;
  }

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

  public static get instance(): I18nManager {
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

    if (isBrowser()) {
      const initialLocale = document.documentElement.getAttribute('lang') ?? this.defaultLocale;
      this.setCurrentI18n(initialLocale);

      this._rootObserver = new MutationObserver((mutations: MutationRecord[]) => this.htmlElementObserve(mutations));
      this._rootObserver.observe(document.documentElement, {
        attributeFilter: ['lang'],
      });
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
  public override addEventListener<K extends keyof I18nManagerEventMap>(
    type: K,
    listener: ((evt: I18nManagerEventMap[K]) => void) | CustomEventListenerObject<I18nManagerEventMap[K]>,
    options?: boolean | EventListenerOptions
  ): void {
    if (isBrowser()) {
      super.addEventListener(type, listener, options);
    }
  }

  /**
   * Register resource for a locale. Can be the current locale as well or a new one.
   */
  public registerI18n(resources: IResourceStrings, locale: string) {
    const localeObj = this.getLocaleObject(locale);
    const currentResources = this.getResourcesPerLocale(locale);

    let bResourcesChanged = true;
    if (currentResources) {
      bResourcesChanged = Object.keys(resources).some(
        (key) => resources[key as keyof IResourceStrings] !== currentResources[key as keyof IResourceStrings]
      );
      const mergedResources = { ...currentResources, ...resources };
      this.setResourcesPerLocale(locale, mergedResources);

      const defaultLocaleObj = this.localeFormatter.getIntlFormatter(this.defaultLocale);
      if (bResourcesChanged && LocaleFormatter.equalLocaleLanguages(defaultLocaleObj, localeObj)) {
        // Default locale registering new resources. Update default unfilled resources for all available languages.
        this.updateDefaultResources(mergedResources);
      }
    } else {
      // Fill out empty resources with available default language on register, so we don't have to fill them every time they are retrieved.
      const defaultResources = this.getDefaultResources();
      const completeResources = { ...defaultResources, ...resources };

      this.setResourcesPerLocale(locale, completeResources);
    }

    const currentLocaleObj = this.localeFormatter.getIntlFormatter(this.currentLocale);
    if (bResourcesChanged && LocaleFormatter.equalLocaleLanguages(currentLocaleObj, localeObj)) {
      this.triggerResourceChange(this.currentLocale, this.currentLocale);
    }
  }

  /**
   * Set current locale across all components.
   */
  public setCurrentI18n(locale: string): void {
    let newLocale = this.defaultLocale;
    try {
      newLocale = Intl.getCanonicalLocales(locale)[0];
    } catch {
      console.warn(
        `Trying to switch to invalid locale tag '${locale}' for the Ignite UI components. Defaulting to 'en-US'.`
      );
    }

    if (this.currentLocale !== newLocale) {
      const oldLocale = this.currentLocale;
      this._currentLocale = newLocale;
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
    const currentResources = this.getResourcesPerLocale(locale ?? this.currentLocale);
    if (currentResources) {
      return currentResources;
    }
    return this.getDefaultResources();
  }

  private getLocaleObject(locale: string) {
    try {
      return this.localeFormatter.getIntlFormatter(locale);
    } catch {
      console.warn(
        `Invalid locale tag '${locale}' using for resources for the Ignite UI components. Using the default 'en-US'.`
      );
    }
    return this.localeFormatter.getIntlFormatter(this.defaultLocale);
  }

  private getDefaultResources(): IResourceStrings {
    return this.getDefaultForCategory(this._resourcesMap.get(this._defaultLang)!) ?? {};
  }

  private getDefaultForCategory(category: IResourceCategories): IResourceStrings {
    if (typeof category.default === 'string') {
      return category.scripts?.get(category.default) ?? category.regions?.get(category.default) ?? {};
    }

    return category.default;
  }

  private getResourcesPerLocale(locale: string) {
    const localeObj = this.getLocaleObject(locale);
    const localeCategory = this._resourcesMap.get(localeObj.language);
    if (!localeCategory) {
      return undefined;
    }

    let resultResource: IResourceStrings | undefined;
    if (localeObj.script) {
      resultResource = localeCategory.scripts?.get(localeObj.script);
    }
    if (!resultResource && localeObj.region) {
      resultResource = localeCategory.regions?.get(localeObj.region);
    }

    return resultResource ?? this.getDefaultForCategory(localeCategory);
  }

  private setResourcesPerLocale(locale: string, resources: IResourceStrings) {
    const localeObj = this.getLocaleObject(locale);
    const localeCategory = this._resourcesMap.get(localeObj.language);

    if (localeCategory) {
      if (localeObj.script) {
        localeCategory.scripts.set(localeObj.script, resources);
      } else if (localeObj.region) {
        localeCategory.regions.set(localeObj.region, resources);
      } else {
        localeCategory.default = resources;
      }
    } else {
      const newCategory: IResourceCategories = {
        default: {},
        scripts: new Map<string, IResourceStrings>(),
        regions: new Map<string, IResourceStrings>(),
      };

      if (localeObj.script) {
        newCategory.default = localeObj.script;
        newCategory.scripts.set(localeObj.script, resources);
      } else if (localeObj.region) {
        newCategory.default = localeObj.region;
        newCategory.regions.set(localeObj.region, resources);
      } else {
        newCategory.default = resources;
      }

      this._resourcesMap.set(localeObj.language, newCategory);
    }
  }

  private updateDefaultResources(newDefaultResources: IResourceStrings) {
    this._resourcesMap.forEach((value, key) => {
      if (key !== this._defaultLang) {
        value.default =
          typeof value.default === 'string' ? value.default : { ...newDefaultResources, ...value.default };
        value.scripts.forEach((scriptValue, scriptKey) => {
          value.scripts.set(scriptKey, { ...newDefaultResources, ...scriptValue });
        });
        value.regions.forEach((scriptValue, scriptKey) => {
          value.regions.set(scriptKey, { ...newDefaultResources, ...scriptValue });
        });
      }
    });
  }

  private triggerResourceChange(oldLocale: string, newLocale: string): void {
    const eventArgs = {
      oldLocale,
      newLocale,
    } as IResourceChangeEventArgs;

    if (isBrowser()) {
      this.dispatchEvent(new CustomEvent<IResourceChangeEventArgs>('onResourceChange', { detail: eventArgs }));
    }
  }

  private htmlElementObserve(mutations: MutationRecord[]): void {
    const mutation = mutations[0];

    if (mutation.attributeName === 'lang') {
      const newLocale = (mutation.target as Element).getAttribute('lang') ?? this.currentLocale;
      this.setCurrentI18n(newLocale);
    }
  }
}

/**
 * Gets in the i18nManager instance.
 * @internal
 */
export function getI18nManager(): I18nManager {
  return I18nManager.instance;
}

export function getDateFormatter(): DateFormatter {
  return getI18nManager().dateFormatter;
}

export function getNumberFormatter(): NumberFormatter {
  return getI18nManager().numberFormatter;
}

export function getDisplayNamesFormatter(): DisplayNamesFormatter {
  return getI18nManager().displayNamesFormatter;
}

/**
 * Register resources for a specific locale.
 * @param resourceStrings Object containing the translated resource strings.
 * @param locale The name of a locale. A string using the BCP 47 language tag. If not a valid one, will register to the default 'en-US' locale.
 */
export function registerI18n(resourceStrings: IResourceStrings, locale: string): void {
  getI18nManager().registerI18n(resourceStrings, locale);
}

/**
 * Set the current locale of all Ignite UI components.
 * @param locale The name of the locale. A string using the BCP 47 language tag.
 */
export function setCurrentI18n(locale: string): void {
  getI18nManager().setCurrentI18n(locale);
}

export function getCurrentI18n(): string {
  return getI18nManager().currentLocale;
}

export function getCurrentResourceStrings(): IResourceStrings {
  return getI18nManager().getCurrentResourceStrings();
}
