import type { IValidationResourceStrings } from 'igniteui-i18n-core';

/**
 * Japanese resource strings for validation, used by Ignite UI components.
 */
export const ValidationResourceStringsJA: IValidationResourceStrings = {
  required_validation_error: 'このフィールドは必須フィールドです。',
  min_validation_error: '{0} 以上の値を入力してください',
  max_validation_error: '{0} 以下の値を入力してください',
  min_length_validation_error: '入力の長さは少なくとも {0} 文字である必要があります',
  max_length_validation_error: '入力の長さは {0} 文字以下である必要があります',
  email_validation_error: '有効なメール アドレスを入力してください',
  pattern_validation_error: '入力が所定のパターンに一致しません',
  mask_validation_error: '必須の位置をすべて入力してください',
  url_validation_error: '有効な URL を入力してください',
  disabled_date_validation_error: '入力された値 {0} は無効な日付の範囲内です',
  step_validation_error: '値がステップの制約に適合していません',
} satisfies Required<IValidationResourceStrings>;
