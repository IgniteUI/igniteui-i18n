import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Korean resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsKO: IValidationResourceStrings = {
  required_validation_error: '이 필드는 필수입니다',
  min_validation_error: '최소 {0} 의 값을 입력해야합니다',
  max_validation_error: '{0} 이하의 값을 입력해야합니다',
  min_length_validation_error: '항목은 {0} 자 이상이어야합니다',
  max_length_validation_error: '항목은 {0} 자 이상이어야합니다',
  email_validation_error: '유효한 이메일 주소를 입력해야합니다',
  pattern_validation_error: '항목이 필요한 패턴과 일치하지 않습니다',
  mask_validation_error: '모든 필수 위치를 채워야 합니다',
  url_validation_error: '유효한 URL 주소를 입력해야 합니다',
  disabled_date_validation_error: '입력한 값 {0}이(가) 비활성화된 날짜 범위에 있습니다',
  step_validation_error: '값이 단계 제약 조건에 맞지 않습니다',
} satisfies Required<IValidationResourceStrings>;
