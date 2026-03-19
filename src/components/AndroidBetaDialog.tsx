import { useState, useEffect, useCallback } from 'react'

const MAILTO =
  'mailto:support@coltivio.ch?subject=Android%20Beta%20Test&body=Hallo%2C%20bitte%20freischalten%20f%C3%BCr%20Android%20Test%2C%20hier%20mein%20PlayStore%20Google%20Account%20Email%20%3C%3D%3D%3D%20bitte%20Email%20angeben%20%3D%3D%3D%3E'

interface Props {
  label: string
  groupOption: string
  groupDesc: string
  downloadTitle: string
  emailOption: string
  emailDesc: string
  issues: string
  className?: string
}

export function AndroidBetaDialog({ label, groupOption, groupDesc, downloadTitle, emailOption, emailDesc, issues, className }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className ?? 'inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium hover:bg-muted transition-colors'}
      >
        {label}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" onClick={close} />
          <div className="fixed inset-0 z-51 flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg rounded-xl border bg-background shadow-xl flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b px-6 py-4 shrink-0">
                <h2 className="text-lg font-semibold">Android Beta</h2>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="rounded-md p-1.5 hover:bg-muted transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto px-6 py-6 space-y-6">
                {/* Option 1 — Google Group */}
                <div className="space-y-3">
                  <p className="font-medium">{groupOption}</p>
                  <p className="text-sm text-muted-foreground">{groupDesc}</p>
                  <a
                    href="https://groups.google.com/g/coltivio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    coltivio@googlegroups.com →
                  </a>
                  <img
                    src="/screenshots/android-beta-group.png"
                    alt="Google Group join instructions"
                    className="w-full rounded-lg border"
                  />
                </div>

                <div className="border-t" />

                {/* Play Store link */}
                <div className="space-y-2">
                  <p className="font-medium">{downloadTitle}</p>
                  <a
                    href="https://play.google.com/store/apps/details?id=ch.agricoltivio.coltivio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Google Play Store →
                  </a>
                </div>

                <div className="border-t" />

                {/* Option 2 — Email */}
                <div className="space-y-3">
                  <p className="font-medium">{emailOption}</p>
                  <p className="text-sm text-muted-foreground">{emailDesc}</p>
                  <a
                    href={MAILTO}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    support@coltivio.ch →
                  </a>
                </div>

                <div className="border-t" />

                {/* Issues */}
                <p className="text-sm text-muted-foreground">{issues}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
