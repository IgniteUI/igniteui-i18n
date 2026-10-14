import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Simplified Chinese (zh-Hans) resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsZHHANS: IValidationResourceStrings = {
  required_validation_error: '此字段为必填项',
  min_validation_error: '至少应输入 {0} 的值',
  max_validation_error: '必须输入不超过 {0} 的值',
  min_length_validation_error: '输入项的字符长度至少应为 {0} 个字符',
  max_length_validation_error: '输入项的字符不得超过 {0} 个字符',
  email_validation_error: '必须输入有效的电子邮件地址',
  pattern_validation_error: '输入项与要求的模式不匹配',
  mask_validation_error: '必须填写所有必填位置',
  url_validation_error: '必须输入有效的 URL 地址',
  disabled_date_validation_error: '输入的值 {0} 位于禁用日期范围内',
  step_validation_error: '值不符合步长约束',
} satisfies Required<IValidationResourceStrings>;
