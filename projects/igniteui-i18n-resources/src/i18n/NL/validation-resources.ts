import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Dutch resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsNL: IValidationResourceStrings = {
  required_validation_error: 'Dit veld is verplicht',
  min_validation_error: 'Er moet een waarde van minimaal {0} worden ingevoerd',
  max_validation_error: 'Er moet een waarde van niet meer dan {0} worden ingevoerd',
  min_length_validation_error: 'Invoer moet minimaal {0} teken(s) lang zijn',
  max_length_validation_error: 'Invoer mag niet meer dan {0} teken(s) lang zijn',
  email_validation_error: 'Er moet een geldig e-mailadres worden ingevoerd',
  pattern_validation_error: 'Invoer komt niet overeen met het vereiste patroon',
  mask_validation_error: 'Alle vereiste posities moeten worden ingevuld',
  url_validation_error: 'Er moet een geldig URL-adres worden ingevoerd',
  disabled_date_validation_error: 'De ingevoerde waarde {0} valt binnen het bereik van uitgeschakelde datums',
  step_validation_error: 'De waarde voldoet niet aan de stapbeperking',
} satisfies Required<IValidationResourceStrings>;
