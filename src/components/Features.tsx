import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    number: '01',
    title: 'Real-time sync',
    desc: 'Edit in Figma, see changes in the preview instantly. No exporting, no uploading, no waiting.',
  },
  {
    number: '02',
    title: 'Interactive previews',
    desc: 'Transitions, hover states, overlays — everything works. Your designs behave like the real product.',
  },
  {
    number: '03',
    title: 'Share without accounts',
    desc: 'Generate a link and share with anyone. Clients and stakeholders can view previews without signing up.',
  },
  {
    number: '04',
    title: 'Figma plugin + desktop app',
    desc: 'Works as a Figma plugin and a standalone desktop app. Pick the workflow that suits you.',
  },
  {
    number: '05',
    title: 'Self-host or use cloud',
    desc: 'Use our hosted relay or self-host for complete control over your data. Your choice.',
  },
  {
    number: '06',
    title: 'Version compare',
    desc: 'Preview two versions side-by-side. See exactly what changed, down to the pixel.',
  },
]

function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`group reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''}`}
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
            Why Seelo
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05]">
            Designed for
            <br />
            <span className="text-base-400">designers who ship.</span>
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
