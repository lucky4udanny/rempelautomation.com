export type FormStatus = 'idle' | 'submitting' | 'sent' | 'failed' | 'invalid'

export interface ContactFieldErrors {
  name?: string
  operation?: string
  email?: string
  jobThatHurts?: string
  message?: string
}
