import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Traditional Chinese (zh-Hant) resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsZHHANT: IValidationResourceStrings = {
  required_validation_error: '此欄位為必填項',
  min_validation_error: '必須輸入至少 {0} 的值',
  max_validation_error: '必須輸入不超過 {0} 的值',
  min_length_validation_error: '輸入內容必須至少 {0} 個字元',
  max_length_validation_error: '輸入內容不得超過 {0} 個字元',
  email_validation_error: '必須輸入有效的電子郵件地址',
  pattern_validation_error: '輸入的內容不符合要求的格式',
  mask_validation_error: '必須填寫所有必填位置',
  url_validation_error: '必須輸入有效的 URL 位址',
  disabled_date_validation_error: '輸入的值 {0} 位於停用日期範圍內',
  step_validation_error: '值不符合間隔限制',
} satisfies Required<IValidationResourceStrings>;
