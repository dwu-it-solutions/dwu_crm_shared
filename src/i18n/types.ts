import { translations } from './index';

type LocaleMap = typeof translations;
type AnyLocale = LocaleMap[keyof LocaleMap];

export type SupportedLanguage = keyof LocaleMap;
export type TranslationNamespaces = keyof AnyLocale;
export type TranslationKey<N extends TranslationNamespaces = TranslationNamespaces> = keyof AnyLocale[N];
