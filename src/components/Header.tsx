import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-base-50/90 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-base-950 flex items-center justify-center font-bold text-lg text-base-50">
            S
          </div>
          <span className="font-semibold text-lg tracking-tight text-base-950">Seelo</span>
        </a>

        <div className="hidden sm:flex items-center gap-10">
          {['Features', 'Downloads'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-base-500 hover:text-base-950 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </header>
  )
}
