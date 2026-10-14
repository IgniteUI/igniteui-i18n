import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Hungarian resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsHU: IValidationResourceStrings = {
  required_validation_error: 'Ez a mező kötelező',
  min_validation_error: 'A megadott érték legalább {0} kell, hogy legyen',
  max_validation_error: 'A megadott érték legfeljebb {0} lehet',
  min_length_validation_error: 'A bejegyzésnek legalább {0} karakter hosszúságúnak kell lennie',
  max_length_validation_error: 'A bejegyzés legfeljebb {0} karakter hosszúságú lehet',
  email_validation_error: 'Érvényes e-mail címet kell megadni',
  pattern_validation_error: 'A bejegyzés nem felel meg a szükséges sémának',
  mask_validation_error: 'Minden kötelező pozíciót ki kell tölteni',
  url_validation_error: 'Érvényes URL-címet kell megadni',
  disabled_date_validation_error: 'A megadott {0} érték a letiltott dátumok tartományába esik',
  step_validation_error: 'Az érték nem felel meg a lépésköz-megkötésnek',
} satisfies Required<IValidationResourceStrings>;
