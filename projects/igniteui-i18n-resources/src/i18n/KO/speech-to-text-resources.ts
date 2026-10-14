import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Korean resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsKO: ISpeechToTextResourceStrings = {
  speech_to_text_start: '음성 입력 시작',
  speech_to_text_stop: '음성 입력 중지',
  speech_to_text_unsupported: '이 브라우저에서는 음성 입력이 지원되지 않습니다',
  speech_to_text_listening: '듣는 중',
  speech_to_text_stopped: '음성 입력이 중지되었습니다',
  speech_to_text_error: '음성 입력에 실패했습니다',
  speech_to_text_error_not_allowed: '음성 입력이 허용되지 않습니다',
  speech_to_text_error_no_speech: '음성이 감지되지 않았습니다',
  speech_to_text_error_audio_capture: '마이크를 사용할 수 없습니다',
  speech_to_text_error_network: '음성 서비스에 연결할 수 없습니다',
  speech_to_text_error_language_not_supported: '음성 언어가 지원되지 않습니다',
} satisfies Required<ISpeechToTextResourceStrings>;
