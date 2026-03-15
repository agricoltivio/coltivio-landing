import { useState, useEffect, useCallback } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

interface NavLabels {
  features: string
  webapp: string
  membership: string
  about: string
  openApp: string
  membershipCta: string
}

interface Props {
  lang: string
  appUrl: string
  labels: NavLabels
}

function buildAuthUrl(appUrl: string, accessToken: string, refreshToken: string, redirect: string) {
  return `${appUrl}/auth/token#access_token=${encodeURIComponent(accessToken)}&refresh_token=${encodeURIComponent(refreshToken)}&redirect=${encodeURIComponent(redirect)}`
}

export function MobileNav({ lang, appUrl, labels }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [openAppHref, setOpenAppHref] = useState(appUrl)

  // Build auth-aware URL for "Open App" on mount
  useEffect(() => {
    const accessToken = sessionStorage.getItem('coltivio_access_token')
    const refreshToken = sessionStorage.getItem('coltivio_refresh_token')
    if (accessToken && refreshToken) {
      setOpenAppHref(buildAuthUrl(appUrl, accessToken, refreshToken, '/dashboard'))
    }
  }, [appUrl])

  const close = useCallback(() => setIsOpen(false), [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        className="lg:hidden flex items-center justify-center rounded-md p-1.5 hover:bg-muted transition-colors"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Drawer — z-[51] so it sits above the overlay */}
      <div
        className={`fixed top-0 right-0 z-51 h-screen w-72 bg-background shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <div className="flex items-center justify-end p-4 border-b">
          <button
            className="flex items-center justify-center rounded-md p-1.5 hover:bg-muted transition-colors"
            aria-label="Close menu"
            onClick={close}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav anchor links */}
        <nav className="flex flex-col p-4 gap-1">
          {([
            { href: '#features', label: labels.features },
            { href: '#webapp', label: labels.webapp },
            { href: '#membership', label: labels.membership },
            { href: '#about', label: labels.about },
          ] as const).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 rounded text-sm font-medium hover:bg-muted transition-colors"
              onClick={close}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="border-t mx-4" />

        {/* Open App link */}
        <div className="p-4 flex flex-col gap-2">
          <a
            href={openAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded text-sm font-medium hover:bg-muted transition-colors"
            onClick={close}
          >
            {labels.openApp}
          </a>
        </div>

        {/* Language switcher */}
        <div className="px-4 pb-4 mt-auto">
          <div className="border-t pt-4">
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </div>
    </>
  )
}
