import { DateFormatter } from './formatters/date.formatter.js';
import { DisplayNamesFormatter } from './formatters/display-names.formatter.js';
import { LocaleFormatter } from './formatters/locale.formatter.js';
import { NumberFormatter } from './formatters/number.formatter.js';
import type { IResourceStrings } from './i18n/interfaces/resources.interface.js';
import {
  type CustomEventListenerObject,
  type I18nManagerEventMap,
  I18nManagerEventTarget,
  type IIgI18nManager,
  type IResourceCategories,
  type IResourceChangeEventArgs,
} from './i18n-manager.interfaces.js';
import { isBrowser, toCanonicalLocale } from './utils.js';

const LANG_ATTRIBUTE = 'lang';

/** A formatter the manager keeps in sync with the current locale. */
interface LocaleAware {
  onLocaleChange(newLocale: string): void;
}

type FormatterFactory<T extends LocaleAware> = (locale: string) => T;

export class I18nManager extends I18nManagerEventTarget implements IIgI18nManager {
  private readonly _defaultLang = 'en';
  public readonly defaultLocale = 'en-US';

  private static _instance: I18nManager;
  private _currentLocale: string = this.defaultLocale;
  private readonly _formatters = new Map<FormatterFactory<LocaleAware>, LocaleAware>();
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

  public get currentLocale(): string {
    return this._currentLocale;
  }

  public get localeFormatter(): LocaleFormatter {
    return this.getFormatter(createLocaleFormatter);
  }

  public static get instance(): I18nManager {
    if (!I18nManager._instance) {
      I18nManager._instance = new I18nManager();
    }
    return I18nManager._instance;
  }

  private constructor() {
    super();

    if (isBrowser()) {
      this.syncLang();
      new MutationObserver(() => this.syncLang()).observe(document.documentElement, {
        attributeFilter: [LANG_ATTRIBUTE],
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
   * Gets the formatter `create` builds. Creates it on first use with the current locale.
   * Factories live outside the class, so bundlers drop the formatters a consumer never gets.
   * @internal
   */
  public getFormatter<T extends LocaleAware>(create: FormatterFactory<T>): T {
    const existing = this._formatters.get(create);
    if (existing) {
      return existing as T;
    }

    const formatter = create(this.currentLocale);
    this._formatters.set(create, formatter);
    return formatter;
  }

  /**
   * Register resource for a locale. Can be the current locale as well or a new one.
   */
  public registerI18n(resources: IResourceStrings, locale: string): void {
    const localeObj = this.getLocaleObject(locale);
    const currentResources = this.getResourcesPerLocale(localeObj);
    const changed =
      !currentResources ||
      Object.entries(resources).some(([key, value]) => value !== currentResources[key as keyof IResourceStrings]);

    // Fill out empty resources with available default language on register, so we don't have to fill them every time they are retrieved.
    // Unchanged resources keep their object, so a new identity always means new strings.
    const mergedResources = changed
      ? { ...(currentResources ?? this.getDefaultResources()), ...resources }
      : currentResources;
    this.setResourcesPerLocale(localeObj, mergedResources);

    if (!changed) {
      return;
    }

    if (this.isSameLocale(this.defaultLocale, localeObj)) {
      // Default locale registering new resources. Update default unfilled resources for all available languages.
      this.updateDefaultResources(mergedResources);
    }

    if (this.isSameLocale(this.currentLocale, localeObj)) {
      this.triggerResourceChange(this.currentLocale, this.currentLocale);
    }
  }

  /**
   * Set current locale across all components.
   */
  public setCurrentI18n(locale: string): void {
    const newLocale = toCanonicalLocale(locale);
    if (!newLocale) {
      console.warn(
        `Trying to switch to invalid locale tag '${locale}' for the Ignite UI components. Using last valid tag '${this.currentLocale}'.`
      );
      return;
    }

    if (newLocale === this.currentLocale) {
      return;
    }

    const oldLocale = this.currentLocale;
    this._currentLocale = newLocale;

    // Update formatters with latest locale, before listeners use them.
    for (const formatter of this._formatters.values()) {
      formatter.onLocaleChange(newLocale);
    }

    this.triggerResourceChange(oldLocale, newLocale);
  }

  /**
   * Get the current resource string for all components in a single object.
   */
  public getCurrentResourceStrings(locale?: string): IResourceStrings {
    const localeObj = this.getLocaleObject(locale ?? this.currentLocale);
    return this.getResourcesPerLocale(localeObj) ?? this.getDefaultResources();
  }

  /** Resolves `locale` for resource lookups. Invalid tags fall back to the default locale, not the current one. */
  private getLocaleObject(locale: string): Intl.Locale {
    if (toCanonicalLocale(locale)) {
      return this.localeFormatter.getIntlFormatter(locale);
    }

    console.warn(
      `Invalid locale tag '${locale}' using for resources for the Ignite UI components. Using the default '${this.defaultLocale}'.`
    );
    return this.localeFormatter.getIntlFormatter(this.defaultLocale);
  }

  private getDefaultResources(): IResourceStrings {
    return this.getDefaultForCategory(this._resourcesMap.get(this._defaultLang)!);
  }

  private getDefaultForCategory(category: IResourceCategories): IResourceStrings {
    if (typeof category.default === 'string') {
      return category.scripts.get(category.default) ?? category.regions.get(category.default) ?? {};
    }

    return category.default;
  }

  private isSameLocale(locale: string, localeObj: Intl.Locale): boolean {
    return LocaleFormatter.equalLocaleLanguages(this.localeFormatter.getIntlFormatter(locale), localeObj);
  }

  private getResourcesPerLocale({ language, script, region }: Intl.Locale) {
    const category = this._resourcesMap.get(language);
    if (!category) {
      return undefined;
    }

    const byScript = script ? category.scripts.get(script) : undefined;
    const byRegion = region ? category.regions.get(region) : undefined;
    return byScript ?? byRegion ?? this.getDefaultForCategory(category);
  }

  private setResourcesPerLocale({ language, script, region }: Intl.Locale, resources: IResourceStrings) {
    let category = this._resourcesMap.get(language);

    if (!category) {
      // The first registered locale of a language becomes its default, e.g. 'de-AT' -> 'AT'.
      category = { default: script ?? region ?? resources, scripts: new Map(), regions: new Map() };
      this._resourcesMap.set(language, category);
    }

    if (script) {
      category.scripts.set(script, resources);
    } else if (region) {
      category.regions.set(region, resources);
    } else {
      category.default = resources;
    }
  }

  private updateDefaultResources(newDefaultResources: IResourceStrings) {
    for (const [language, category] of this._resourcesMap) {
      if (language === this._defaultLang) {
        continue;
      }

      if (typeof category.default !== 'string') {
        category.default = { ...newDefaultResources, ...category.default };
      }

      for (const resourcesMap of [category.scripts, category.regions]) {
        for (const [key, resources] of resourcesMap) {
          resourcesMap.set(key, { ...newDefaultResources, ...resources });
        }
      }
    }
  }

  private triggerResourceChange(oldLocale: string, newLocale: string): void {
    if (!isBrowser()) {
      return;
    }

    const detail: IResourceChangeEventArgs = { oldLocale, newLocale };
    this.dispatchEvent(new CustomEvent('onResourceChange', { detail }));
  }

  /** Applies the `lang` attribute of `<html>`, e.g. `<html lang="de">`. */
  private syncLang(): void {
    this.setCurrentI18n(document.documentElement.getAttribute(LANG_ATTRIBUTE) ?? this.currentLocale);
  }
}

/**
 * Gets the i18nManager instance.
 */
export function getI18nManager(): I18nManager {
  return I18nManager.instance;
}

// Formatter factories stay outside the manager class, so bundlers drop the formatters a consumer never gets.
function createLocaleFormatter(locale: string): LocaleFormatter {
  return new LocaleFormatter(locale);
}

function createDateFormatter(locale: string): DateFormatter {
  return new DateFormatter(locale, getI18nManager().localeFormatter);
}

function createNumberFormatter(locale: string): NumberFormatter {
  return new NumberFormatter(locale);
}

function createDisplayNamesFormatter(locale: string): DisplayNamesFormatter {
  return new DisplayNamesFormatter(locale, getDateFormatter());
}

export function getDateFormatter(): DateFormatter {
  return getI18nManager().getFormatter(createDateFormatter);
}

export function getNumberFormatter(): NumberFormatter {
  return getI18nManager().getFormatter(createNumberFormatter);
}

export function getDisplayNamesFormatter(): DisplayNamesFormatter {
  return getI18nManager().getFormatter(createDisplayNamesFormatter);
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
