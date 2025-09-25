/** biome-ignore-all lint/correctness/noUnusedVariables: false negative */
/**
 * @internal
 * Removes 'optional' attributes making properties required
 */
type MakeRequired<T> = { [K in keyof T]-?: T[K] };
