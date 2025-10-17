import type { IResourceStrings } from './i18n/interfaces/resources.interface.js';

/** i18n manager ResourceChange event typings */
export interface IResourceChangeEventArgs {
  oldLocale: string;
  newLocale: string;
}

export interface ICustomFormatOptions {
  forceLeadingZero?: boolean;
  locale?: string;
  timezone?: string;
}

export interface I18nManagerEventMap {
  onResourceChange: CustomEvent<IResourceChangeEventArgs>;
}

type CustomEventListener<T> = (evt: T) => void;
export interface CustomEventListenerObject<T> {
  handleEvent(object: T): void;
}
type CustomEventListenerOrEventListenerObject<T> = CustomEventListener<T> | CustomEventListenerObject<T>;

interface IManagerEventTarget extends EventTarget {
  addEventListener<K extends keyof I18nManagerEventMap>(
    type: K,
    listener: CustomEventListenerOrEventListenerObject<I18nManagerEventMap[K]>,
    options?: boolean | EventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener<K extends keyof I18nManagerEventMap>(
    type: K,
    listener: CustomEventListenerOrEventListenerObject<I18nManagerEventMap[K]>,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  dispatchEvent<K extends keyof I18nManagerEventMap>(event: I18nManagerEventMap[K]): boolean;
}

export const I18nManagerEventTarget = EventTarget as {
  prototype: IManagerEventTarget;
  new (): IManagerEventTarget;
};

export interface IIgI18nManager extends IManagerEventTarget {
  defaultLocale: string;
  currentLocale: string;
}

export interface IResourceCategories {
  /** Default resource or a key to a script or a region in that order if available. */
  default: IResourceStrings | string;
  scripts: Map<string, IResourceStrings>;
  regions: Map<string, IResourceStrings>;
}

/** Formatter types implemented */
export const Formatter = {
  Date: 'Date',
  DisplayNames: 'DisplayNames',
  Locale: 'Locale',
  Number: 'Number',
} as const;

export type Formatter = keyof typeof Formatter;

/** Generic type for any Intl formatter that can be instantiated */
export type IntlFormatter<T, O> =
  | (new (
      locale: string | Intl.Locale,
      options?: O
    ) => T)
  | (new (
      locale: Intl.LocalesArgument,
      options: O
    ) => T);

/** Generic type for currently implemented formatter interfaces */
export type I18nFormatter = Intl.DateTimeFormat | Intl.NumberFormat | Intl.Locale | Intl.DisplayNames;

/** Generic type for currently implemented formatter interfaces */
export type I18nFormatterOptions = Intl.DateTimeFormatOptions | Intl.NumberFormatOptions | Intl.LocaleOptions;

export type PrefixedResourceStrings<T, Q extends string> = {
  [P in keyof T as P extends string ? `${Q}${P}` : never]?: string;
};
