import { DEFAULT_LOCALES, locales } from './i18n'

export function getLocaleFromUrl(url: string | undefined): string | undefined {
  if (url === undefined) return undefined
  const parts = url.split('/').filter(el => el !== '')
  let match = ''
  parts.forEach(part => {
    if (locales.includes(part)) match = part
  })
  if (match) return match
  return DEFAULT_LOCALES
}

export function localeIsInUrl(locale: string, url: string): boolean {
  return url
    .split('/')
    .filter(el => el !== '')
    .includes(locale)
}

export async function getStaticPaths(pages: any[]): Promise<any[]> {
  return pages.map(page => ({
    params: { slug: page.slug },
    props: { page },
  }))
}
