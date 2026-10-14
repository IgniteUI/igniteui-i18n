import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Spanish resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsES: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Iniciar entrada de voz',
  speech_to_text_stop: 'Detener entrada de voz',
  speech_to_text_unsupported: 'La entrada de voz no es compatible con este navegador',
  speech_to_text_listening: 'Escuchando',
  speech_to_text_stopped: 'Entrada de voz detenida',
  speech_to_text_error: 'Error en la entrada de voz',
  speech_to_text_error_not_allowed: 'La entrada de voz no está permitida',
  speech_to_text_error_no_speech: 'No se detectó voz',
  speech_to_text_error_audio_capture: 'El micrófono no está disponible',
  speech_to_text_error_network: 'No se puede acceder al servicio de voz',
  speech_to_text_error_language_not_supported: 'El idioma de la voz no es compatible',
} satisfies Required<ISpeechToTextResourceStrings>;
