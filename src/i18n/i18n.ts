export type Locale = 'en' | 'de' | 'es' | 'fr' | 'ru' | 'uk' | 'pl' | string

interface Fallback {
  [key: string]: string
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string
  }
}

export const defaultLocale: string = 'en'

export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  uk: 'Українська',
  ru: 'Русский',
  de: 'German',
  pl: 'Polski',
}

export const LOCALES = {
  en: 'en-GB',
  es: 'es-ES',
  fr: 'fr-FR',
  uk: 'uk-UA',
  ru: 'ru-UA',
  de: 'de-DE',
  pl: 'pl-PL',
}

export const locales = ['en', 'de', 'fr', 'uk', 'ru', 'es', 'pl']
export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)
export const DEFAULT_LANGUAGE = 'en'
export const DEFAULT_LOCALES = 'en-GB'
export const DEFAULT_LANG = 'English'
export const currentLocale = Object.keys(LANGUAGES)[0]

export const collectionDirectoryNames: PathNames = {
  blog: {
    en: 'blog',
    uk: 'blog',
    ru: 'blog',
    es: 'blog',
    fr: 'blog',
    de: 'blog',
    pl: 'blog',
  },
  work: {
    en: 'work',
    uk: 'work',
    ru: 'work',
    es: 'work',
    fr: 'work',
    de: 'work',
    pl: 'work',
  },
  projects: {
    en: 'projects',
    uk: 'projects',
    ru: 'projects',
    es: 'projects',
    fr: 'projects',
    de: 'projects',
    pl: 'projects',
  },
}
export const directoryNames: PathNames = {
  // Define the path for the tag pages (tags list, posts per tag).
  tags: {
    en: 'tag',
    uk: 'tag',
    ru: 'tag',
    es: 'tag',
    fr: 'tag',
    de: 'tag',
    pl: 'tag',
  },
  // Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
  people: {
    en: 'about',
    uk: 'about',
    ru: 'about',
    es: 'about',
    fr: 'about',
    de: 'about',
    pl: 'about',
  },
}

export const fallback: Fallback = {
  locale: defaultLocale,
}
