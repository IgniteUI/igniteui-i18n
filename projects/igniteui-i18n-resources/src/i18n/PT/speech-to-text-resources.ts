import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Portuguese resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsPT: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Iniciar entrada de voz',
  speech_to_text_stop: 'Parar entrada de voz',
  speech_to_text_unsupported: 'A entrada de voz não é suportada neste browser',
  speech_to_text_listening: 'A ouvir',
  speech_to_text_stopped: 'Entrada de voz parada',
  speech_to_text_error: 'A entrada de voz falhou',
  speech_to_text_error_not_allowed: 'A entrada de voz não é permitida',
  speech_to_text_error_no_speech: 'Não foi detetada fala',
  speech_to_text_error_audio_capture: 'O microfone não está disponível',
  speech_to_text_error_network: 'O serviço de voz não está acessível',
  speech_to_text_error_language_not_supported: 'O idioma da fala não é suportado',
} satisfies Required<ISpeechToTextResourceStrings>;
