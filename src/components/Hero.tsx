export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-50">
      <div className="glow -top-40 -right-40 opacity-60 animate-float" />
      <div className="glow -bottom-40 -left-40 opacity-40 animate-float" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-100/80 border border-base-200 text-base-500 text-xs mb-10 animate-fade-in backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-base-950 leading-[1.05] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          From Figma to
          <br />
          <span className="text-base-400">interactive preview.</span>
          <br />
          Instantly.
        </h1>

        <p className="text-base md:text-lg text-base-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Connect your Figma designs and see them come alive as interactive previews.
          Share with anyone &mdash; no account needed, no exporting, no hassle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-base transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97]"
          >
            Download for free
          </button>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full text-base-500 text-base font-medium hover:text-base-950 hover:bg-base-100/80 transition-all duration-300 active:scale-[0.97]"
          >
            See how it works &rarr;
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-10 text-base-400 text-xs animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="flex items-center gap-2">
            <svg className="size-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M4.75 3a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75H4.75ZM6 5.5h12v6H6v-6Zm0 7.5h12v2.5H6V13Zm0 4h12v1.5H6V17Z"/></svg>
            Works with Figma
          </span>
          <span className="w-px h-3 bg-base-300" />
          <span className="flex items-center gap-2">
            <svg className="size-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM12.75 3.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM19.875 3.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM5.625 9.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM12.75 9.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM19.875 9.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM5.625 15.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM12.75 15.75a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Z"/></svg>
            Desktop + Plugin
          </span>
          <span className="w-px h-3 bg-base-300" />
          <span className="flex items-center gap-2">
            <svg className="size-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 0 1-.416 1.374H12.75V21h-1.5V9.75H3.584a.75.75 0 0 1-.416-1.374l9-6Z"/></svg>
            Self-hostable
          </span>
        </div>
      </div>
    </section>
  )
}
