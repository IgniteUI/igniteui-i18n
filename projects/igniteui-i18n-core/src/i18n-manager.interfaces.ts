// Custom event typings
export interface IResourceChangeEventArgs {
    oldLocale: string;
    newLocale: string;
}

interface I18nManagerEventMap {
    onResourceChange: CustomEvent<IResourceChangeEventArgs>;
}

type CustomEventListener<T> = (evt: T) => void;
interface CustomEventListenerObject<T> {
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

export enum Formatter {
    Date = 0,
    DisplayNames = 1,
    Locale = 2,
    Number = 3
}
