import { useState, useEffect, useId } from 'react'
import { buttonClass } from '@/lib/button'
import { inputClass } from '@/lib/input'

const TURNSTILE_SITE_KEY = '0x4AAAAAACgTy04qy1vutytf'
const BREVO_ACTION =
  'https://99c7cbc2.sibforms.com/serve/MUIFAKcs-LJK_AAAjKMfi9aymTyNFXgtZ5rRXL6Ux83EyD2IrUcSDUyJWRlbhkR-b-Rv1Xt3BexoJVpNrqF7LzYleIZbyqlVvmLqBS5Ak1iO4R8ezgIbOJ1yqf3Ni-A-l3yQD4OX2zCexvUE-jUFlIlew-pyNB8MTw_qHa2y0pVqZ0lq5u17_Mkzu_stGMFIox8JPgkZc982Jer_'

interface Props {
  apiUrl: string
  lang: string
  label: string
  placeholder: string
  cta: string
  successMsg: string
  errorMsg: string
  captchaMsg: string
  /** Restyles the control colours for a gradient band. */
  onDark?: boolean
}

export function NewsletterForm({ apiUrl, lang, label, placeholder, cta, successMsg, errorMsg, captchaMsg, onDark = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'captcha'>('idle')
  const inputId = useId()

  useEffect(() => {
    if (document.querySelector('script[src*="turnstile"]')) return
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const token = new FormData(e.currentTarget).get('cf-turnstile-response') as string
    // Without a token the submit would silently do nothing, so say why instead.
    if (!token) {
      setStatus('captcha')
      return
    }

    setStatus('loading')

    try {
      const captchaRes = await fetch(`${apiUrl}/v1/captcha/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const captchaData = await captchaRes.json() as { data?: { success: boolean } }
      if (!captchaData.data?.success) throw new Error('captcha failed')

      const formData = new FormData()
      formData.append('EMAIL', email)
      formData.append('email_address_check', '')
      formData.append('locale', lang.slice(0, 2))
      await fetch(BREVO_ACTION, { method: 'POST', body: formData, mode: 'no-cors' })

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium ${onDark ? 'text-brand-mint' : 'text-primary'}`} role="status">
        {successMsg}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium">
          {label}
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            id={inputId}
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className={inputClass(false, 'max-w-xs')}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={buttonClass(onDark ? 'onBrandAccent' : 'primary', 'sm')}
          >
            {status === 'loading' ? '…' : cta}
          </button>
        </div>
      </div>
      <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme={onDark ? 'dark' : 'light'} />
      {(status === 'error' || status === 'captcha') && (
        <p className="text-sm text-destructive" role="alert">
          {status === 'captcha' ? captchaMsg : errorMsg}
        </p>
      )}
    </form>
  )
}
