export const langToFlag: Record<string, string> = {
  // Common
  en: '🇺🇸',
  ru: '🇷🇺',
  uk: '🇺🇦',
  ua: '🇺🇦',
  pl: '🇵🇱',
  be: '��',
  kk: '��',

  // European
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  pt: '🇵🇹',
  nl: '🇳🇱',
  sv: '🇸🇪',
  no: '🇳🇴',
  da: '🇩🇰',
  fi: '🇫🇮',
  el: '🇬🇷',
  cs: '🇨🇿',
  hu: '🇭🇺',
  ro: '🇷🇴',
  bg: '🇧🇬',
  sr: '�🇸',
  sk: '🇸🇰',
  hr: '🇭�',

  // Asian
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
  hi: '🇮🇳',
  tr: '🇹🇷',
  vi: '🇻🇳',
  th: '🇹🇭',
  id: '🇮�',

  // Middle East
  ar: '🇸🇦',
  he: '🇮🇱',
  fa: '🇮�🇷',
};

export function getLangFlag(lang: string = 'en') {
  return langToFlag[lang.toLowerCase()] || '🌐';
}
