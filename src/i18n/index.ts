import en from './locales/en/messages.json';
import pt from './locales/pt/messages.json';
import es from './locales/es/messages.json';

export const translations = {
  en,
  pt,
  es
} satisfies Record<string, Record<string, Record<string, string>>>;

export type SupportedLanguage = keyof typeof translations;

export const defaultLanguage: SupportedLanguage = 'pt';

export type TranslationNamespaces = keyof typeof en;

export type TranslationKey<N extends TranslationNamespaces = TranslationNamespaces> = keyof typeof en[N];

export const getTranslation = <N extends TranslationNamespaces>(
  namespace: N,
  key: TranslationKey<N>,
  locale: SupportedLanguage = defaultLanguage
): string => {
  const localeNamespaces = translations[locale] ?? {};
  const namespaceEntries = localeNamespaces[namespace];
  if (namespaceEntries && typeof namespaceEntries === 'object') {
    const stringMap = namespaceEntries as Record<string, string>;
    const value = stringMap[key as string];
    if (value) {
      return value;
    }
  }

  const fallbackNamespaces = translations[defaultLanguage] ?? {};
  const fallbackEntries = fallbackNamespaces[namespace];
  if (fallbackEntries && typeof fallbackEntries === 'object') {
    const fallbackMap = fallbackEntries as Record<string, string>;
    const fallbackValue = fallbackMap[key as string];
    if (fallbackValue) {
      return fallbackValue;
    }
  }

  return `${namespace}.${String(key)}`;
};