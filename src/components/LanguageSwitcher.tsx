import { useRef, useEffect, useState } from 'react'

const LANGUAGES = [
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
] as const

const PREFIXED = ['fr', 'it', 'en']

/**
 * Swaps the locale prefix while keeping the current page. `de` is the default
 * locale and carries no prefix, so /fr/imprint and /imprint are the same page.
 */
function localizePath(pathname: string, target: string) {
  const segments = pathname.split('/').filter(Boolean)
  if (PREFIXED.includes(segments[0])) segments.shift()
  const rest = segments.join('/')
  const prefix = target === 'de' ? '' : `/${target}`
  return rest ? `${prefix}/${rest}` : prefix || '/'
}

interface Props {
  lang: string
  /**
   * The mobile drawer parks the switcher at the bottom of the viewport, where a
   * downward list is cut off by the drawer's clip layer. `up` flips it.
   */
  placement?: 'down' | 'up'
  /**
   * The header sits on the gradient band, where the default dark trigger and
   * its muted hover both disappear. Only the trigger changes; the dropdown
   * stays a light panel in both cases.
   */
  onDark?: boolean
}

export function LanguageSwitcher({ lang, placement = 'down', onDark = false }: Props) {
  const currentLabel = LANGUAGES.find((l) => l.code === lang)?.label ?? 'DE'
  const detailsRef = useRef<HTMLDetailsElement>(null)
  // Server-rendered fallback is the locale home; hydration upgrades it to the current page.
  const [pathname, setPathname] = useState('/')

  useEffect(() => setPathname(window.location.pathname), [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (detailsRef.current && !detailsRef.current.contains(e.target as Node)) {
        detailsRef.current.open = false
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <details ref={detailsRef} className="relative">
      <summary
        className={`flex cursor-pointer list-none items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors select-none ${
          onDark ? 'text-white hover:bg-white/15' : 'hover:bg-muted'
        }`}
      >
        {/* Globe icon (inline SVG, same as lucide Globe) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
        <span>{currentLabel}</span>
      </summary>
      {/* `text-foreground` is not redundant: on the dark header the panel would
          otherwise inherit white text from the header and lose the current
          locale, which is the one item with no colour class of its own. */}
      <ul className={`absolute right-0 z-50 min-w-[6rem] rounded-md border bg-background text-foreground shadow-md py-1 ${placement === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'}`}>
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <a
              href={localizePath(pathname, l.code)}
              hrefLang={l.code}
              aria-current={lang === l.code ? 'true' : undefined}
              className={`block rounded-md px-3 py-1.5 text-sm hover:bg-muted transition-colors ${lang === l.code ? 'font-semibold' : 'text-muted-foreground'}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
