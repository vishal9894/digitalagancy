import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icon from './Icon'
import { Section, SectionHeading } from './Decor'
import { Reveal, Stagger, StaggerItem } from './motion'
import { SERVICES } from '../data/site'

const ACCENTS = {
  brand: {
    ring: 'group-hover:border-brand-400/55',
    glow: 'from-brand-500/22 to-cyan-glow/10',
    text: 'text-brand-300',
    chip: 'border-brand-300/25 bg-brand-500/10 text-brand-200',
    line: 'from-brand-400 to-cyan-glow',
  },
  cyan: {
    ring: 'group-hover:border-cyan-glow/55',
    glow: 'from-cyan-glow/22 to-brand-500/10',
    text: 'text-cyan-glow',
    chip: 'border-cyan-glow/25 bg-cyan-glow/10 text-cyan-glow',
    line: 'from-cyan-glow to-brand-400',
  },
  mint: {
    ring: 'group-hover:border-mint-glow/55',
    glow: 'from-mint-glow/22 to-cyan-glow/10',
    text: 'text-mint-glow',
    chip: 'border-mint-glow/25 bg-mint-glow/10 text-mint-glow',
    line: 'from-mint-glow to-cyan-glow',
  },
  amber: {
    ring: 'group-hover:border-amber-glow/55',
    glow: 'from-amber-glow/22 to-rose-glow/10',
    text: 'text-amber-glow',
    chip: 'border-amber-glow/25 bg-amber-glow/10 text-amber-glow',
    line: 'from-amber-glow to-rose-glow',
  },
  rose: {
    ring: 'group-hover:border-rose-glow/55',
    glow: 'from-rose-glow/22 to-brand-500/10',
    text: 'text-rose-glow',
    chip: 'border-rose-glow/25 bg-rose-glow/10 text-rose-glow',
    line: 'from-rose-glow to-brand-400',
  },
}

function ServiceCard({ s, open, onToggle }) {
  const a = ACCENTS[s.accent] ?? ACCENTS.brand
  return (
    <button
      onClick={onToggle}
      aria-expanded={open}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-brand-300/12 bg-ink-900/55 p-7 text-left backdrop-blur-xl card-hover ${a.ring}`}
    >
      <div
        className={`pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-gradient-to-br ${a.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`grid size-13 place-items-center rounded-2xl border border-brand-300/18 bg-ink-950/60 transition-all duration-500 group-hover:scale-110 group-hover:border-transparent ${a.text}`}
        >
          <Icon name={s.icon} className="size-6" strokeWidth={1.6} />
        </span>
        {s.stat && (
          <div className="text-right">
            <p className={`font-display text-2xl leading-none font-extrabold ${a.text}`}>
              {s.stat.value}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] tracking-wider text-white/40 uppercase">
              {s.stat.label}
            </p>
          </div>
        )}
      </div>

      <h3 className="relative mt-6 font-display text-[1.28rem] font-bold text-white">
        {s.title}
      </h3>
      <p className={`relative mt-2 text-[0.88rem] font-medium ${a.text} opacity-90`}>
        {s.headline}
      </p>
      <p className="relative mt-3.5 text-[0.9rem] leading-relaxed text-white/62">
        {s.description}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className={`rounded-full border px-3 py-1 text-[0.7rem] font-medium ${a.chip}`}>
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-6 flex items-center gap-2 text-[0.82rem] font-semibold text-white">
              Start a project
              <Icon name="arrow" className="size-4 transition-transform duration-400 group-hover:translate-x-1.5" strokeWidth={2} />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <span className="relative mt-auto flex items-center gap-2 pt-6 text-[0.8rem] font-medium text-white/45 transition-colors group-hover:text-white">
          <span className={`h-px w-8 bg-gradient-to-r ${a.line} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
          Learn more
        </span>
      )}

      <span
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r ${a.line} transition-transform duration-600 group-hover:scale-x-100`}
      />
    </button>
  )
}

export default function Services() {
  const [open, setOpen] = useState('seo')

  return (
    <Section id="services">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Full-stack digital, <span className="text-gradient-brand">under one roof</span>
            </>
          }
          lead="From the first audit to the final pixel — strategy, creative, engineering and media buying managed by one accountable team."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.075}>
          {SERVICES.map((s) => (
            <StaggerItem key={s.id} className="h-full">
              <ServiceCard
                s={s}
                open={open === s.id}
                onToggle={() => setOpen((o) => (o === s.id ? null : s.id))}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <div className="glass flex flex-col items-center gap-6 rounded-3xl px-7 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Need something bespoke?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Mobile apps, custom software, ERP and full product design — we build the
                infrastructure too.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { icon: 'app', label: 'Mobile App Development' },
                { icon: 'erp', label: 'Software Development' },
                { icon: 'uiux', label: 'UI/UX Design' },
              ].map((c) => (
                <a
                  key={c.label}
                  href="#contact"
                  className="chip transition-colors duration-300 hover:border-cyan-glow/50 hover:text-white"
                >
                  <Icon name={c.icon} className="size-3.5" strokeWidth={1.8} />
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
