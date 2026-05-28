export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-50">
      <div className="absolute inset-0 bg-gradient-to-b from-base-100/50 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-100/80 border border-base-200 text-base-500 text-xs mb-10 animate-fade-in backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-base-500 animate-pulse" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-base-950 leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
          From Figma to
          <br />
          <span className="text-base-400">interactive preview.</span>
          <br />
          Instantly.
        </h1>

        <p className="text-base md:text-lg text-base-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Connect your Figma designs and see them come alive as interactive previews. 
          Share with anyone — no account needed, no exporting, no hassle.
        </p>

        <div className="flex items-center justify-center animate-fade-in-up">
          <button onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-full bg-base-950 text-base-50 font-semibold text-base transition-all duration-300 hover:bg-base-900 hover:shadow-xl active:scale-[0.97]">
            Download for free
          </button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-10 text-base-400 text-xs animate-fade-in-up">
          <span>Works with Figma</span>
          <span className="w-px h-3 bg-base-200" />
          <span>Desktop + Plugin</span>
          <span className="w-px h-3 bg-base-200" />
          <span>Self-hostable</span>
        </div>
      </div>
    </section>
  )
}
