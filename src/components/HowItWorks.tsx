import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Install the plugin',
    desc: 'Add the Seelo Figma plugin from the Figma Community. It works alongside your existing workflow — no setup required.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Connect your frames',
    desc: 'Select any frame or component in Figma and connect it to Seelo with one click. Your design stays in Figma — we just mirror it.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m7.328-5.029a4.5 4.5 0 0 0-6.364 0l-4.5 4.5a4.5 4.5 0 0 0 6.364 6.364l1.757-1.757" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Preview & share',
    desc: 'View interactive previews instantly. Share a link with your team, client, or stakeholders. No accounts, no sign-up.',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="how-it-works" className="relative py-32 md:py-44 bg-base-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-2xl mb-24 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent mb-5">
            <span className="w-8 h-px bg-accent/50" />
            How it works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05]">
            Three steps.
            <br />
            <span className="text-base-400">Zero friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, i }: { step: typeof steps[0]; i: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`group relative reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
    >
      <div className="relative p-8 rounded-2xl border border-base-200 bg-base-100/50 hover:bg-base-100 hover:border-base-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 rounded-xl bg-accent-light flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
            {step.icon}
          </div>
          <span className="text-3xl font-bold text-base-200/50 select-none">{step.number}</span>
        </div>
        <h3 className="text-lg font-semibold text-base-900 mb-3">{step.title}</h3>
        <p className="text-sm text-base-500 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  )
}
