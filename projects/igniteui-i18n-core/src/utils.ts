import type { PrefixedResourceStrings } from './i18n-manager.interfaces.js';

export const GRID_PREFIX = 'grid_';
export const IGX_PREFIX = 'igx_';

/** Return if this is ran in browser environment or at least simulated one. */
export function isBrowser() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/** Group each valid symbol for custom format that is replaced later on.
 * See `formatDateCustomFormat` for supported values.
 * Any word that doesn't contains the listed letters are kept as is - (?:[^BEGHLMOSWYZabcdhmswyz']+)
 * Any symbol like ', ^, * as well treat as a word - (?:'(?:[^']|'')*')
 * Group any letter listed here and allow it to be repeated from a to b times (`{a, b}`) - (?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|K{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4})
 *  ^ These are the ones supported by `formatDateCustomFormat`
 * Any white space ignore and combine into groups if more - ([\s\S]*)
 */
export const customFormatRegex =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|K{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;

export function generateLocaleKey(
    locale: string,
    formatterOptions?: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions
) {
    // Format the options because JSON.stringify return different results for same object, but with different order of props.
    // Ex: { currency: "BGN", compactDisplay: "long" } and { compactDisplay: "long", currency: "BGN" } returns different strings.
    return (
        locale +
        '-' +
        (formatterOptions
            ? Object.entries(formatterOptions)
                  .map(([k, v]) => `${k}:${v}`)
                  .sort()
                  .join('-')
            : 'default')
    );
}

/**
 * Merge options. A bit more complex than Object.assign, due to setting an option to `undefined` should be possible and lead to default behavior, which if set from source, overrides target.
 * @param target Object whose values act as a base for the merged object
 * @param source Object that is merged onto the target object values.
 * @returns Merged options.
 */
export function mergeOptions<
    T extends Intl.NumberFormatOptions | Intl.DateTimeFormatOptions | Intl.DisplayNamesOptions
>(target: T, source: T = {} as T) {
    const result = Object.assign({}, target);
    const sourceKeys = Object.keys(source).map((key) => key as keyof T);
    for (const key of sourceKeys) {
        if (source[key] != null) {
            result[key] = source[key];
        }
    }
    return result;
}

/**
 * Extend resources with formatting object keys base on provided format
 * @param format Format for the extended objects keys in the style of 'grid_{0}_extended_key'. Only single replace position is valid.
 * @param baseObject Base object, which extends the other provided objects.
 * @param extendedObjects Object that the base one extends.
 * @returns Combined and formatted object containing properties from base and extended objects.
 */
export function extendResources<T, E>(baseObject: T, ...extendedObjects: E[]): T & E {
    const result = Object.assign({}, baseObject, ...extendedObjects);
    return result;
}

export function prefixResource<T, P extends string>(prefix: P, inObject: T): PrefixedResourceStrings<T, P> {
    const result: any = {};
    const memberNames = Object.getOwnPropertyNames(inObject);
    for (const memberName of memberNames) {
        result[prefix + memberName] = inObject[memberName as keyof T];
    }
    return result;
}
