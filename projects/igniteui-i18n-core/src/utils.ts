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
export function mergeOptions<T extends Intl.NumberFormatOptions | Intl.DateTimeFormatOptions>(
    target: T,
    source: T = {} as T
) {
    const result = Object.assign({}, target);
    const sourceKeys = Object.keys(source).map((key) => key as keyof T);
    for (const key of sourceKeys) {
        if (source[key] !== null && source[key] !== undefined) {
            result[key] = source[key];
        }
    }
    return result;
}
