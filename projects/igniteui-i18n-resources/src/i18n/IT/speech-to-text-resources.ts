import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Italian resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsIT: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Avvia input vocale',
  speech_to_text_stop: 'Interrompi input vocale',
  speech_to_text_unsupported: 'L’input vocale non è supportato in questo browser',
  speech_to_text_listening: 'In ascolto',
  speech_to_text_stopped: 'Input vocale interrotto',
  speech_to_text_error: 'Input vocale non riuscito',
  speech_to_text_error_not_allowed: 'L’input vocale non è consentito',
  speech_to_text_error_no_speech: 'Nessun parlato rilevato',
  speech_to_text_error_audio_capture: 'Il microfono non è disponibile',
  speech_to_text_error_network: 'Il servizio vocale non è raggiungibile',
  speech_to_text_error_language_not_supported: 'La lingua parlata non è supportata',
} satisfies Required<ISpeechToTextResourceStrings>;
