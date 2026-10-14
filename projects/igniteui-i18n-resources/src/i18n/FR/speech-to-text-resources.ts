import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * French resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsFR: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Démarrer la saisie vocale',
  speech_to_text_stop: 'Arrêter la saisie vocale',
  speech_to_text_unsupported: 'La saisie vocale n’est pas prise en charge par ce navigateur',
  speech_to_text_listening: 'Écoute en cours',
  speech_to_text_stopped: 'Saisie vocale arrêtée',
  speech_to_text_error: 'Échec de la saisie vocale',
  speech_to_text_error_not_allowed: 'La saisie vocale n’est pas autorisée',
  speech_to_text_error_no_speech: 'Aucune parole détectée',
  speech_to_text_error_audio_capture: 'Le microphone n’est pas disponible',
  speech_to_text_error_network: 'Le service vocal est inaccessible',
  speech_to_text_error_language_not_supported: 'La langue parlée n’est pas prise en charge',
} satisfies Required<ISpeechToTextResourceStrings>;
