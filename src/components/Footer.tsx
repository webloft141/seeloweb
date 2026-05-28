export default function Footer() {
  return (
    <footer className="relative bg-base-50 border-t border-base-200 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Seelo" className="size-8" />
              <span className="text-base-950 font-semibold text-lg">Seelo</span>
            </a>
            <p className="text-sm text-base-500 leading-relaxed transition-colors">
              Preview your Figma designs before they exist.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-base-400 mb-5 transition-colors">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm text-base-500 hover:text-accent transition-all duration-300">Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-base-500 hover:text-accent transition-all duration-300">How it works</a>
                </li>
                <li>
                  <a href="#downloads" className="text-sm text-base-500 hover:text-accent transition-all duration-300">Downloads</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
          <p className="text-sm text-base-400 transition-colors">&copy; {new Date().getFullYear()} Seelo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'License'].map((link) => (
              <a key={link} href="#" className="text-sm text-base-400 hover:text-accent transition-all duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
