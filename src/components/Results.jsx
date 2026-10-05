import { motion, useReducedMotion } from 'motion/react'
import Icon from './Icon'
import { Section, SectionHeading, SweepBorder } from './Decor'
import { Counter, Reveal, Stagger, StaggerItem } from './motion'
import { STATS } from '../data/site'

function Gauge({ pct = 78, label, value, color = 'var(--color-cyan-glow)' }) {
  const reduce = useReducedMotion()
  const R = 62
  const C = 2 * Math.PI * R
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative grid size-[9.5rem] place-items-center">
        <svg viewBox="0 0 150 150" className="absolute size-full -rotate-90">
          <defs>
            <linearGradient id={`g-${label.replace(/\s/g, '')}`} x1="0" x2="1">
              <stop offset="0%" stopColor="var(--color-brand-500)" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
          </defs>
          <circle
            cx="75"
            cy="75"
            r={R}
            fill="none"
            stroke="color-mix(in oklab, var(--color-brand-300) 12%, transparent)"
            strokeWidth="9"
          />
          <motion.circle
            cx="75"
            cy="75"
            r={R}
            fill="none"
            stroke={`url(#g-${label.replace(/\s/g, '')})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: reduce ? C * (1 - pct / 100) : C }}
            whileInView={{ strokeDashoffset: C * (1 - pct / 100) }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="text-center">
          <p className="font-display text-2xl font-extrabold text-white">{value}</p>
        </div>
      </div>
      <p className="text-center font-mono text-[0.66rem] tracking-[0.14em] text-white/45 uppercase">
        {label}
      </p>
    </div>
  )
}

const LEGEND = [
  { l: 'Organic search', v: 46, c: 'var(--color-brand-400)' },
  { l: 'Paid media', v: 28, c: 'var(--color-cyan-glow)' },
  { l: 'Social', v: 16, c: 'var(--color-mint-glow)' },
  { l: 'Email & referral', v: 10, c: 'var(--color-amber-glow)' },
]

export default function Results() {
  return (
    <Section id="results" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--color-brand-400)_45%,transparent),transparent)]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="By the numbers"
          title={
            <>
              Results you can put on a{' '}
              <span className="text-gradient-brand">spreadsheet</span>
            </>
          }
          lead="No vanity dashboards. Every engagement is reported against pipeline, revenue and retention — metrics your CFO understands."
        />

        <Stagger className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4" gap={0.09}>
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="glass card-hover group relative h-full overflow-hidden rounded-2xl px-6 py-8 text-center">
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--color-brand-400),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="font-display text-4xl leading-none font-extrabold text-white sm:text-[2.9rem]">
                  <span className="text-gradient-brand">
                    <Counter value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-3 text-[0.82rem] text-white/55">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SweepBorder className="h-full">
              <div className="p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="section-eyebrow">Blended acquisition</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">
                      Where your customers come from
                    </h3>
                  </div>
                  <span className="hidden size-11 shrink-0 place-items-center rounded-xl border border-brand-300/18 bg-ink-950/60 text-cyan-glow sm:grid">
                    <Icon name="chart" className="size-5" />
                  </span>
                </div>

                <div className="mt-8 flex h-3.5 w-full overflow-hidden rounded-full">
                  {LEGEND.map((d, i) => (
                    <motion.span
                      key={d.l}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.v * 2.6}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full first:rounded-l-full last:rounded-r-full"
                      style={{ background: d.c, boxShadow: `0 0 18px -2px ${d.c}` }}
                    />
                  ))}
                </div>

                <div className="mt-7 space-y-4">
                  {LEGEND.map((d, i) => (
                    <div key={d.l} className="flex items-center gap-4">
                      <span
                        className="size-2.5 shrink-0 rounded-full"
                        style={{ background: d.c, boxShadow: `0 0 10px ${d.c}` }}
                      />
                      <span className="flex-1 text-sm text-white/70">{d.l}</span>
                      <div className="hidden h-1.5 w-32 overflow-hidden rounded-full bg-brand-300/10 sm:block">
                        <motion.span
                          className="block h-full rounded-full"
                          style={{ background: d.c }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${d.v * 2.2}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.3, delay: 0.2 + i * 0.1 }}
                        />
                      </div>
                      <span className="w-11 text-right font-mono text-sm font-medium text-white">
                        {d.v}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-brand-300/10 pt-7 sm:grid-cols-3">
                  {[
                    { l: 'Avg. contract', v: '12 mo' },
                    { l: 'Reporting', v: 'Weekly' },
                    { l: 'Onboarding', v: '7 days' },
                  ].map((m) => (
                    <div key={m.l}>
                      <p className="font-display text-lg font-bold text-white">{m.v}</p>
                      <p className="mt-0.5 text-[0.76rem] text-white/50">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SweepBorder>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass card-hover flex h-full flex-col items-center justify-center gap-9 rounded-3xl p-8">
              <p className="text-center font-display text-lg font-bold text-white">
                Client retention
                <span className="mt-1 block text-[0.8rem] font-normal text-white/50">
                  Across 3 years of engagements
                </span>
              </p>
              <Gauge pct={94} label="Retention" value="94%" />
              <div className="h-px w-full bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--color-brand-300)_22%,transparent),transparent)]" />
              <Gauge
                pct={88}
                label="Satisfaction"
                value="4.9/5"
                color="var(--color-amber-glow)"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
