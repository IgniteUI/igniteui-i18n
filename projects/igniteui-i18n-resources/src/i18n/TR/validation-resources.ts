import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Turkish resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsTR: IValidationResourceStrings = {
  required_validation_error: 'Bu alan gereklidir',
  min_validation_error: 'En az {0} değeri girilmelidir',
  max_validation_error: 'En fazla {0} değeri girilmelidir',
  min_length_validation_error: 'Giriş en az {0} karakter uzunluğunda olmalıdır',
  max_length_validation_error: 'Giriş, {0} karakterden uzun olmamalıdır',
  email_validation_error: 'Geçerli bir e-posta adresi girilmelidir',
  pattern_validation_error: 'Giriş, gerekli modelle eşleşmiyor',
  mask_validation_error: 'Tüm gerekli konumlar doldurulmalıdır',
  url_validation_error: 'Geçerli bir URL adresi girilmelidir',
  disabled_date_validation_error: 'Girilen {0} değeri devre dışı bırakılan tarih aralığında',
  step_validation_error: 'Değer, adım kısıtlamasına uymuyor',
} satisfies Required<IValidationResourceStrings>;
