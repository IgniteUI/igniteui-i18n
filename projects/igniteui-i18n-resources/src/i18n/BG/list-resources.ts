import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxList
 */
export const ListResourceStringsBG: IListResourceStrings = {
    list_no_items: 'Няма елементи в списъка.',
    list_loading: 'Зарежда информация от сървъра...'
} satisfies MakeRequired<IListResourceStrings>;
