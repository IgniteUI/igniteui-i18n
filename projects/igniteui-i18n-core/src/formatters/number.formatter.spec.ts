import { describe, it, expect } from 'vitest';
import { NumberFormatter } from './number.formatter';

describe('number formatting', () => {
    const numberFormatter = new NumberFormatter('en');

    it('should format regular numbers with provided manual locale', () => {
        expect(numberFormatter.formatNumber(12345, 'en')).equal('12,345');
        expect(numberFormatter.formatNumber(12345, 'de')).equal('12.345');
        expect(numberFormatter.formatNumber(12345, 'bg')).equal('12 345');
        expect(numberFormatter.formatNumber(12345, 'ja')).equal('12,345');
        expect(numberFormatter.formatNumber(12345, 'es')).equal('12.345');
        expect(numberFormatter.formatNumber(12345, 'pl')).equal('12 345');
    });

    it('should format regular numbers when locale is changed through api', () => {
        expect(numberFormatter.formatNumber(12345, 'en')).equal('12,345');

        numberFormatter.onLocaleChange('de');
        expect(numberFormatter.formatNumber(12345)).equal('12.345');

        numberFormatter.onLocaleChange('bg');
        expect(numberFormatter.formatNumber(12345)).equal('12 345');

        numberFormatter.onLocaleChange('ja');
        expect(numberFormatter.formatNumber(12345)).equal('12,345');

        numberFormatter.onLocaleChange('es');
        expect(numberFormatter.formatNumber(12345)).equal('12.345');

        numberFormatter.onLocaleChange('pl');
        expect(numberFormatter.formatNumber(12345)).equal('12 345');
    });

    it('should format numbers with provided currency settings for the same currency', () => {
        const currencyOption: Intl.NumberFormatOptions = {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0
        };

        expect(numberFormatter.formatNumber(12345, 'en', currencyOption)).equal('€12,345');
        expect(numberFormatter.formatNumber(12345, 'de', currencyOption)).equal('12.345 €');
        expect(numberFormatter.formatNumber(12345, 'bg', currencyOption)).equal('12 345 €');
        expect(numberFormatter.formatNumber(12345, 'ja', currencyOption)).equal('€12,345');
        expect(numberFormatter.formatNumber(12345, 'es', currencyOption)).equal('12.345 €');
        expect(numberFormatter.formatNumber(12345, 'pl', currencyOption)).equal('12 345 €');
    });

    it('should format numbers with provided currency settings for different currencies', () => {
        expect(
            numberFormatter.formatNumber(12345, 'en-GB', {
                style: 'currency',
                currency: 'GBP'
            })
        ).equal('£12,345.00');
        expect(
            numberFormatter.formatNumber(12345, 'bg', {
                style: 'currency',
                currency: 'BGN'
            })
        ).equal('12 345,00 лв.');
        expect(
            numberFormatter.formatNumber(12345, 'ja', {
                style: 'currency',
                currency: 'JPY'
            })
        ).equal('￥12,345');
        expect(
            numberFormatter.formatNumber(12345, 'es', {
                style: 'currency',
                currency: 'EUR'
            })
        ).equal('12.345,00 €');
        expect(
            numberFormatter.formatNumber(12345, 'pl', {
                style: 'currency',
                currency: 'PLN'
            })
        ).equal('12 345,00 zł');
    });

    it('should get correct currency symbol position', () => {
        expect(numberFormatter.getCurrencyPosition('en')).equal(0);
        expect(numberFormatter.getCurrencyPosition('bg')).equal(2);
        expect(numberFormatter.getCurrencyPosition('ja')).equal(0);
        expect(numberFormatter.getCurrencyPosition('es')).equal(2);
        expect(numberFormatter.getCurrencyPosition('pl')).equal(2);
    });

    it('should get correct currency symbol when provided currency name', () => {
        expect(numberFormatter.getCurrencySymbol('GBP', 'en', 'symbol')).equal('£');
        expect(numberFormatter.getCurrencySymbol('BGN', 'bg', 'symbol')).equal('лв.');
        expect(numberFormatter.getCurrencySymbol('JPY', 'ja', 'symbol')).equal('￥');
        expect(numberFormatter.getCurrencySymbol('EUR', 'es', 'symbol')).equal('€');
        expect(numberFormatter.getCurrencySymbol('PLN', 'pl', 'symbol')).equal('zł');

        expect(numberFormatter.getCurrencySymbol('GBP', 'en', 'name')).equal('British pounds');
        expect(numberFormatter.getCurrencySymbol('BGN', 'bg', 'name')).equal('български лева');
        expect(numberFormatter.getCurrencySymbol('JPY', 'ja', 'name')).equal('円');
        expect(numberFormatter.getCurrencySymbol('EUR', 'es', 'name')).equal('euros');
        expect(numberFormatter.getCurrencySymbol('PLN', 'pl', 'name')).equal('złotych polskich');
    });
});
