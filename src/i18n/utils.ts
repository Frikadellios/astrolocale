import { LANGUAGES } from './i18n'
import { defaultLang, languages, ui } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
}

export function changeLangFromUrl(url: URL, lang: string) {
  const newLang = lang in ui ? lang : defaultLang
  const splitUrl = url.pathname.split('/')
  splitUrl[1] = newLang
  return splitUrl.join('/').substring(1)
}

export function pathNameIsInLanguage(pathname: string, lang: keyof typeof ui) {
  return (
    pathname.startsWith(`/${lang}`) ||
    (lang === defaultLang && !pathNameStartsWithLanguage(pathname))
  )
}

function pathNameStartsWithLanguage(pathname: string) {
  let startsWithLanguage = false
  const languages = Object.keys(LANGUAGES)

  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i]
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true
      break
    }
  }

  return startsWithLanguage
}

export function getLocalizedPathname(pathname: string, lang: keyof typeof ui) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(LANGUAGES).join('|')
    const regex = new RegExp(`^\/(${availableLanguages})`)
    return pathname.replace(regex, `/${lang}`)
  }
  return `/${lang}${pathname}`
}

export { ui }
