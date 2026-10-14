import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Italian resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsIT: IValidationResourceStrings = {
  required_validation_error: 'Questo campo è obbligatorio',
  min_validation_error: 'È necessario immettere un valore di almeno {0}',
  max_validation_error: 'È necessario immettere un valore non superiore a {0}',
  min_length_validation_error: 'La voce deve contenere almeno {0} caratteri',
  max_length_validation_error: 'La voce non deve contenere più di {0} caratteri',
  email_validation_error: 'È necessario inserire un indirizzo e-mail valido',
  pattern_validation_error: 'La voce non corrisponde al modello richiesto',
  mask_validation_error: 'È necessario compilare tutte le posizioni obbligatorie',
  url_validation_error: 'È necessario inserire un indirizzo URL valido',
  disabled_date_validation_error: 'Il valore immesso {0} rientra nell’intervallo di date disabilitate',
  step_validation_error: 'Il valore non rispetta il vincolo di passo',
} satisfies Required<IValidationResourceStrings>;
