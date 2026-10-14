import { BaseFormatter } from './base.formatter.js';
import type { DateFormatter } from './date.formatter.js';

export class DisplayNamesFormatter extends BaseFormatter<Intl.DisplayNames, Intl.DisplayNamesOptions> {
  private dateFormatter: DateFormatter;

  constructor(defaultLocale: string, dateFormatter: DateFormatter) {
    super(defaultLocale, Intl.DisplayNames);
    this.dateFormatter = dateFormatter;
  }

  public getWeekLabel(locale?: string, options?: Partial<Intl.DisplayNamesOptions>): string {
    const formatter = this.getIntlFormatter(locale, { ...options, type: 'dateTimeField' });
    let weekLabel = formatter.of('weekOfYear');
    if (!weekLabel) {
      return '';
    }

    // Match the locale's weekday casing, e.g. 'Week' in en, 'седмица' in bg.
    const weekDay = this.dateFormatter
      .formatDateTimeToParts(new Date(), locale, { weekday: 'narrow' })
      .find((part) => part.type === 'weekday')?.value;

    if (weekDay?.startsWith(weekDay[0].toUpperCase())) {
      weekLabel = weekLabel[0].toUpperCase() + weekLabel.substring(1);
    }

    return options?.style === 'narrow' ? weekLabel.substring(0, 1) : weekLabel;
  }
}
