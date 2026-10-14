import type { ISpeechToTextResourceStrings } from 'igniteui-i18n-core';

/**
 * Swedish resource strings for Ignite UI Speech to Text
 */
export const SpeechToTextResourceStringsSV: ISpeechToTextResourceStrings = {
  speech_to_text_start: 'Starta röstinmatning',
  speech_to_text_stop: 'Stoppa röstinmatning',
  speech_to_text_unsupported: 'Röstinmatning stöds inte i den här webbläsaren',
  speech_to_text_listening: 'Lyssnar',
  speech_to_text_stopped: 'Röstinmatningen stoppades',
  speech_to_text_error: 'Röstinmatningen misslyckades',
  speech_to_text_error_not_allowed: 'Röstinmatning är inte tillåten',
  speech_to_text_error_no_speech: 'Inget tal identifierades',
  speech_to_text_error_audio_capture: 'Mikrofonen är inte tillgänglig',
  speech_to_text_error_network: 'Det går inte att nå taltjänsten',
  speech_to_text_error_language_not_supported: 'Talets språk stöds inte',
} satisfies Required<ISpeechToTextResourceStrings>;
