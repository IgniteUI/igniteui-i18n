import { describe, expect, it } from "vitest";
import { generateLocaleKey } from "./utils";

describe('util', () => {
    it('generateLocaleKey should produce same key for objects with same values, regardless or order of keys', () => {
        const optionsA = {
            currency: "BGN",
            compactDisplay: "long"
        } as Intl.NumberFormatOptions;
        const optionsB = {
            compactDisplay: "long",
            currency: "BGN"
        } as Intl.NumberFormatOptions;
        const keyA = generateLocaleKey('bg', optionsA);
        const keyB = generateLocaleKey('bg', optionsB);
        expect(keyA).equal(keyB);
    })
})