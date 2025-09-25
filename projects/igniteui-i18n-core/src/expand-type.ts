/* eslint-disable @typescript-eslint/no-unused-vars */
/** biome-ignore-all lint/correctness/noUnusedVariables: false negative */
/**
 * @internal
 * Removes 'optional' attributes making properties required
 */
type MakeRequired<T> = { [K in keyof T]-?: string };
