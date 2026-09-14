import { useState, useCallback } from 'react'
import { statutenText } from '@/i18n/statuten'
import type { Locale } from '@/i18n/translations'
import { useDialog } from '@/lib/useDialog'
import { buttonClass, type ButtonVariant } from '@/lib/button'

interface Props {
  lang: string
  linkLabel: string
  closeLabel: string
  /**
   * The trigger appears twice: once on the white page and once on the
   * membership band, where the light outline variant would be a white block.
   * The dialog itself is a light panel in both cases.
   */
  variant?: ButtonVariant
}

export function StatutenDialog({ lang, linkLabel, closeLabel, variant = 'secondary' }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const locale = (lang in statutenText ? lang : 'de') as Locale
  const { title, text } = statutenText[locale]

  const close = useCallback(() => setIsOpen(false), [])
  const dialogRef = useDialog<HTMLDivElement>(isOpen, close)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={buttonClass(variant)}
      >
        {linkLabel}
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            aria-hidden="true"
            onClick={close}
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="statuten-title"
            className="fixed inset-0 z-[51] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-xl border bg-background shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b px-6 py-4 shrink-0">
                <h2 id="statuten-title" className="text-lg font-semibold">{title}</h2>
                <button
                  onClick={close}
                  aria-label={closeLabel}
                  className="rounded-md p-1.5 hover:bg-muted transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Scrollable text body */}
              <div className="overflow-y-auto px-6 py-5">
                <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground leading-relaxed">
                  {text}
                </pre>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
