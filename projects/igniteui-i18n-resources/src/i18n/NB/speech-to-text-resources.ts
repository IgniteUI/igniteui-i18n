import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Norwegian resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsNB: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Start taleinndata',
  speech_to_text_stop: 'Stopp taleinndata',
  speech_to_text_unsupported: 'Taleinndata støttes ikke i denne nettleseren',
  speech_to_text_listening: 'Lytter',
  speech_to_text_stopped: 'Taleinndata stoppet',
  speech_to_text_error: 'Taleinndata mislyktes',
  speech_to_text_error_not_allowed: 'Taleinndata er ikke tillatt',
  speech_to_text_error_no_speech: 'Ingen tale ble registrert',
  speech_to_text_error_audio_capture: 'Mikrofonen er ikke tilgjengelig',
  speech_to_text_error_network: 'Taletjenesten kan ikke nås',
  speech_to_text_error_language_not_supported: 'Språket i talen støttes ikke',
} satisfies Required<ISpeechToTextResourceStrings>;
