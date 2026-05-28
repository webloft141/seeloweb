export default function Footer() {
  return (
    <footer className="bg-base-50 border-t border-base-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="size-9 rounded-xl bg-base-950 flex items-center justify-center font-bold text-sm text-base-50">
                S
              </div>
              <span className="text-base-950 font-semibold text-lg">Seelo</span>
            </a>
            <p className="text-sm text-base-500 leading-relaxed">
              Preview your Figma designs before they exist.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            {[
              { title: 'Product', links: ['Features', 'Downloads', 'Changelog', 'Roadmap'] },
              { title: 'Resources', links: ['Documentation', 'API', 'Community', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="text-xs uppercase tracking-[0.15em] text-base-400 mb-5">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-base-500 hover:text-base-900 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-400">&copy; {new Date().getFullYear()} Seelo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'License'].map((link) => (
              <a key={link} href="#" className="text-sm text-base-400 hover:text-base-700 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
