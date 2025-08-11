/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { beforeEach, describe, it, expect } from 'vitest';
import {
    igI18nManager,
    getI18nManager,
    registerI18n,
    setCurrentI18n,
    getCurrentI18n,
    getCurrentResourceStrings,
} from './i18n-manager';
import { ActionStripResourceStringsEN } from './i18n/EN/action-strip-resources';
import { ActionStripResourceStringsBG } from 'igniteui-i18n-resources';
import type { IResourceChangeEventArgs } from './utils';

export const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
const basicDate = new Date("12/3/2014");
const dateTime = new Date("2014-12-03T03:24:00");
const dateTime2 = new Date("2014-03-21T06:24:13");
const dateTimeHourFull = new Date("2014-03-21T16:08:09");

describe('i18n tests', () => {
    let manager: igI18nManager;
    beforeEach(() => {
        // Create separate manage for each tests, so it's state is reset for each test.
        manager = new igI18nManager();
    });

    describe('public api', () => {
        it('should initialize correct instance of manager', () => {
            const publicManager = getI18nManager();
            expect(publicManager?.currentLocale).equal('en-US');
        })

        it('should set correct locale', () => {
            expect(getCurrentI18n()).toEqual('en-US');

            setCurrentI18n('bg');
            expect(getCurrentI18n()).toEqual('bg');
        })

        it('should register and return correct resource strings', () => {
            registerI18n(ActionStripResourceStringsEN, 'en-US');

            const resources = getCurrentResourceStrings();
            expect(Object.keys(resources).length).equals(1);
            expect(resources.action_strip_button_more_title).equals('More');
        })
    })

    describe('base', () => {
        it('should correctly detect lang attribute set', async () => {
            document.documentElement.setAttribute('lang', 'bg');
            await wait();

            expect(manager.currentLocale).toEqual('bg');
            // Cleanup dom, since its the same for all tests
            document.documentElement.removeAttribute('lang');
        })

        it('should change current locale correctly', () => {
            expect(manager.currentLocale).equal('en-US');

            manager.setCurrentI18n('bg');
            expect(manager.currentLocale).equal('bg');
        })

        it('should register new resource string to default locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.defaultLocale);

            const resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equals("en-US");
            expect(Object.keys(resources).length).equals(1);
            expect(resources.action_strip_button_more_title).equals('More');
        })

        it('should override old resource string to default locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            manager.registerI18n(ActionStripResourceStringsBG, manager.currentLocale);

            const resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        })

        it('should register for current locale if not provided and the current locale is changed', () => {
            manager.setCurrentI18n('bg');
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);

            let resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('bg');
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('More');

            manager.setCurrentI18n('en-US');
            resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(0);
        })

        it('should register for specified locale provided and the current locale is changed', () => {
            manager.registerI18n(ActionStripResourceStringsBG, 'bg');

            let resources = manager.getCurrentResourceStrings();
            expect(manager.currentLocale).equal('en-US');
            expect(Object.keys(resources).length).equal(0);

            manager.setCurrentI18n('bg');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        })

        it('should return default resource if current one are not available', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.defaultLocale);
            manager.setCurrentI18n('bg');

            let resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('More');

            manager.registerI18n(ActionStripResourceStringsBG, 'bg');
            resources = manager.getCurrentResourceStrings();
            expect(Object.keys(resources).length).equal(1);
            expect(resources.action_strip_button_more_title).equal('Още');
        })

        it('should create dates from ISO string correctly', () => {
            // Initially in UTC timezone by default
            let dateString = '2025-01-01';
            let expectedUTCDate = new Date(dateString);
            let expectedConverted = manager.createDateFromValue(dateString);

            // The timezone of the machine. For UTC+0 would be 0
            const timeZoneOffsetMin = expectedUTCDate.getTimezoneOffset() * 1000 * 60;
            // Value for zero hour check. If the timezone offset is 0, switch it to something else so it still does not equal
            const zeroHourExUTC = timeZoneOffsetMin === 0 ? 1 : 0;

            // Result should be in local timezone but it's not, so there's difference
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(timeZoneOffsetMin);

            dateString = '2025-01-01T00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01-01T00:00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01-01T00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            // Result should be in local timezone but it's not, so there's difference
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(timeZoneOffsetMin);

            dateString = '2025-01T00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01T00:00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01T00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);
            
            dateString = '2025-01T00:00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            // Initially in local timezone
            dateString = '2025-01-01T00:00:00';
            let expectedLocalTime = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01-01T00:00:00.000';
            expectedLocalTime = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01T00:00:00';
            expectedLocalTime = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01T00:00:00.000';
            expectedLocalTime = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(manager.createDateFromValue(dateString).getTime() - expectedLocalTime.getTime()).equal(0);
        })

        it('should create dates from other regular valid string formats', () => {
            let dateString = 'January 1, 2025';
            let expectedUTCDate = new Date(dateString);
            let expectedConverted = manager.createDateFromValue(dateString);

            // Result should be in local timezone but it's not, so there's difference
            expect(expectedUTCDate.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = 'January 1, 2025 00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            // The timezone of the machine. For UTC+0 would be 0
            const timeZoneOffsetMin = expectedUTCDate.getTimezoneOffset() * 1000 * 60;
            // Value for zero hour check. If the timezone offset is 0, switch it to something else so it still does not equal
            const zeroHourExUTC = timeZoneOffsetMin === 0 ? 1 : 0;

            dateString = 'January 1, 2025 00:00 UTC';
            expectedUTCDate = new Date(dateString);
            expectedConverted = manager.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);
        })

        it('generateLocaleKey should produce same key for objects with same values, regardless or order of keys', () => {
            const optionsA = {
                currency: "BGN",
                compactDisplay: "long"
            } as Intl.NumberFormatOptions;
            const optionsB = {
                compactDisplay: "long",
                currency: "BGN"
            } as Intl.NumberFormatOptions;
            const keyA = (manager as any).generateLocaleKey('bg', optionsA);
            const keyB = (manager as any).generateLocaleKey('bg', optionsB);
            expect(keyA).equal(keyB);
        })
    })

    describe('onResourceChange', () => {
        let onResourceChangeEvent: {
            numTriggered: number,
            args: IResourceChangeEventArgs[]
        };
        beforeEach(() => {
            onResourceChangeEvent = {
                numTriggered: 0,
                args: []
            };
            manager.addEventListener("onResourceChange", (args: CustomEvent<IResourceChangeEventArgs>) => {
                onResourceChangeEvent.numTriggered++;
                onResourceChangeEvent.args.unshift(args.detail);
            });
        });

        it('should trigger onResourceChange when current locale is changed', () => {
            manager.setCurrentI18n('bg');
            manager.setCurrentI18n('en-US');

            expect(onResourceChangeEvent.numTriggered).equal(2);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('bg');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        })

        it('should not trigger onResourceChange when current locale is changed to the same value', () => {
            manager.setCurrentI18n('en-US');

            expect(onResourceChangeEvent.numTriggered).equal(0);
        })

        it('should trigger onResourceChange when new resource strings are registered for the current locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            expect(onResourceChangeEvent.numTriggered).equal(1);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('en-US');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        })

        it('should not trigger onResourceChange when new resource strings are registered for the current locale, but all strings are the same', () => {
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);
            manager.registerI18n(ActionStripResourceStringsEN, manager.currentLocale);

            expect(onResourceChangeEvent.numTriggered).equal(1);
            expect(onResourceChangeEvent.args[0].oldLocale).equal('en-US');
            expect(onResourceChangeEvent.args[0].newLocale).equal('en-US');
        })

        it('shouldn not trigger onResourceChange when new resource strings are registered for different locale', () => {
            manager.registerI18n(ActionStripResourceStringsEN, 'bg');

            expect(onResourceChangeEvent.numTriggered).equal(0);
        })
    })

    describe('number formatting', () => {
        it('should format regular numbers with provided manual locale', () => {
            expect(manager.formatNumber(12345, 'en')).equal('12,345');
            expect(manager.formatNumber(12345, 'de')).equal('12.345');
            expect(manager.formatNumber(12345, 'bg')).equal('12 345');
            expect(manager.formatNumber(12345, 'ja')).equal('12,345');
            expect(manager.formatNumber(12345, 'es')).equal('12.345');
            expect(manager.formatNumber(12345, 'pl')).equal('12 345');
        })

        it('should format regular numbers when locale is changed through api', () => {
            expect(manager.formatNumber(12345, 'en')).equal('12,345');

            manager.setCurrentI18n('de');
            expect(manager.formatNumber(12345)).equal('12.345');

            manager.setCurrentI18n('bg');
            expect(manager.formatNumber(12345)).equal('12 345');

            manager.setCurrentI18n('ja');
            expect(manager.formatNumber(12345)).equal('12,345');

            manager.setCurrentI18n('es');
            expect(manager.formatNumber(12345)).equal('12.345');

            manager.setCurrentI18n('pl');
            expect(manager.formatNumber(12345)).equal('12 345');
        })

        it('should format numbers with provided currency settings for the same currency', () => {
            const currencyOption: Intl.NumberFormatOptions = {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0
            };

            expect(manager.formatNumber(12345, 'en', currencyOption)).equal('€12,345');
            expect(manager.formatNumber(12345, 'de', currencyOption)).equal('12.345 €');
            expect(manager.formatNumber(12345, 'bg', currencyOption)).equal('12 345 €');
            expect(manager.formatNumber(12345, 'ja', currencyOption)).equal('€12,345');
            expect(manager.formatNumber(12345, 'es', currencyOption)).equal('12.345 €');
            expect(manager.formatNumber(12345, 'pl', currencyOption)).equal('12 345 €');
        })

        it('should format numbers with provided currency settings for different currencies', () => {
            expect(manager.formatNumber(12345, 'en-GB', { style: "currency", currency: "GBP" })).equal('£12,345.00');
            expect(manager.formatNumber(12345, 'bg', { style: "currency", currency: "BGN" })).equal('12 345,00 лв.');
            expect(manager.formatNumber(12345, 'ja', { style: "currency", currency: "JPY" })).equal('￥12,345');
            expect(manager.formatNumber(12345, 'es', { style: "currency", currency: "EUR" })).equal('12.345,00 €');
            expect(manager.formatNumber(12345, 'pl', { style: "currency", currency: "PLN" })).equal('12 345,00 zł');
        })

        it('should get correct currency symbol position', () => {
            expect(manager.getCurrencyPosition('en')).equal(0);
            expect(manager.getCurrencyPosition('bg')).equal(2);
            expect(manager.getCurrencyPosition('ja')).equal(0);
            expect(manager.getCurrencyPosition('es')).equal(2);
            expect(manager.getCurrencyPosition('pl')).equal(2);
        })

        it('should get correct currency symbol when provided currency name', () => {
            expect(manager.getCurrencySymbol("GBP", 'en', 'symbol')).equal('£');
            expect(manager.getCurrencySymbol("BGN", 'bg', 'symbol')).equal('лв.');
            expect(manager.getCurrencySymbol("JPY", 'ja', 'symbol')).equal('￥');
            expect(manager.getCurrencySymbol("EUR", 'es', 'symbol')).equal('€');
            expect(manager.getCurrencySymbol('PLN', 'pl', 'symbol')).equal('zł');

            expect(manager.getCurrencySymbol("GBP", 'en', 'name')).equal('British pounds');
            expect(manager.getCurrencySymbol("BGN", 'bg', 'name')).equal('български лева');
            expect(manager.getCurrencySymbol("JPY", 'ja', 'name')).equal('円');
            expect(manager.getCurrencySymbol("EUR", 'es', 'name')).equal('euros');
            expect(manager.getCurrencySymbol('PLN', 'pl', 'name')).equal('złotych polskich');
        })
    })

    describe('date formatting', () => {
        it('should get correct first date of the week per locale', () => {
            // Note: Using jsdom this will not pass
            expect(manager.getFirstDayOfWeek('en')).equal(7);
            expect(manager.getFirstDayOfWeek('bg')).equal(1);
            expect(manager.getFirstDayOfWeek('ja')).equal(7);
            expect(manager.getFirstDayOfWeek('es')).equal(1);
            expect(manager.getFirstDayOfWeek('ar')).equal(6);
        })

        it('should format basic date with default options', () => {
            expect(manager.formatDateTime(basicDate, 'en')).equal("12/3/2014");
            expect(manager.formatDateTime(basicDate, 'bg')).equal("3.12.2014 г.");
            expect(manager.formatDateTime(basicDate, 'ja')).equal("2014/12/3");
            expect(manager.formatDateTime(basicDate, 'es')).equal("3/12/2014");
            expect(manager.formatDateTime(basicDate, 'ar')).equal("3‏/12‏/2014"); // Note: Using jsdom this will not pass

            expect(manager.formatDateTime(dateTime, 'en')).equal("12/3/2014");
            expect(manager.formatDateTime(dateTime, 'bg')).equal("3.12.2014 г.");
            expect(manager.formatDateTime(dateTime, 'ja')).equal("2014/12/3");
            expect(manager.formatDateTime(dateTime, 'es')).equal("3/12/2014");
            expect(manager.formatDateTime(dateTime, 'ar')).equal("3‏/12‏/2014"); // Note: Using jsdom this will not pass
        })

        it('should format basic date time to long date per locale', () => {
            const options: Intl.DateTimeFormatOptions = {
                dateStyle: 'long'
            };
            expect(manager.formatDateTime(dateTime, 'en', options)).equal("December 3, 2014");
            expect(manager.formatDateTime(dateTime, 'bg', options)).equal("3 декември 2014 г.");
            expect(manager.formatDateTime(dateTime, 'ja', options)).equal("2014年12月3日");
            expect(manager.formatDateTime(dateTime, 'es', options)).equal("3 de diciembre de 2014");
            expect(manager.formatDateTime(dateTime, 'ar', options)).equal("3 ديسمبر 2014");
        })

        it('should format basic date time to short date time', () => {
            const options: Intl.DateTimeFormatOptions = {
                timeStyle: "short",
                dateStyle: "short",
            };
            expect(manager.formatDateTime(dateTime, 'en', options)).equal("12/3/14, 3:24 AM");
            expect(manager.formatDateTime(dateTime, 'bg', options)).equal("3.12.14 г., 3:24");
            expect(manager.formatDateTime(dateTime, 'ja', options)).equal("2014/12/03 3:24");
            expect(manager.formatDateTime(dateTime, 'es', options)).equal("3/12/14, 3:24");
            expect(manager.formatDateTime(dateTime, 'ar', options)).equal("3‏/12‏/2014 3:24 ص");
        })

        it('should format basic date to short date time parts', () => {
            const options: Intl.DateTimeFormatOptions = {
                dateStyle: 'long'
            };
            expect(manager.formatDateTimeToParts(dateTime, 'en', options)).toMatchObject([
                { "type": "month", "value": "December", },
                { "type": "literal", "value": " ", },
                { "type": "day", "value": "3", },
                { "type": "literal", "value": ", ", },
                { "type": "year", "value": "2014", }
            ]);
            expect(manager.formatDateTimeToParts(dateTime, 'bg', options)).toMatchObject([
                { "type": "day", "value": "3", },
                { "type": "literal", "value": " ", },
                { "type": "month", "value": "декември", },
                { "type": "literal", "value": " ", },
                { "type": "year", "value": "2014", },
                { "type": "literal", "value": " г.", },
            ]);
            expect(manager.formatDateTimeToParts(dateTime, 'ja', options)).toMatchObject([
                { "type": "year", "value": "2014", },
                { "type": "literal", "value": "年", },
                { "type": "month", "value": "12", },
                { "type": "literal", "value": "月", },
                { "type": "day", "value": "3", },
                { "type": "literal", "value": "日", },
            ]);
            expect(manager.formatDateTimeToParts(dateTime, 'es', options)).toMatchObject([
                { "type": "day", "value": "3", },
                { "type": "literal", "value": " de ", },
                { "type": "month", "value": "diciembre", },
                { "type": "literal", "value": " de ", },
                { "type": "year", "value": "2014", },
            ]);
            expect(manager.formatDateTimeToParts(dateTime, 'ar', options)).toMatchObject([
                { "type": "day", "value": "3", },
                { "type": "literal", "value": " ", },
                { "type": "month", "value": "ديسمبر", },
                { "type": "literal", "value": " ", },
                { "type": "year", "value": "2014", },
            ]);
        })
    })

    describe('custom date formatting', () => {
        it('should return the format for unknown one', () => {
            expect(manager.formatDateCustomFormat(dateTime, 'en', 'ttt')).equal("ttt");
        })

        it('should format era', () => {
            let format = "GG";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("AD");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("сл.Хр.");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("西暦");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("d. C.");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("م");

            format = "GGGG";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("Anno Domini");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("след Христа");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("西暦");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("después de Cristo");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ميلادي");
            
            format = "GGGGG";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("A");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("сл.Хр.");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("AD");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("d. C.");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("م");
        })

        it('should format year', () => {
            let format = "yy";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("14");

            format = "yyyy";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("2014");
        })

        it('should format iso year', () => {
            let format = "YY";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("14");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("14");

            format = "YYYY";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("2014");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("2014");
        })

        it('should format month', () => {
            let format = "M";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("3");

            format = "MM";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("03");

            format = "MMM";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("Mar");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("mar");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("مارس");

            format = "MMMM";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("March");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("март");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("marzo");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("مارس");

            format = "MMMMM";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("M");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("M");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("م");
        })

        it('should format day', () => {
            let format = "d";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("3");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("3");

            format = "dd";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("03");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("03");
        })

        it('should format week day', () => {
            let format = "c";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("Wed");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("ср");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("水");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("mié");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("الأربعاء");

            format = "cc";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("Wed");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("ср");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("水");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("mié");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("الأربعاء");

            format = "cccc";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("Wednesday");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("сряда");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("水曜日");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("miércoles");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("الأربعاء");

            format = "ccccc";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("W");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("с");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("水");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("X");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ر");
        })

        it('should format period of the day', () => {
            let format = "a";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ص");

            format = "aaaa";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("AM");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ص");

            format = "aaaaa";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("A");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("A");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("A");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("A");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ص");
        })

        it('should format extended period of the day', () => {
            let format = "b";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("at ni.");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("пр. но.");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("夜中");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("de la ma.");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("فج.");

            format = "bbbb";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("at night");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("през нощта");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("夜中");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("de la madrugada");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("في الصباح");

            format = "bbbbb";
            expect(manager.formatDateCustomFormat(dateTime, 'en', format)).equal("an");
            expect(manager.formatDateCustomFormat(dateTime, 'bg', format)).equal("пн");
            expect(manager.formatDateCustomFormat(dateTime, 'ja', format)).equal("夜");
            expect(manager.formatDateCustomFormat(dateTime, 'es', format)).equal("dlm");
            expect(manager.formatDateCustomFormat(dateTime, 'ar', format)).equal("ف");
        })

        it('should format hour in 0-12 time format', () => {
            let format = "h";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("4");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("4");
            //expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("4");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("4");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("4");

            format = "hh";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("04");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("04");
            //expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("04");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("04");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("04");
        })

        it('should format hour in 0-24 time format', () => {
            let format = "H";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en-US', format)).equal("4");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en-GB', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("4");

            format = "HH";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en-US', format)).equal("04");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en-GB', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("16");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("04");
        })

        it('should format minutes', () => {
            let format = "m";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("24");

            format = "mm";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("24");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("24");

            format = "m";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("8");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("8");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("8");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("8");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("8");

            format = "mm";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("08");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("08");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("08");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("08");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("08");
        })

        it('should format seconds', () => {
            let format = "s";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("13");

            format = "ss";
            expect(manager.formatDateCustomFormat(dateTime2, 'en', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'bg', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'ja', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'es', format)).equal("13");
            expect(manager.formatDateCustomFormat(dateTime2, 'ar', format)).equal("13");

            format = "s";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("9");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("9");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("9");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("9");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("9");

            format = "ss";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("09");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("09");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("09");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("09");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("09");
        })

        
        it('should format fractional seconds', () => {
            let format = "S";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("0");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("0");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("0");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("0");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("0");

            format = "SS";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("00");

            format = "SSS";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal("000");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal("000");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("000");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal("000");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal("000");
        })

        it('should format short format timezone', () => {
            let format = "z";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format, "Etc/GMT+1")).equal("GMT-1");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format, "Etc/GMT+1")).equal("Гринуич-1");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format, "Etc/GMT+1")).equal("GMT-1");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format, "Etc/GMT+1")).equal("GMT-1");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format, "Etc/GMT+1")).equal("غرينتش-1");

            format = "zzzz";
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', format, "Etc/GMT+1")).equal("GMT-01:00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'bg', format, "Etc/GMT+1")).equal("Гринуич-01:00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ja', format, "Etc/GMT+1")).equal("GMT-01:00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'es', format, "Etc/GMT+1")).equal("GMT-01:00");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'ar', format, "Etc/GMT+1")).equal("غرينتش-01:00");
        })

        it('should format combination of single cases', () => {
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', "'ex:' HH:mm bbb GGG")).equal("'ex:' 04:08 in th. af. AD");
        })

        it('should log warning regarding week of year format not supported', () => {
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', "w",)).equal("w");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', "ww",)).equal("ww");
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', "W",)).equal("W");
        })

        it('should return empty string on empty format', () => {
            expect(manager.formatDateCustomFormat(dateTimeHourFull, 'en', "")).equal("");
        })
    })
})