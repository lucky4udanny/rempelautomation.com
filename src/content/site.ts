export const companyName = 'Rempel Automation'
export const contactEmail = 'info@rempelautomation.com'
export const region = 'southwestern Ontario'

export const defaultSiteUrl = 'https://rempelautomation.com'

export function siteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL || defaultSiteUrl
  return raw.replace(/\/+$/, '')
}

export function absoluteUrl(path: string): string {
  if (path === '/') {
    return `${siteUrl()}/`
  }
  return `${siteUrl()}${path}`
}

export const industryPhotoCaption =
  'Industry photography, not a Rempel Automation client.'
