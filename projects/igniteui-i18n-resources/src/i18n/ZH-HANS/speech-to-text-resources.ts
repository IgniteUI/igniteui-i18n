import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Simplified Chinese (zh-Hans) resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsZHHANS: ISpeechToTextResourceStrings = {
  speech_to_text_start: '开始语音输入',
  speech_to_text_stop: '停止语音输入',
  speech_to_text_unsupported: '此浏览器不支持语音输入',
  speech_to_text_listening: '正在聆听',
  speech_to_text_stopped: '语音输入已停止',
  speech_to_text_error: '语音输入失败',
  speech_to_text_error_not_allowed: '不允许语音输入',
  speech_to_text_error_no_speech: '未检测到语音',
  speech_to_text_error_audio_capture: '麦克风不可用',
  speech_to_text_error_network: '无法访问语音服务',
  speech_to_text_error_language_not_supported: '不支持该语音的语言',
} satisfies Required<ISpeechToTextResourceStrings>;
