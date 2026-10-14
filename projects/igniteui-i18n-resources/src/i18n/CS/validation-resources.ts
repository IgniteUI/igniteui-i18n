import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Czech resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsCS: IValidationResourceStrings = {
  required_validation_error: 'Toto pole je povinné',
  min_validation_error: 'Je třeba zadat hodnotu alespoň {0}',
  max_validation_error: 'Měla by být zadána hodnota nejvýše {0}',
  min_length_validation_error: 'Záznam by měl mít alespoň {0} znaků',
  max_length_validation_error: 'Záznam by neměl mít více než {0} znaků',
  email_validation_error: 'Je třeba zadat platnou e-mailovou adresu',
  pattern_validation_error: 'Položka neodpovídá požadovanému vzoru',
  mask_validation_error: 'Je třeba vyplnit všechny povinné pozice',
  url_validation_error: 'Je třeba zadat platnou adresu URL',
  disabled_date_validation_error: 'Zadaná hodnota {0} spadá do rozsahu zakázaných dat',
  step_validation_error: 'Hodnota neodpovídá omezení kroku',
} satisfies Required<IValidationResourceStrings>;
