import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Downloads', href: '#downloads' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
          <img src="/logo.png" alt="Seelo" className="size-9" />
          <span className="font-semibold text-lg tracking-tight text-base-950">Seelo</span>
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
      </div>
    </header>
  )
}
