import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Portuguese resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsPT: IValidationResourceStrings = {
  required_validation_error: 'Este campo é obrigatório',
  min_validation_error: 'Um valor de pelo menos {0} deve ser inserido',
  max_validation_error: 'Um valor não superior a {0} deve ser introduzido',
  min_length_validation_error: 'A entrada deve ter pelo menos {0} caracteres',
  max_length_validation_error: 'A entrada não deve ter mais de {0} caracteres',
  email_validation_error: 'Deve ser introduzido um endereço de e-mail válido',
  pattern_validation_error: 'A entrada não corresponde ao padrão necessário',
  mask_validation_error: 'Devem ser preenchidas todas as posições obrigatórias',
  url_validation_error: 'Deve ser introduzido um endereço URL válido',
  disabled_date_validation_error: 'O valor introduzido {0} está dentro do intervalo de datas desativadas',
  step_validation_error: 'O valor não está em conformidade com a restrição de passo',
} satisfies Required<IValidationResourceStrings>;
