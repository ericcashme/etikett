export type Types = 'default' | 'dark'

export type CookieConsentProps = {
  type?: Types
  agreeText?: string
  onAgree: () => void
  preferenceText?: string
  disAgreeText?: string
  onDisAgree: () => void
  cookieConsentText: string
  consentModalText: string
}
