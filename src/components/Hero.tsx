export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-50">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-100/80 border border-base-200 text-base-500 text-xs mb-10 animate-fade-in backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-base-500 animate-pulse" />
          v2.1.0 — Latest Release
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-base-950 leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
          Preview your
          <br />
          <span className="text-base-400">designs.</span>
        </h1>

        <p className="text-base md:text-lg text-base-500 max-w-lg mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          Transform Figma designs into interactive previews. 
          Share, collaborate, and iterate in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up animation-delay-400">
          <button className="px-8 py-4 rounded-full bg-base-950 text-base-50 font-semibold text-base transition-all duration-300 hover:bg-base-900 hover:shadow-xl active:scale-[0.97]">
            Download for free
          </button>
          <button className="px-8 py-4 rounded-full text-base-500 text-base font-medium hover:text-base-900 hover:bg-base-100/80 transition-all duration-300 active:scale-[0.97] backdrop-blur-sm">
            Watch demo
          </button>
        </div>

        <div className="mt-20 flex items-center justify-center gap-8 text-base-400 text-xs animate-fade-in-up animation-delay-600">
          <span>Available for</span>
          {['Windows', 'macOS', 'Linux'].map((p, i) => (
            <span key={p} className="flex items-center gap-2">
              {i > 0 && <span className="w-px h-3 bg-base-200" />}
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
