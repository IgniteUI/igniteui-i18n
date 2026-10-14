import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Polish resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsPL: IValidationResourceStrings = {
  required_validation_error: 'To pole jest wymagane',
  min_validation_error: 'Należy wprowadzić wartość równą co najmniej {0}',
  max_validation_error: 'Należy wprowadzić wartość nie większą niż {0}',
  min_length_validation_error: 'Wpis powinien mieć co najmniej {0} znaków',
  max_length_validation_error: 'Długość wpisu nie może przekraczać {0} znaków',
  email_validation_error: 'Należy podać prawidłowy adres e-mail',
  pattern_validation_error: 'Wpis nie pasuje do wymaganego wzorca',
  mask_validation_error: 'Należy wypełnić wszystkie wymagane pozycje',
  url_validation_error: 'Należy podać prawidłowy adres URL',
  disabled_date_validation_error: 'Wprowadzona wartość {0} mieści się w zakresie wyłączonych dat',
  step_validation_error: 'Wartość nie jest zgodna z ograniczeniem kroku',
} satisfies Required<IValidationResourceStrings>;
