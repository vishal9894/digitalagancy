import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icon from './Icon'
import { Section } from './Decor'
import { Reveal, Stagger, StaggerItem } from './motion'
import { FAQS } from '../data/site'

function Row({ item, open, onToggle, i }) {
  return (
    <StaggerItem>
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
          open
            ? 'border-brand-400/50 bg-ink-800/70 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.95)]'
            : 'border-brand-300/12 bg-ink-900/45 hover:border-brand-300/28'
        }`}
      >
        <h3>
          <button
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={`faq-panel-${i}`}
            className="group flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7 sm:py-6"
          >
            <span className="hidden font-mono text-[0.66rem] text-white/25 sm:block">
              {String(i + 1).padStart(2, '0')}
            </span>

            <span
              className={`flex-1 font-display text-[1.02rem] leading-snug font-semibold transition-colors duration-300 sm:text-[1.1rem] ${
                open ? 'text-white' : 'text-white/78 group-hover:text-white'
              }`}
            >
              {item.q}
            </span>

            <motion.span
              animate={{ rotate: open ? 135 : 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                open
                  ? 'border-transparent bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-cyan-glow))]'
                  : 'border-brand-300/20 bg-ink-950/50 group-hover:border-cyan-glow/50'
              }`}
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </motion.span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`faq-panel-${i}`}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 sm:pl-[4.6rem]">
                <div className="h-px w-full bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-brand-400)_28%,transparent),transparent)]" />
                <p className="mt-5 text-[0.94rem] leading-relaxed text-white/62">{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-40 size-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-brand-600)_14%,transparent),transparent_70%)] blur-3xl" />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-eyebrow">
              <span className="inline-block size-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_var(--color-cyan-glow)]" />
              FAQ
            </span>
            <h2 className="mt-5 text-4xl leading-[1.06] font-bold text-white sm:text-5xl">
              Questions,
              <br />
              <span className="text-gradient-brand">answered straight</span>
            </h2>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-white/60">
              The things clients ask us before signing. If yours is not here, just ask — we
              would rather have the conversation early.
            </p>

            <Reveal delay={0.12}>
              <div className="mt-9 rounded-2xl border border-brand-300/12 bg-ink-900/50 p-6 backdrop-blur-xl">
                <p className="font-display text-[0.98rem] font-bold text-white">
                  Still have a question?
                </p>
                <p className="mt-2 text-[0.86rem] text-white/55">
                  Get a straight answer within one business day.
                </p>
                <a href="#contact" className="btn-primary mt-5 w-full">
                  Ask us directly
                  <Icon name="arrow" className="size-4" strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          </div>

          <Stagger className="flex flex-col gap-3" gap={0.07}>
            {FAQS.map((f, i) => (
              <Row
                key={f.q}
                item={f}
                i={i}
                open={open === i}
                onToggle={() => setOpen((o) => (o === i ? -1 : i))}
              />
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  )
}