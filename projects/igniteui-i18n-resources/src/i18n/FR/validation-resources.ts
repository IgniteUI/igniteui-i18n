import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * French resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsFR: IValidationResourceStrings = {
  required_validation_error: 'Ce champ est obligatoire',
  min_validation_error: 'Veuillez entrer une valeur supérieure ou égale à {0}',
  max_validation_error: 'Veuillez entrer une valeur inférieure ou égale à {0}',
  min_length_validation_error: 'Veuillez entrer au moins {0} caractères',
  max_length_validation_error: 'Veuillez sélectionner au maximum {0} caractères',
  email_validation_error: 'Une adresse e-mail valide doit être saisie',
  pattern_validation_error: 'La valeur entrée ne correspond pas au schéma requis',
  mask_validation_error: 'Toutes les positions requises doivent être remplies',
  url_validation_error: 'Une adresse URL valide doit être saisie',
  disabled_date_validation_error: 'La valeur saisie {0} se trouve dans la plage de dates désactivées',
  step_validation_error: 'La valeur ne respecte pas la contrainte de pas',
} satisfies Required<IValidationResourceStrings>;
