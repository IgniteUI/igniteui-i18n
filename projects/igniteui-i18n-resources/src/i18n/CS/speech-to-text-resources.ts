import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Czech resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsCS: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Spustit hlasový vstup',
  speech_to_text_stop: 'Zastavit hlasový vstup',
  speech_to_text_unsupported: 'Hlasový vstup není v tomto prohlížeči podporován',
  speech_to_text_listening: 'Poslouchám',
  speech_to_text_stopped: 'Hlasový vstup zastaven',
  speech_to_text_error: 'Hlasový vstup selhal',
  speech_to_text_error_not_allowed: 'Hlasový vstup není povolen',
  speech_to_text_error_no_speech: 'Nebyla zjištěna žádná řeč',
  speech_to_text_error_audio_capture: 'Mikrofon není k dispozici',
  speech_to_text_error_network: 'Služba rozpoznávání řeči není dostupná',
  speech_to_text_error_language_not_supported: 'Jazyk řeči není podporován',
} satisfies Required<ISpeechToTextResourceStrings>;
