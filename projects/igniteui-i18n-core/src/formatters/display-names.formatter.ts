import { mergeOptions } from '../utils.js';
import { BaseFormatter } from './base.formatter.js';
import type { DateFormatter } from './date.formatter.js';

export class DisplayNamesFormatter extends BaseFormatter<Intl.DisplayNames, Intl.DisplayNamesOptions> {
  private dateFormatter: DateFormatter;

  constructor(defaultLocale: string, dateFormatter: DateFormatter) {
    super(defaultLocale, Intl.DisplayNames);
    this.dateFormatter = dateFormatter;
  }

  public getWeekLabel(locale?: string, options?: Partial<Intl.DisplayNamesOptions>): string {
    const requiredOptions: Intl.DisplayNamesOptions = {
      type: 'dateTimeField',
    };
    const combinedOptions = options ? mergeOptions(options, requiredOptions) : requiredOptions;
    const formatter = this.getIntlFormatter(locale, combinedOptions as Intl.DisplayNamesOptions);
    const weekDay = this.dateFormatter
      .formatDateTimeToParts(new Date(), locale, { weekday: 'narrow' })
      .find((part) => part.type === 'weekday')?.value;

    let weekLabel = formatter.of('weekOfYear');
    if (weekLabel && weekDay?.startsWith(weekDay[0].toUpperCase())) {
      weekLabel = weekLabel[0].toUpperCase() + weekLabel?.substring(1);
    }

    if (options?.style === 'narrow') {
      return weekLabel?.substring(0, 1) ?? '';
    }
    return weekLabel ?? '';
  }
}
