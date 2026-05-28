import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    number: '01',
    title: 'Real-time preview',
    desc: 'See changes instantly as you design. Sub-millisecond latency, zero compromise.',
  },
  {
    number: '02',
    title: 'Team collaboration',
    desc: 'Share previews with your team. Collect and resolve feedback in one place.',
  },
  {
    number: '03',
    title: 'Version history',
    desc: 'Every change is tracked. Compare, restore, or branch any iteration.',
  },
  {
    number: '04',
    title: 'Plugin ecosystem',
    desc: 'Extend with community plugins or build your own custom integrations.',
  },
  {
    number: '05',
    title: 'Export anything',
    desc: 'Export to PNG, SVG, PDF, or generate production-ready React components.',
  },
  {
    number: '06',
    title: 'Lightning fast',
    desc: 'Zero bloat, instant startup. Built for speed, designed for focus.',
  },
]

function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''}`}
    >
      <span className="text-3xl font-bold text-base-200 group-hover:text-base-300 transition-colors duration-500">
        {f.number}
      </span>
      <h3 className="text-lg font-semibold text-base-900 mt-3 mb-2">{f.title}</h3>
      <p className="text-sm text-base-500 leading-relaxed">{f.desc}</p>
    </div>
  )
}

export default function Features() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="features" className="py-32 md:py-44 bg-base-50 relative">
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-base-950 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-2xl mb-24 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="text-xs uppercase tracking-[0.15em] text-base-400 mb-5 block">
            Features
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05]">
            Everything you need to ship better designs.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((f, i) => (
            <FeatureCard key={f.number} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
