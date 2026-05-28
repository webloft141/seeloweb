import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    number: '01',
    title: 'Real-time sync',
    desc: 'Edit in Figma, see changes in the preview instantly. No exporting, no uploading, no waiting.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Interactive previews',
    desc: 'Transitions, hover states, overlays — everything works. Your designs behave like the real product.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Share without accounts',
    desc: 'Generate a link and share with anyone. Clients and stakeholders can view previews without signing up.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Figma plugin + desktop app',
    desc: 'Works as a Figma plugin and a standalone desktop app. Pick the workflow that suits you.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Self-host or use cloud',
    desc: 'Use our hosted relay or self-host for complete control over your data. Your choice.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Version compare',
    desc: 'Preview two versions side-by-side. See exactly what changed, down to the pixel.',
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
]

function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`group reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''}`}
    >
      <div className="size-10 rounded-lg bg-accent-light flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
        {f.icon}
      </div>
      <span className="text-3xl font-bold text-base-200/50 group-hover:text-accent/20 transition-colors duration-500 select-none">
        {f.number}
      </span>
      <h3 className="text-lg font-semibold text-base-900 mt-3 mb-2 transition-colors">{f.title}</h3>
      <p className="text-sm text-base-500 leading-relaxed transition-colors">{f.desc}</p>
    </div>
  )
}

export default function Features() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="features" className="relative py-32 md:py-44 bg-base-50 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-2xl mb-24 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent mb-5">
            <span className="w-8 h-px bg-accent/50" />
            Why Seelo
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05] transition-colors">
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
