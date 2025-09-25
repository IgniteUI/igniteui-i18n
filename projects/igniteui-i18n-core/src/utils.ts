export const IntlDateTimeStyleValues = {
    full: 'Full',
    long: 'Long',
    medium: 'Medium',
    short: 'Short'
};

export const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

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
                  .sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))
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
        if (source[key] !== null && source[key] !== undefined) {
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
export function extendResources<T, E>(format: string, baseObject: T, ...extendedObjects: E[]) {
    const result: Record<string, string> = Object.assign({}, baseObject);
    for (const extendedObject of extendedObjects) {
        const objKeys = Object.keys(extendedObject as object);
        for (const key of objKeys) {
            const newKey = format.replace('{0}', key);
            result[newKey] = extendedObject[key as keyof E] as string;
        }
    }

    return result;
}
