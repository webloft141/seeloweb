import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Install the plugin',
    desc: 'Add the Seelo Figma plugin from the Figma Community. It works alongside your existing workflow — no setup required.',
  },
  {
    number: '02',
    title: 'Connect your frames',
    desc: 'Select any frame or component in Figma and connect it to Seelo with one click. Your design stays in Figma — we just mirror it.',
  },
  {
    number: '03',
    title: 'Preview & share',
    desc: 'View interactive previews instantly. Share a link with your team, client, or stakeholders. No accounts, no sign-up.',
  },
]

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-32 md:py-44 bg-base-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-2xl mb-24 reveal ${visible ? 'visible' : ''}`}
        >
          <span className="text-xs uppercase tracking-[0.15em] text-base-400 mb-5 block">
            How it works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-base-950 tracking-tight leading-[1.05]">
            Three steps.
            <br />
            <span className="text-base-400">Zero friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
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
      className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
    >
      <span className="text-6xl font-bold text-base-100 leading-none block mb-6 select-none">
        {step.number}
      </span>
      <h3 className="text-lg font-semibold text-base-900 mb-3">{step.title}</h3>
      <p className="text-sm text-base-500 leading-relaxed">{step.desc}</p>
    </div>
  )
}
