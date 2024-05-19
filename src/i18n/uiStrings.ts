import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    uk: 'Українська',
    ru: 'Русский',
    de: 'German',
    pl: 'Polski',
  },
  skipLink: {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    uk: 'Українська',
    ru: 'Русский',
    de: 'German',
    pl: 'Polski',
  },
  pageTranslationsAvailableIn: {
    en: 'This page is also available in',
    uk: 'Ця сторінка також доступна на',
    ru: 'Эта страница также доступна на',
  },
  en: {
    en: 'English',
    uk: 'Англійська',
    ru: 'Английский',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  uk: {
    en: 'Ukrainian',
    uk: 'Українська',
    ru: 'Украинский',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  ru: {
    en: 'Russian',
    uk: 'Російський',
    ru: 'Русский',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  tagHeadingSingular: {
    en: 'Tag',
    uk: 'Тег',
    ru: 'Теги',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  tagHeadingPlural: {
    en: 'Tags',
    uk: 'Теги',
    ru: 'Теги',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  postsPerTagPageDescription: {
    en: 'Posts about',
    uk: 'Пости про',
    ru: 'Посты о',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  personProfilePageDescription: {
    en: 'Profile of',
    uk: 'Профіль',
    ru: 'Профиль',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  pageNotFoundHeading: {
    en: 'Page not found',
    uk: 'Сторінка не знайдена',
    ru: 'Страница не найдена',
    es: 'Español',
    fr: 'Français',
    de: 'German',
    pl: 'Polski',
  },
  pageNotFoundBody: {
    en: '404!',
    uk: '404!',
    ru: '404!',
    es: '404!',
    de: '404!',
    pl: '404!',
    fr: '404!',
  },
}