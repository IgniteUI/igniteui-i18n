import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Danish resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsDA: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Start stemmeinput',
  speech_to_text_stop: 'Stop stemmeinput',
  speech_to_text_unsupported: 'Stemmeinput understøttes ikke i denne browser',
  speech_to_text_listening: 'Lytter',
  speech_to_text_stopped: 'Stemmeinput stoppet',
  speech_to_text_error: 'Stemmeinput mislykkedes',
  speech_to_text_error_not_allowed: 'Stemmeinput er ikke tilladt',
  speech_to_text_error_no_speech: 'Der blev ikke registreret tale',
  speech_to_text_error_audio_capture: 'Mikrofonen er ikke tilgængelig',
  speech_to_text_error_network: 'Taletjenesten kan ikke nås',
  speech_to_text_error_language_not_supported: 'Talens sprog understøttes ikke',
} satisfies Required<ISpeechToTextResourceStrings>;
