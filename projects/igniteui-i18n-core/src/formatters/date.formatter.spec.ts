import { describe, expect, it } from 'vitest';
import { DateFormatter } from './date.formatter.js';
import { LocaleFormatter } from './locale.formatter.js';

describe('i18n tests', () => {
    const basicDate = new Date('12/3/2014');
    const dateTime = new Date('2014-12-03T03:24:00');
    const dateTime2 = new Date('2014-03-21T06:24:13');
    const dateTimeHourFull = new Date('2014-03-21T16:08:09');
    const localeFormatter = new LocaleFormatter('en');
    const dateFormatter = new DateFormatter('en', localeFormatter);

    describe('date formatting', () => {
        it('should get correct first date of the week per locale', () => {
            // Note: Using jsdom this will not pass
            expect(dateFormatter.getFirstDayOfWeek('en')).equal(7);
            expect(dateFormatter.getFirstDayOfWeek('bg')).equal(1);
            expect(dateFormatter.getFirstDayOfWeek('ja')).equal(7);
            expect(dateFormatter.getFirstDayOfWeek('es')).equal(1);
            expect(dateFormatter.getFirstDayOfWeek('ar')).equal(6);
        });

        it('should format basic date with default options', () => {
            expect(dateFormatter.formatDateTime(basicDate, 'en')).equal('12/3/2014');
            expect(dateFormatter.formatDateTime(basicDate, 'bg')).equal('3.12.2014 г.');
            expect(dateFormatter.formatDateTime(basicDate, 'ja')).equal('2014/12/3');
            expect(dateFormatter.formatDateTime(basicDate, 'es')).equal('3/12/2014');
            expect(dateFormatter.formatDateTime(basicDate, 'ar')).equal('3‏/12‏/2014'); // Note: Using jsdom this will not pass

            expect(dateFormatter.formatDateTime(dateTime, 'en')).equal('12/3/2014');
            expect(dateFormatter.formatDateTime(dateTime, 'bg')).equal('3.12.2014 г.');
            expect(dateFormatter.formatDateTime(dateTime, 'ja')).equal('2014/12/3');
            expect(dateFormatter.formatDateTime(dateTime, 'es')).equal('3/12/2014');
            expect(dateFormatter.formatDateTime(dateTime, 'ar')).equal('3‏/12‏/2014'); // Note: Using jsdom this will not pass
        });

        it('should format basic date time to long date per locale', () => {
            const options: Intl.DateTimeFormatOptions = {
                dateStyle: 'long'
            };
            expect(dateFormatter.formatDateTime(dateTime, 'en', options)).equal('December 3, 2014');
            expect(dateFormatter.formatDateTime(dateTime, 'bg', options)).equal('3 декември 2014 г.');
            expect(dateFormatter.formatDateTime(dateTime, 'ja', options)).equal('2014年12月3日');
            expect(dateFormatter.formatDateTime(dateTime, 'es', options)).equal('3 de diciembre de 2014');
            expect(dateFormatter.formatDateTime(dateTime, 'ar', options)).equal('3 ديسمبر 2014');
        });

        it('should format basic date time to short date time', () => {
            const options: Intl.DateTimeFormatOptions = {
                timeStyle: 'short',
                dateStyle: 'short'
            };
            expect(dateFormatter.formatDateTime(dateTime, 'en', options)).equal('12/3/14, 3:24 AM');
            expect(dateFormatter.formatDateTime(dateTime, 'bg', options)).equal('3.12.14 г., 3:24');
            expect(dateFormatter.formatDateTime(dateTime, 'ja', options)).equal('2014/12/03 3:24');
            expect(dateFormatter.formatDateTime(dateTime, 'es', options)).equal('3/12/14, 3:24');
            expect(dateFormatter.formatDateTime(dateTime, 'ar', options)).equal('3‏/12‏/2014 3:24 ص');
        });

        it('should format basic date to short date time parts', () => {
            const options: Intl.DateTimeFormatOptions = {
                dateStyle: 'long'
            };
            expect(dateFormatter.formatDateTimeToParts(dateTime, 'en', options)).toMatchObject([
                { type: 'month', value: 'December' },
                { type: 'literal', value: ' ' },
                { type: 'day', value: '3' },
                { type: 'literal', value: ', ' },
                { type: 'year', value: '2014' }
            ]);
            expect(dateFormatter.formatDateTimeToParts(dateTime, 'bg', options)).toMatchObject([
                { type: 'day', value: '3' },
                { type: 'literal', value: ' ' },
                { type: 'month', value: 'декември' },
                { type: 'literal', value: ' ' },
                { type: 'year', value: '2014' },
                { type: 'literal', value: ' г.' }
            ]);
            expect(dateFormatter.formatDateTimeToParts(dateTime, 'ja', options)).toMatchObject([
                { type: 'year', value: '2014' },
                { type: 'literal', value: '年' },
                { type: 'month', value: '12' },
                { type: 'literal', value: '月' },
                { type: 'day', value: '3' },
                { type: 'literal', value: '日' }
            ]);
            expect(dateFormatter.formatDateTimeToParts(dateTime, 'es', options)).toMatchObject([
                { type: 'day', value: '3' },
                { type: 'literal', value: ' de ' },
                { type: 'month', value: 'diciembre' },
                { type: 'literal', value: ' de ' },
                { type: 'year', value: '2014' }
            ]);
            expect(dateFormatter.formatDateTimeToParts(dateTime, 'ar', options)).toMatchObject([
                { type: 'day', value: '3' },
                { type: 'literal', value: ' ' },
                { type: 'month', value: 'ديسمبر' },
                { type: 'literal', value: ' ' },
                { type: 'year', value: '2014' }
            ]);
        });

        it('should get correct default date formatting for different locales', () => {
            expect(dateFormatter.getLocaleDateTimeFormat('en-US')).equal('M/d/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB')).equal('dd/MM/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('de')).equal('d.M.yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ja')).equal('yyyy/M/d');
            expect(dateFormatter.getLocaleDateTimeFormat('es')).equal('d/M/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ar')).equal('d‏/M‏/yyyy');
        });

        it('should get correct default date formatting for different locales with forced leading zero', () => {
            expect(dateFormatter.getLocaleDateTimeFormat('en-US', true)).equal('MM/dd/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', true)).equal('dd/MM/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('de', true)).equal('dd.MM.yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', true)).equal('yyyy/MM/dd');
            expect(dateFormatter.getLocaleDateTimeFormat('es', true)).equal('dd/MM/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', true)).equal('dd‏/MM‏/yyyy');
        });

        it('should get correct date formatting for different locales', () => {
            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'short' })).equal('M/d/yy');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'short' })).equal('dd/MM/yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { dateStyle: 'short' })).equal('dd.MM.yy');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'short' })).equal('yyyy/MM/dd');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { dateStyle: 'short' })).equal('d/M/yy');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { dateStyle: 'short' })).equal('d‏/M‏/yyyy');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'medium' })).equal('MMM d, yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'medium' })).equal('d MMM yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { dateStyle: 'medium' })).equal('dd.MM.yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'medium' })).equal('yyyy/MM/dd');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { dateStyle: 'medium' })).equal('d MMM yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { dateStyle: 'medium' })).equal('dd‏/MM‏/yyyy');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'long' })).equal('MMMM d, yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'long' })).equal('d MMMM yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { dateStyle: 'long' })).equal('d. MMMM yyyy');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'long' })).equal('yyyy年M月d日');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { dateStyle: 'long' })).equal(
                'd de MMMM de yyyy'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { dateStyle: 'long' })).equal('d MMMM yyyy');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'full' })).equal(
                'EEEE, MMMM d, yyyy'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'full' })).equal(
                'EEEE d MMMM yyyy'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { dateStyle: 'full' })).equal(
                'EEEE, d. MMMM yyyy'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'full' })).equal('yyyy年M月d日EEEE');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { dateStyle: 'full' })).equal(
                'EEEE, d de MMMM de yyyy'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { dateStyle: 'full' })).equal(
                'EEEE، d MMMM yyyy'
            );
        });

        it('should get correct time formatting for different locales', () => {
            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { timeStyle: 'short' })).equal('h:mm a');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { timeStyle: 'short' })).equal('HH:mm');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { timeStyle: 'short' })).equal('HH:mm');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { timeStyle: 'short' })).equal('H:mm');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { timeStyle: 'short' })).equal('H:mm');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { timeStyle: 'short' })).equal('h:mm a');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { timeStyle: 'medium' })).equal('h:mm:ss a');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { timeStyle: 'medium' })).equal('HH:mm:ss');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { timeStyle: 'medium' })).equal('HH:mm:ss');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { timeStyle: 'medium' })).equal('H:mm:ss');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { timeStyle: 'medium' })).equal('H:mm:ss');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { timeStyle: 'medium' })).equal('h:mm:ss a');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { timeStyle: 'long' })).equal('h:mm:ss a z');
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { timeStyle: 'long' })).equal('HH:mm:ss z');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { timeStyle: 'long' })).equal('HH:mm:ss z');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { timeStyle: 'long' })).equal('H:mm:ss z');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { timeStyle: 'long' })).equal('H:mm:ss z');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { timeStyle: 'long' })).equal('h:mm:ss a z');

            expect(dateFormatter.getLocaleDateTimeFormat('en-US', false, { timeStyle: 'full' })).equal(
                'h:mm:ss a zzzz'
            );
            expect(dateFormatter.getLocaleDateTimeFormat('en-GB', false, { timeStyle: 'full' })).equal('HH:mm:ss zzzz');
            expect(dateFormatter.getLocaleDateTimeFormat('de', false, { timeStyle: 'full' })).equal('HH:mm:ss zzzz');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { timeStyle: 'full' })).equal('H時mm分ss秒 zzzz');
            expect(dateFormatter.getLocaleDateTimeFormat('es', false, { timeStyle: 'full' })).equal('H:mm:ss (zzzz)');
            expect(dateFormatter.getLocaleDateTimeFormat('ar', false, { timeStyle: 'full' })).equal('h:mm:ss a zzzz');
        });

        it('should get correct date time formatting for different locales', () => {
            expect(
                dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'short', timeStyle: 'short' })
            ).equal('M/d/yy, h:mm a');
            expect(
                dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'short', timeStyle: 'short' })
            ).equal('dd/MM/yyyy, HH:mm');
            expect(
                dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'short', timeStyle: 'short' })
            ).equal('yyyy/MM/dd H:mm');

            expect(
                dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'medium', timeStyle: 'medium' })
            ).equal('MMM d, yyyy, h:mm:ss a');
            expect(
                dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'medium', timeStyle: 'medium' })
            ).equal('d MMM yyyy, HH:mm:ss');
            expect(
                dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'medium', timeStyle: 'medium' })
            ).equal('yyyy/MM/dd H:mm:ss');

            expect(
                dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'long', timeStyle: 'long' })
            ).equal('MMMM d, yyyy at h:mm:ss a z');
            expect(
                dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'long', timeStyle: 'long' })
            ).equal('d MMMM yyyy at HH:mm:ss z');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'long', timeStyle: 'long' })).equal(
                'yyyy年M月d日 H:mm:ss z'
            );

            expect(
                dateFormatter.getLocaleDateTimeFormat('en-US', false, { dateStyle: 'full', timeStyle: 'full' })
            ).equal('EEEE, MMMM d, yyyy at h:mm:ss a zzzz');
            expect(
                dateFormatter.getLocaleDateTimeFormat('en-GB', false, { dateStyle: 'full', timeStyle: 'full' })
            ).equal('EEEE d MMMM yyyy at HH:mm:ss zzzz');
            expect(dateFormatter.getLocaleDateTimeFormat('ja', false, { dateStyle: 'full', timeStyle: 'full' })).equal(
                'yyyy年M月d日EEEE H時mm分ss秒 zzzz'
            );
        });
    });

    describe('custom date formatting', () => {
        it('should return the format for unknown one', () => {
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', 'ttt')).equal('ttt');
        });

        it('should format era', () => {
            let format = 'GG';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('AD');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('сл.Хр.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('西暦');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('d. C.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('م');

            format = 'GGGG';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('Anno Domini');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('след Христа');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('西暦');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('después de Cristo');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ميلادي');

            format = 'GGGGG';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('A');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('сл.Хр.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('AD');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('d. C.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('م');
        });

        it('should format year', () => {
            let format = 'yy';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('14');

            format = 'yyyy';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('2014');
        });

        it('should format iso year', () => {
            let format = 'YY';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('14');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('14');

            format = 'YYYY';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('2014');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('2014');
        });

        it('should format month', () => {
            let format = 'M';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('3');

            format = 'MM';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('03');

            format = 'MMM';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('Mar');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('mar');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('مارس');

            format = 'MMMM';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('March');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('март');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('marzo');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('مارس');

            format = 'MMMMM';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('M');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('M');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('م');
        });

        it('should format day', () => {
            let format = 'd';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('3');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('3');

            format = 'dd';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('03');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('03');
        });

        it('should format week day', () => {
            let format = 'c';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('Wed');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('ср');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('水');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('mié');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('الأربعاء');

            format = 'cc';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('Wed');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('ср');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('水');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('mié');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('الأربعاء');

            format = 'cccc';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('Wednesday');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('сряда');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('水曜日');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('miércoles');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('الأربعاء');

            format = 'ccccc';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('W');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('с');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('水');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('X');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ر');
        });

        it('should format period of the day', () => {
            let format = 'a';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('am');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('am');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('am');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('am');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ص');

            format = 'aa';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ص');

            format = 'aaaa';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('AM');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ص');

            format = 'aaaaa';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('a');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('a');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('a');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('a');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ص');
        });

        it('should format extended period of the day', () => {
            let format = 'b';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('at ni.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('пр. но.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('夜中');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('de la ma.');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('فج.');

            format = 'bbbb';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('at night');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('през нощта');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('夜中');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('de la madrugada');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('في الصباح');

            format = 'bbbbb';
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'en', format)).equal('an');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'bg', format)).equal('пн');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ja', format)).equal('夜');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'es', format)).equal('dlm');
            expect(dateFormatter.formatDateCustomFormat(dateTime, 'ar', format)).equal('ف');
        });

        it('should format hour in 0-12 time format', () => {
            let format = 'h';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('4');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('4');
            //expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("4");
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('4');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('4');

            format = 'hh';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('04');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('04');
            //expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal("04");
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('04');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('04');
        });

        it('should format hour in 0-24 time format', () => {
            let format = 'H';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en-US', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en-GB', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('16');

            format = 'HH';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en-US', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en-GB', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('16');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('16');
        });

        it('should format hours at midnight correctly', () => {
            const date = new Date('2014-03-21T00:08:09');
            expect(dateFormatter.formatDateCustomFormat(date, 'en', 'h')).equal('12');
            expect(dateFormatter.formatDateCustomFormat(date, 'en', 'H')).equal('0');
            expect(dateFormatter.formatDateCustomFormat(date, 'ja', 'K')).equal('0');

            expect(dateFormatter.formatDateCustomFormat(date, 'en', 'hh')).equal('12');
            expect(dateFormatter.formatDateCustomFormat(date, 'en', 'HH')).equal('00');
            expect(dateFormatter.formatDateCustomFormat(date, 'ja', 'KK')).equal('00');
        });

        it('should format minutes', () => {
            let format = 'm';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('24');

            format = 'mm';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('24');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('24');

            format = 'm';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('8');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('8');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('8');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('8');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('8');

            format = 'mm';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('08');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('08');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('08');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('08');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('08');
        });

        it('should format seconds', () => {
            let format = 's';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('13');

            format = 'ss';
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'en', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'bg', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ja', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'es', format)).equal('13');
            expect(dateFormatter.formatDateCustomFormat(dateTime2, 'ar', format)).equal('13');

            format = 's';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('9');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('9');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('9');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('9');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('9');

            format = 'ss';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('09');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('09');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('09');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('09');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('09');
        });

        it('should format fractional seconds', () => {
            let format = 'S';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('0');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('0');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('0');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('0');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('0');

            format = 'SS';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('00');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('00');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('00');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('00');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('00');

            format = 'SSS';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format)).equal('000');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format)).equal('000');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format)).equal('000');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format)).equal('000');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format)).equal('000');
        });

        it('should format short format timezone', () => {
            let format = 'z';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format, false, 'Etc/GMT+1')).equal(
                'GMT-1'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format, false, 'Etc/GMT+1')).equal(
                'Гринуич-1'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format, false, 'Etc/GMT+1')).equal(
                'GMT-1'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format, false, 'Etc/GMT+1')).equal(
                'GMT-1'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format, false, 'Etc/GMT+1')).equal(
                'غرينتش-1'
            );

            format = 'zzzz';
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', format, false, 'Etc/GMT+1')).equal(
                'GMT-01:00'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'bg', format, false, 'Etc/GMT+1')).equal(
                'Гринуич-01:00'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ja', format, false, 'Etc/GMT+1')).equal(
                'GMT-01:00'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'es', format, false, 'Etc/GMT+1')).equal(
                'GMT-01:00'
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'ar', format, false, 'Etc/GMT+1')).equal(
                'غرينتش-01:00'
            );
        });

        it('should format combination of single cases', () => {
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', "'ex:' h:mm bbb GGG")).equal(
                "'ex:' 4:08 in th. af. AD"
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', "'ex:' hh:mm bbb GGG")).equal(
                "'ex:' 04:08 in th. af. AD"
            );
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', "'ex:' HH:mm bbb GGG")).equal(
                "'ex:' 16:08 in th. af. AD"
            );
        });

        it('should log warning regarding week of year format not supported', () => {
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', 'w')).equal('w');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', 'ww')).equal('ww');
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', 'W')).equal('W');
        });

        it('should return empty string on empty format', () => {
            expect(dateFormatter.formatDateCustomFormat(dateTimeHourFull, 'en', '')).equal('');
        });
    });

    describe('other', () => {
        it('should create dates from ISO string correctly', () => {
            // Initially in UTC timezone by default
            let dateString = '2025-01-01';
            let expectedUTCDate = new Date(dateString);
            let expectedConverted = dateFormatter.createDateFromValue(dateString);

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
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01-01T00:00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01-01T00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            // Result should be in local timezone but it's not, so there's difference
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(timeZoneOffsetMin);

            dateString = '2025-01T00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01T00:00:00Z';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01T00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = '2025-01T00:00:00+00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            // Initially in local timezone
            dateString = '2025-01-01T00:00:00';
            let expectedLocalTime = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01-01T00:00:00.000';
            expectedLocalTime = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01T00:00:00';
            expectedLocalTime = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedLocalTime.getTime()).equal(0);

            dateString = '2025-01T00:00:00.000';
            expectedLocalTime = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedLocalTime.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(dateFormatter.createDateFromValue(dateString).getTime() - expectedLocalTime.getTime()).equal(0);
        });

        it('should create dates from other regular valid string formats', () => {
            let dateString = 'January 1, 2025';
            let expectedUTCDate = new Date(dateString);
            let expectedConverted = dateFormatter.createDateFromValue(dateString);

            // Result should be in local timezone but it's not, so there's difference
            expect(expectedUTCDate.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            dateString = 'January 1, 2025 00:00';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).toEqual(0);
            expect(expectedConverted.getHours()).toEqual(0);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);

            // The timezone of the machine. For UTC+0 would be 0
            const timeZoneOffsetMin = expectedUTCDate.getTimezoneOffset() * 1000 * 60;
            // Value for zero hour check. If the timezone offset is 0, switch it to something else so it still does not equal
            const zeroHourExUTC = timeZoneOffsetMin === 0 ? 1 : 0;

            dateString = 'January 1, 2025 00:00 UTC';
            expectedUTCDate = new Date(dateString);
            expectedConverted = dateFormatter.createDateFromValue(dateString);
            expect(expectedUTCDate.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getHours()).not.toEqual(zeroHourExUTC);
            expect(expectedConverted.getTime() - expectedUTCDate.getTime()).equal(0);
        });
    });
});
