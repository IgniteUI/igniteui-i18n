import { BaseFormatter } from './base.formatter';

export class LocaleFormatter extends BaseFormatter<Intl.Locale, Intl.LocaleOptions> {
    constructor(defaultLocale: string) {
        super(defaultLocale, Intl.Locale);
    }
}
