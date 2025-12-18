import type { ICustomFormatOptions } from '../i18n-manager.interfaces.js';
import { customFormatRegex, isoRegex } from '../utils.js';
import { BaseFormatter } from './base.formatter.js';
import type { LocaleFormatter } from './locale.formatter.js';

declare global {
  // biome-ignore lint/style/noNamespace: Intl.Locale.getWeekInfo type polyfill
  namespace Intl {
    interface Locale {
      hourCycles?: ('h11' | 'h12' | 'h23' | 'h24')[];
      getWeekInfo?(): { firstDay: 1 | 2 | 3 | 4 | 5 | 6 | 7; weekend: number[] };
    }
  }
}

export class DateFormatter extends BaseFormatter<Intl.DateTimeFormat, Intl.DateTimeFormatOptions> {
  public defaultCustomFormatOptions: ICustomFormatOptions = {
    forceLeadingZero: false,
    timezone: 'GMT',
  };
  private readonly localeFormatter: LocaleFormatter;

  constructor(defaultLocale: string, localeFormatter: LocaleFormatter) {
    super(defaultLocale, Intl.DateTimeFormat);
    this.localeFormatter = localeFormatter;
    this.defaultOptions = {};
  }

  /**
   * Transform string or number representation of a date time to a Date object
   * @param value Can be any string or number representation of a date, supported by the JS Date object.
   * @returns The date as a Date object.
   */
  public createDateFromValue(value: string | number): Date {
    let dateValue = value;

    if (typeof dateValue === 'string') {
      // Workaround for ISO date without time or specified UTC explicitly
      const match = isoRegex.exec(dateValue);
      if (match && !match.groups?.time && !match.groups?.UTC) {
        dateValue = `${dateValue}T00:00:00`;
      }
    }

    return new Date(dateValue);
  }

  /**
   * Format a date object or date number using Intl.
   * @param date Date to be formatted
   * @param locale Override of the current global locale.
   * @param options Options by which to format the date.
   * @returns String representing the formatted value.
   */
  public formatDateTime(date: Date | number, locale?: string, options?: Intl.DateTimeFormatOptions): string {
    const formatter = this.getIntlFormatter(locale, options);
    return formatter.format(date);
  }

  /**
   * Format a date object or date number using Intl.
   * @param date Date to be formatted
   * @param locale Override of the current global locale.
   * @param options Options by which to format the date.
   * @returns Array of strings representing the formatted value, separated in parts.
   */
  public formatDateTimeToParts(
    date: Date | number,
    locale?: string,
    options?: Intl.DateTimeFormatOptions
  ): Intl.DateTimeFormatPart[] {
    const formatter = this.getIntlFormatter(locale, options);
    return formatter.formatToParts(date);
  }

  /**
   * Format date range using Intl.DateTimeFormat
   * @param startDate Start date for range formatting
   * @param endDate End date for range formatting
   * @param locale Override of the current global locale
   * @param options Options by which to format the dates.
   * @returns String representing the formatted range of dates
   */
  public formatRange(
    startDate: Date | number,
    endDate: Date | number,
    locale?: string,
    options?: Intl.DateTimeFormatOptions
  ): string {
    const formatter = this.getIntlFormatter(locale, options);
    return formatter.formatRange(startDate, endDate);
  }

  /**
   * Format date range using Intl.DateTimeFormat
   * @param startDate Start date for range formatting
   * @param endDate End date for range formatting
   * @param locale Override of the current global locale
   * @param options Options by which to format the dates.
   * @returns String representing the formatted range of dates
   */
  public formatRangeToParts(
    startDate: Date | number,
    endDate: Date | number,
    locale?: string,
    options?: Intl.DateTimeFormatOptions
  ): Intl.DateTimeFormatPart[] {
    const formatter = this.getIntlFormatter(locale, options);
    return formatter.formatRangeToParts(startDate, endDate);
  }

  /**
   * Get the format of a date, based on the options provided.
   * If you want to get only date format, set `dateStyle` for example. For time only format set `timeStyle` or for both date and time set both `dateStyle` and `timeStyle`.
   * @param locale
   * @param dateTimeOptions
   * @returns
   */
  public getLocaleDateTimeFormat(
    locale: string,
    forceLeadingZero = false,
    dateTimeOptions?: Intl.DateTimeFormatOptions
  ): string {
    // Use any date with single digit for values so later on we can determine if the are '2-digit' or 'numeric'
    const testDate = new Date(2015, 2, 8, 1, 2, 4);
    const formatter = this.getIntlFormatter(locale, dateTimeOptions);
    const resultParts = formatter.formatToParts(testDate);
    let resultFormat = '';
    for (const part of resultParts) {
      if (part.type === 'weekday') {
        resultFormat += 'EEEE';
      } else if (part.type === 'day') {
        if (part.value.length === 1 && !forceLeadingZero) {
          resultFormat += 'd';
        } else {
          resultFormat += 'dd';
        }
      } else if (part.type === 'month') {
        const valueLength = part.value.length;
        if (Number.parseInt(part.value, 10)) {
          resultFormat += part.value.length === 1 && !forceLeadingZero ? 'M' : 'MM';
        } else if (1 < valueLength && valueLength < 4) {
          resultFormat += 'MMM';
        } else if (valueLength >= 4) {
          resultFormat += 'MMMM';
        } else if (valueLength === 1) {
          // Possibly not used by anyone by default
          resultFormat += 'MMMMM';
        }
      } else if (part.type === 'year') {
        if (part.value.length === 2) {
          resultFormat += 'yy';
        } else {
          resultFormat += 'yyyy';
        }
      } else if (part.type === 'hour') {
        // Use resolved options instead of Intl.Locale, since in browser most is not actually populated for some reason
        const hourCycle = formatter.resolvedOptions().hourCycle;
        let replaceHour = 'H';
        // h24 doesn't seem to be used anywhere
        if (hourCycle === 'h11') {
          // Should be used by Japan, but it returns h12 for them.
          replaceHour = 'K';
        } else if (hourCycle === 'h12') {
          replaceHour = 'h';
        }
        replaceHour += part.value.length === 1 && forceLeadingZero ? replaceHour : '';
        resultFormat += part.value.replaceAll(/\d/g, replaceHour);
      } else if (part.type === 'minute') {
        resultFormat += part.value.length === 1 && !forceLeadingZero ? 'm' : 'mm';
      } else if (part.type === 'second') {
        resultFormat += part.value.length === 1 && !forceLeadingZero ? 's' : 'ss';
      } else if (part.type === 'dayPeriod') {
        resultFormat += 'tt';
      } else if (part.type === 'timeZoneName') {
        const shortParts = this.getIntlFormatter(locale, {
          timeZoneName: 'short',
        }).formatToParts(testDate);
        const shortTimezone = this.findDatePart(shortParts, 'timeZoneName');
        resultFormat += part.value === shortTimezone ? 'z' : 'zzzz';
      } else if (part.type === 'literal') {
        resultFormat += part.value;
      }
    }
    return resultFormat;
  }

  /**
   * Get the first day of a week numbered 1(Monday)...7(Sunday) based on the current locale or a provided one.
   * Note: There's no support for Firefox currently, so by default it returns 1.
   * @param locale Locale for which to get the day of week. Otherwise use current globally set.
   * @returns The first day of the week.
   */
  public getFirstDayOfWeek(locale?: string): number {
    const formatter = this.localeFormatter.getIntlFormatter(locale);
    return formatter.getWeekInfo ? formatter.getWeekInfo().firstDay : 1;
  }

  /**
   * Use custom formatting to format a date to match the provided strings.
   * Currently supported values are G, y, Y, m, M, L, d, E, c, a, b, B, h, H, K, s, S, z, Z, O:
   *
   * Date:
   * c, cc, ccc, cccc, ccccc - shows weekday in different lengths. Alias - `E`
   * d, dd - shows day of month in numeric (m) or 2-digit/zero padded (mm) style.
   * M, MM, MMM, MMMM, MMMMM - show month of the year as number(M, MM) or as a name (MMM, MMMM, MMMMM). Alias - `L`.
   * y, yy, yyy, yyyy, yyyyy - show year in different lengths.
   * Y, YY, YYY, YYYY, YYYYY - show year in different lengths based on iso8601 calendar.
   * G, GG, GGG, GGGG, GGGGG - shows era in different lengths
   *
   * Time:
   * m, mm - shows minutes in numeric(m) or 2-digit/zero padded (mm) style.
   * h, hh - shows hour using 12h clock in numeric(m) or 2-digit/zero padded (mm) style.
   * H, HH - shows hour using 24h clock in numeric(m) or 2-digit/zero padded (mm) style.
   * K, KK - shows hour using 12h clock where midnight is 0:00 instead of 12:00 in numeric(m) or 2-digit/zero padded (mm) style.
   * s, ss - shows seconds in numeric(m) or 2-digit/zero padded (mm) style.
   * S, SS, SSS - shows fractional seconds in different fraction.
   * a, aa, aaa, aaaa, aaaaa - shows period of time in short format like a/p/am/AM/pm/PM. Alias - 't'
   * b, bb, bbb, bbbb, bbbbb - shows extended period of time like midnight, at night, noon and etc. Alias - `B`
   * z, zz, zzz, zzzz, zzzzz - shows timezone in short (z, zz, zzz, zzzzz) or long (zzzz) format. Aliases - `Z` and `O`
   * @param value Date to be formatted
   * @param format String containing custom strings describing how the date should be formatted
   * @param options Options for the custom formatting like locale, timezone or force 2-digits always where applicable.
   * @returns
   */
  public formatDateCustomFormat(value: Date, format: string, options?: ICustomFormatOptions): string {
    let parts: string[] = [];
    let match: RegExpExecArray | null;
    let remainingFormat = format;

    while (remainingFormat) {
      match = customFormatRegex.exec(remainingFormat);

      if (match) {
        parts = parts.concat(match.slice(1));
        const part = parts.pop();

        if (!part) {
          break;
        }

        remainingFormat = part;
      } else {
        parts.push(remainingFormat);
        break;
      }
    }

    const formatOptions = { ...this.defaultCustomFormatOptions, ...options };
    let dateText = '';

    for (const part of parts) {
      dateText += this.formatPartialDateValue(value, part, formatOptions);
    }

    return dateText;
  }

  private formatPartialDateValue(date: Date, format: string, formatOptions: ICustomFormatOptions): string | undefined {
    const numericOption = formatOptions.forceLeadingZero ? '2-digit' : 'numeric';
    const options: Intl.DateTimeFormatOptions = {};
    let periodStyle: 'narrow' | 'short' | 'medium' | 'long' | undefined;

    switch (format) {
      case 'G':
      case 'GG':
      case 'GGG':
        options.era = 'short';
        break;
      case 'GGGG':
        options.era = 'long';
        break;
      case 'GGGGG':
        options.era = 'narrow';
        break;
      case 'yy':
        options.year = '2-digit';
        break;
      case 'y':
      case 'yyy':
      case 'yyyy':
        options.year = 'numeric';
        break;

      case 'YY':
        options.year = '2-digit';
        options.calendar = 'iso8601';
        break;
      case 'Y':
      case 'YYY':
      case 'YYYY':
        options.year = 'numeric';
        options.calendar = 'iso8601';
        break;

      case 'M':
      case 'L':
        options.month = numericOption;
        break;
      case 'MM':
      case 'LL':
        options.month = '2-digit';
        break;

      // Month of the year (January, ...), string, format
      case 'MMM':
      case 'LLL':
        options.month = 'short';
        break;
      case 'MMMM':
      case 'LLLL':
        options.month = 'long';
        break;
      case 'MMMMM':
      case 'LLLLL':
        options.month = 'narrow';
        break;

      //Deprecated.
      // Week of the year (1, ... 52)
      case 'w':
      case 'ww':
      // Week of the month (1, ...)
      // falls through
      case 'W':
        console.warn(
          'Week of the year and week of the month has been deprecated for Ignite UI. Please use custom formatting.'
        );
        return format;

      // Day of the month (1-31)
      case 'd':
        options.day = numericOption;
        break;
      case 'dd':
        options.day = '2-digit';
        break;

      // Day of the Week
      case 'c':
      case 'cc':
      case 'ccc':
      case 'E':
      case 'EE':
      case 'EEE':
        options.weekday = 'short';
        break;
      case 'cccc':
      case 'EEEE':
        options.weekday = 'long';
        break;
      case 'ccccc':
      case 'EEEEE':
        options.weekday = 'narrow';
        break;
      // Generic period of the day (am-pm)
      // am/pm/AM/PM (locale based)
      case 'a':
      case 't':
      case 'aa':
      case 'tt':
        // set to 'long' because a,t and b use same handling below
        periodStyle = 'long';
        options.timeStyle = 'short';
        break;
      // am/pm (lower case)
      case 'aaa':
      case 'ttt':
        periodStyle = 'short';
        options.timeStyle = 'short';
        break;
      // AM/PM (upper case)
      case 'aaaa':
      case 'tttt':
        periodStyle = 'medium';
        options.timeStyle = 'short';
        break;
      // a/p (first letters)
      case 'aaaaa':
      case 'ttttt':
        periodStyle = 'narrow';
        options.timeStyle = 'short';
        break;
      // Extended period of the day (midnight, at night, ...), standalone
      case 'b':
      case 'bb':
      case 'bbb':
      case 'B':
      case 'BB':
      case 'BBB':
        options.dayPeriod = 'short';
        break;
      case 'bbbb':
      case 'BBBB':
        options.dayPeriod = 'long';
        break;
      case 'bbbbb':
      case 'BBBBB':
        options.dayPeriod = 'narrow';
        break;

      // Hour in AM/PM, (1-12)
      case 'h':
        options.hour12 = true;
        options.hour = numericOption;
        break;
      case 'hh':
        options.hour12 = true;
        options.hour = '2-digit';
        break;

      // Hour of the day (0-23)
      case 'H':
        options.hour12 = false;
        options.hour = numericOption;
        break;
      // Hour in day, padded (00-23)
      case 'HH':
        options.hour12 = false;
        options.hour = '2-digit';
        break;

      case 'K':
        options.hourCycle = 'h11';
        options.hour = numericOption;
        break;
      case 'KK':
        options.hourCycle = 'h11';
        options.hour = '2-digit';
        break;

      // Minute of the hour (0-59)
      case 'm':
        options.minute = numericOption;
        break;
      case 'mm':
        // Also for some reason this is not working in Intl for all locales ??
        options.minute = '2-digit';
        break;

      // Second of the minute (0-59)
      case 's':
        options.second = numericOption;
        break;
      case 'ss':
        // Also for some reason this is not working in Intl for all locales ??
        options.second = '2-digit';
        break;
      case 'S':
        options.fractionalSecondDigits = 1;
        break;
      case 'SS':
        options.fractionalSecondDigits = 2;
        break;
      case 'SSS':
        options.fractionalSecondDigits = 3;
        break;
      // Timezone short format (GMT+4)
      case 'O':
      case 'OO':
      case 'OOO':
      case 'z':
      case 'zz':
      case 'zzz':
      case 'Z':
      case 'ZZ':
      case 'ZZZ':
        options.timeZone = formatOptions.timezone;
        options.timeZoneName = 'short';
        break;
      // Timezone long format (GMT+0430)
      case 'OOOO':
      case 'zzzz':
      case 'ZZZZ':
        options.timeZone = formatOptions.timezone;
        options.timeZoneName = 'long';
        break;
      default:
        return format;
    }

    const dateParts = this.formatDateTimeToParts(date, formatOptions.locale, options);

    if (options.era) {
      return this.findDatePart(dateParts, 'era');
    }

    if (periodStyle || options.dayPeriod) {
      let value = dateParts.find((part) => part.type === 'dayPeriod')?.value;
      if (!value && periodStyle) {
        // Current locale doesn't have generic day period. Just use the `en` one.
        value = this.findDatePart(this.formatDateTimeToParts(date, 'en', options), 'dayPeriod');
      }

      switch (periodStyle ?? options.dayPeriod) {
        case 'narrow':
          return value
            ?.split(' ')
            .map((part) => part.substring(0, 1).toLocaleLowerCase())
            .join('');
        case 'short':
          return value
            ?.split(' ')
            .map((part) => part.substring(0, 2).toLocaleLowerCase() + (part.length > 2 ? '.' : ''))
            .join(' ');
        case 'medium':
          return value
            ?.split(' ')
            .map((part) => part.substring(0, 2).toUpperCase() + (part.length > 2 ? '.' : ''))
            .join(' ');
        default:
          return value;
      }
    }

    if (options.hour) {
      const value = this.findDatePart(dateParts, 'hour');
      if (
        !formatOptions.forceLeadingZero &&
        options.hour === 'numeric' &&
        value?.startsWith('0') &&
        value.length === 2
      ) {
        // Use numeric option value to format to shorter hour. Ex: instead of 08 return 8.
        return value[1];
      }

      return value;
    }

    if (options.minute === '2-digit') {
      // For some reason not working as expected in Intl
      const minutes = this.findDatePart(dateParts, 'minute');
      return minutes?.padStart(2, '0');
    }

    if (options.second === '2-digit') {
      // For some reason not working as expected in Intl
      const seconds = this.findDatePart(dateParts, 'second');
      return seconds?.padStart(2, '0');
    }

    if (options.timeZone) {
      return this.findDatePart(dateParts, 'timeZoneName');
    }

    if (options.fractionalSecondDigits) {
      return this.findDatePart(dateParts, 'fractionalSecond');
    }

    return dateParts[0].value;
  }

  private findDatePart(parts: Intl.DateTimeFormatPart[], partName: string): string | undefined {
    return parts.find((part) => part.type === partName)?.value;
  }
}
