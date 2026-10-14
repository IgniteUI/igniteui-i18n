import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Danish resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsDA: IValidationResourceStrings = {
  required_validation_error: 'Dette felt er påkrævet',
  min_validation_error: 'Der skal indtastes en værdi på mindst {0}',
  max_validation_error: 'Der skal indtastes en værdi, der ikke mere end {0}',
  min_length_validation_error: 'Indtastningen skal være mindst {0} tegn',
  max_length_validation_error: 'Indtastningen må højst være {0} tegn',
  email_validation_error: 'Der skal indtastes en gyldig e-mailadresse',
  pattern_validation_error: 'Indtastning stemmer ikke overens med det krævede mønster',
  mask_validation_error: 'Alle påkrævede positioner skal udfyldes',
  url_validation_error: 'Der skal indtastes en gyldig URL-adresse',
  disabled_date_validation_error: 'Den indtastede værdi {0} ligger inden for de deaktiverede datoer',
  step_validation_error: 'Værdien overholder ikke trinbegrænsningen',
} satisfies Required<IValidationResourceStrings>;
