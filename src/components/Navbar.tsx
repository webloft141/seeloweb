import { useState, useEffect } from 'react'

const navItems = ['Features', 'Downloads', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base-50/90 backdrop-blur-xl border-b border-base-200' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-base-950 flex items-center justify-center font-bold text-lg text-base-50">
            S
          </div>
          <span className="font-semibold text-lg tracking-tight text-base-900">Seelo</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-base-500 hover:text-base-900 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="px-6 py-2.5 rounded-full bg-base-950 text-base-50 text-sm font-medium hover:bg-base-900 transition-all duration-300 active:scale-[0.97]">
          Get Started
        </button>
      </div>
    </nav>
  )
}
