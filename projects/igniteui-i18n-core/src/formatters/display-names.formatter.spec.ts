import { describe, it, expect } from 'vitest';
import { DisplayNamesFormatter } from './display-names.formatter';
import { LocaleFormatter } from './locale.formatter';
import { DateFormatter } from './date.formatter';

describe('display names formatting', () => {
    const localeFormatter = new LocaleFormatter('en');
    const dateFormatter = new DateFormatter('en', localeFormatter);
    const displayNamesFormatter = new DisplayNamesFormatter('en', dateFormatter);

    it('should return correct week labels per locale', () => {
        //narrow
        expect(displayNamesFormatter.getWeekLabel('en', { style: 'narrow' })).equal('W');
        expect(displayNamesFormatter.getWeekLabel('bg', { style: 'narrow' })).equal('с');
        expect(displayNamesFormatter.getWeekLabel('ja', { style: 'narrow' })).equal('週');
        expect(displayNamesFormatter.getWeekLabel('es', { style: 'narrow' })).equal('S');
        expect(displayNamesFormatter.getWeekLabel('ar', { style: 'narrow' })).equal('ا');

        //short
        expect(displayNamesFormatter.getWeekLabel('en', { style: 'short' })).equal('Wk.');
        expect(displayNamesFormatter.getWeekLabel('bg', { style: 'short' })).equal('седм.');
        expect(displayNamesFormatter.getWeekLabel('ja', { style: 'short' })).equal('週');
        expect(displayNamesFormatter.getWeekLabel('es', { style: 'short' })).equal('Sem.');
        expect(displayNamesFormatter.getWeekLabel('ar', { style: 'short' })).equal('الأسبوع');

        //long
        expect(displayNamesFormatter.getWeekLabel('en', { style: 'long' })).equal('Week');
        expect(displayNamesFormatter.getWeekLabel('bg', { style: 'long' })).equal('седмица');
        expect(displayNamesFormatter.getWeekLabel('ja', { style: 'long' })).equal('週');
        expect(displayNamesFormatter.getWeekLabel('es', { style: 'long' })).equal('Semana');
        expect(displayNamesFormatter.getWeekLabel('ar', { style: 'long' })).equal('الأسبوع');
    });
});
