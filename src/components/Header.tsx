import { useState, useEffect } from 'react'
import { useTheme } from '../lib/ThemeContext'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Downloads', href: '#downloads' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-base-50/85 backdrop-blur-xl shadow-xs' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="size-10 rounded-xl bg-base-950 flex items-center justify-center font-bold text-lg text-base-50 transition-colors">
            S
          </div>
          <span className="font-semibold text-lg tracking-tight text-base-950 transition-colors">Seelo</span>
        </a>

        <div className="hidden sm:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-base-500 hover:text-base-950 transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggle}
          className="size-10 rounded-xl bg-base-100 hover:bg-base-200 flex items-center justify-center text-base-500 hover:text-base-950 transition-all duration-300 active:scale-90"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
