import type { IValidationResourceStrings } from '../../interfaces/validation.interface';

export const ValidationResourceStringsEN: IValidationResourceStrings = {
    required_validation_error: 'This field is required',
    min_validation_error: 'A value of at least {0} should be entered',
    max_validation_error: 'A value no more than {0} should be entered',
    min_length_validation_error: 'Entry should be at least {0} character(s) long',
    max_length_validation_error: 'Entry should be no more than {0} character(s) long',
    email_validation_error: 'A valid email address should be entered',
    pattern_validation_error: 'Entry does not match the required pattern',
    mask_validation_error: 'All required positions should be filled',
    url_validation_error: 'A valid url address should be entered',
    disabled_date_validation_error: 'The entered value {0} is within the disabled dates range'
} satisfies MakeRequired<IValidationResourceStrings>;
