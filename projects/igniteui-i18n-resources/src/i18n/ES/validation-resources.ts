import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Spanish resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsES: IValidationResourceStrings = {
  required_validation_error: 'Este campo es obligatorio',
  min_validation_error: 'Escriba un valor mayor o igual a {0}',
  max_validation_error: 'Escriba un valor menor o igual a {0}',
  min_length_validation_error: 'Escriba {0} caracteres como mínimo',
  max_length_validation_error: 'No escriba más de {0} caracteres',
  email_validation_error: 'Debe introducirse una dirección de correo electrónico válida.',
  pattern_validation_error: 'La entrada no coincide con el patrón necesario.',
  mask_validation_error: 'Deben rellenarse todas las posiciones obligatorias.',
  url_validation_error: 'Debe introducirse una dirección URL válida.',
  disabled_date_validation_error: 'El valor introducido {0} está dentro del intervalo de fechas deshabilitadas.',
  step_validation_error: 'El valor no se ajusta a la restricción de paso',
} satisfies Required<IValidationResourceStrings>;
