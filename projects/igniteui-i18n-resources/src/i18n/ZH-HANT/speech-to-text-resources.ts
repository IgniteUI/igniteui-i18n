import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Traditional Chinese (zh-Hant) resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsZHHANT: ISpeechToTextResourceStrings = {
  speech_to_text_start: '開始語音輸入',
  speech_to_text_stop: '停止語音輸入',
  speech_to_text_unsupported: '此瀏覽器不支援語音輸入',
  speech_to_text_listening: '正在聆聽',
  speech_to_text_stopped: '語音輸入已停止',
  speech_to_text_error: '語音輸入失敗',
  speech_to_text_error_not_allowed: '不允許語音輸入',
  speech_to_text_error_no_speech: '未偵測到語音',
  speech_to_text_error_audio_capture: '無法使用麥克風',
  speech_to_text_error_network: '無法連線至語音服務',
  speech_to_text_error_language_not_supported: '不支援該語音的語言',
} satisfies Required<ISpeechToTextResourceStrings>;
