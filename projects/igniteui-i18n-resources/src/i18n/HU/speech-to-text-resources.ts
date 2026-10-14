import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Hungarian resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsHU: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Hangbevitel indítása',
  speech_to_text_stop: 'Hangbevitel leállítása',
  speech_to_text_unsupported: 'Ez a böngésző nem támogatja a hangbevitelt',
  speech_to_text_listening: 'Figyelés',
  speech_to_text_stopped: 'Hangbevitel leállítva',
  speech_to_text_error: 'A hangbevitel sikertelen',
  speech_to_text_error_not_allowed: 'A hangbevitel nem engedélyezett',
  speech_to_text_error_no_speech: 'Nem észlelhető beszéd',
  speech_to_text_error_audio_capture: 'A mikrofon nem érhető el',
  speech_to_text_error_network: 'A beszédszolgáltatás nem érhető el',
  speech_to_text_error_language_not_supported: 'A beszéd nyelve nem támogatott',
} satisfies Required<ISpeechToTextResourceStrings>;
