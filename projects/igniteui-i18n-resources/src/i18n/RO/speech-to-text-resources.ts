import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Romanian resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsRO: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Porniți introducerea vocală',
  speech_to_text_stop: 'Opriți introducerea vocală',
  speech_to_text_unsupported: 'Introducerea vocală nu este acceptată în acest browser',
  speech_to_text_listening: 'Se ascultă',
  speech_to_text_stopped: 'Introducerea vocală s-a oprit',
  speech_to_text_error: 'Introducerea vocală a eșuat',
  speech_to_text_error_not_allowed: 'Introducerea vocală nu este permisă',
  speech_to_text_error_no_speech: 'Nu a fost detectată vorbire',
  speech_to_text_error_audio_capture: 'Microfonul nu este disponibil',
  speech_to_text_error_network: 'Serviciul de vorbire nu poate fi accesat',
  speech_to_text_error_language_not_supported: 'Limba vorbită nu este acceptată',
} satisfies Required<ISpeechToTextResourceStrings>;
