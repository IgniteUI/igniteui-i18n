import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Japanese resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsJA: ISpeechToTextResourceStrings = {
  speech_to_text_start: '音声入力を開始',
  speech_to_text_stop: '音声入力を停止',
  speech_to_text_unsupported: 'このブラウザーでは音声入力がサポートされていません',
  speech_to_text_listening: '聞き取り中',
  speech_to_text_stopped: '音声入力を停止しました',
  speech_to_text_error: '音声入力に失敗しました',
  speech_to_text_error_not_allowed: '音声入力が許可されていません',
  speech_to_text_error_no_speech: '音声が検出されませんでした',
  speech_to_text_error_audio_capture: 'マイクを使用できません',
  speech_to_text_error_network: '音声サービスに接続できません',
  speech_to_text_error_language_not_supported: '音声の言語はサポートされていません',
} satisfies Required<ISpeechToTextResourceStrings>;
