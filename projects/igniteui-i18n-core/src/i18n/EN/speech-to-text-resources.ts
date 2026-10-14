import type { ISpeechToTextResourceStrings } from '../interfaces/speech-to-text.interface.js';

/**
 * English resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsEN: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Start voice input',
  speech_to_text_stop: 'Stop voice input',
  speech_to_text_unsupported: 'Voice input is not supported in this browser',
  speech_to_text_listening: 'Listening',
  speech_to_text_stopped: 'Voice input stopped',
  speech_to_text_error: 'Voice input failed',
  speech_to_text_error_not_allowed: 'Voice input is not allowed',
  speech_to_text_error_no_speech: 'No speech was detected',
  speech_to_text_error_audio_capture: 'The microphone is not available',
  speech_to_text_error_network: 'The speech service is not reachable',
  speech_to_text_error_language_not_supported: 'The language of the speech is not supported',
} satisfies Required<ISpeechToTextResourceStrings>;
