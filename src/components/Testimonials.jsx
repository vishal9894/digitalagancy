import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Icon from './Icon'
import { Section } from './Decor'
import { Reveal, Stagger, StaggerItem } from './motion'
import { TESTIMONIALS } from '../data/site'

const ACC = {
  brand: { c: 'var(--color-brand-400)', deep: 'var(--color-brand-700)' },
  cyan: { c: 'var(--color-cyan-glow)', deep: 'var(--color-brand-800)' },
  mint: { c: 'var(--color-mint-glow)', deep: 'var(--color-brand-700)' },
}

const DURATION = 7200

function initials(name) {
  return name
    .replace(/^(Dr\.?|Mr\.?|Mrs\.?)\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function Stars({ n = 5, className = '' }) {
  return (
    <span className={`flex items-center gap-1 ${className}`} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
          <path d="M12 2.4l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.4Z" />
        </svg>
      ))}
    </span>
  )
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  const t = TESTIMONIALS[i]
  const { c: color, deep } = ACC[t.accent] ?? ACC.brand

  const go = useCallback((d) => {
    setDir(d)
    setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const pick = useCallback(
    (k) => {
      setDir(k > i ? 1 : -1)
      setI(k)
    },
    [i],
  )

  useEffect(() => {
    if (paused || reduce) return
    const id = setTimeout(() => {
      setDir(1)
      setI((p) => (p + 1) % TESTIMONIALS.length)
    }, DURATION)
    return () => clearTimeout(id)
  }, [paused, reduce, i])

  return (
    <Section id="testimonials" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--color-brand-600)_16%,transparent),transparent_70%)] blur-3xl" />

      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow"
            >
              <span className="inline-block size-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_var(--color-cyan-glow)]" />
              Client words
            </motion.span>
            <h2 className="text-4xl leading-[1.06] font-bold text-white sm:text-5xl lg:text-[3.4rem]">
              Trusted by founders,
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient-brand">stores and clinics</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex shrink-0 items-center gap-3 rounded-2xl border border-brand-300/12 bg-ink-900/50 px-5 py-4 backdrop-blur-xl"
          >
            <Stars className="text-amber-glow" />
            <span className="h-6 w-px bg-brand-300/15" />
            <p className="text-sm text-white/60">
              <span className="font-display text-lg font-bold text-white">4.9</span>
                  <span className="mx-1 text-white/35">/5</span>
              <span className="text-white/35"> across 40+ reviews</span>
            </p>
          </motion.div>
        </div>

        <div
          className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal>
            <figure className="glass-strong relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 sm:p-11">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
              <div
                className="pointer-events-none absolute -top-32 -right-24 size-80 rounded-full blur-3xl transition-colors duration-700"
                style={{ background: `radial-gradient(circle, color-mix(in oklab, ${color} 18%, transparent), transparent 68%)` }}
              />
              <svg
                viewBox="0 0 24 24"
                className="relative size-10 shrink-0"
                fill={color}
                aria-hidden="true"
              >
                <path d="M9.5 6.5C6.6 7.7 5 10 5 13.2V18h5.6v-5.4H8.1c0-2 .7-3.3 2.4-4.1l-1-2Zm9 0C15.6 7.7 14 10 14 13.2V18h5.6v-5.4h-2.5c0-2 .7-3.3 2.4-4.1l-1-2Z" />
              </svg>

              <div className="relative mt-7 flex-1">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.blockquote
                    key={i}
                    custom={dir}
                    initial={{ opacity: 0, y: 22, filter: 'blur(7px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -18, filter: 'blur(7px)' }}
                    transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-full flex-col"
                  >
                    <p className="font-display text-lg leading-[1.62] font-medium text-white/92 sm:text-[1.4rem] sm:leading-[1.58]">
                      {t.quote}
                    </p>

                    <figcaption className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-4 pt-9">
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="grid size-14 shrink-0 place-items-center rounded-2xl font-display text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]"
                        style={{
                          background: `linear-gradient(140deg, ${color}, ${deep})`,
                        }}
                      >
                        {initials(t.name)}
                      </motion.span>
                      <div className="min-w-0">
                        <p className="font-display text-[1.02rem] font-bold text-white">
                          {t.name}
                        </p>
                        <p className="mt-1 text-[0.84rem] text-white/50">{t.role}</p>
                      </div>
                      <Stars n={t.rating} className="ml-auto text-amber-glow" />
                    </figcaption>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="relative mt-9 flex items-center gap-4 border-t border-brand-300/10 pt-6">
                <div className="flex items-center gap-2.5">
                  {TESTIMONIALS.map((x, k) => (
                    <button
                      key={x.name}
                      onClick={() => pick(k)}
                      aria-label={`Show testimonial from ${x.name}`}
                      aria-current={k === i}
                      className="relative h-1.5 rounded-full transition-all duration-500"
                      style={{ width: k === i ? 44 : 16 }}
                    >
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            k === i
                              ? color
                              : 'color-mix(in oklab, var(--color-brand-200) 20%, transparent)',
                          boxShadow: k === i ? `0 0 12px ${color}` : 'none',
                        }}
                      />
                      {k === i && !paused && !reduce && (
                        <motion.span
                          key={`bar-${i}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: DURATION / 1000, ease: 'linear' }}
                          className="absolute inset-0 origin-left rounded-full bg-white/70"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="grid size-10 place-items-center rounded-full border border-brand-300/20 bg-ink-950/50 text-white/80 transition-all duration-300 hover:border-cyan-glow/50 hover:text-cyan-glow active:scale-95"
                  >
                    <Icon name="arrow" className="size-4 rotate-180" strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="grid size-10 place-items-center rounded-full border border-brand-300/20 bg-ink-950/50 text-white/80 transition-all duration-300 hover:border-cyan-glow/50 hover:text-cyan-glow active:scale-95"
                  >
                    <Icon name="arrow" className="size-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </figure>
          </Reveal>

          <Stagger className="flex flex-col gap-4" gap={0.1}>
            {TESTIMONIALS.map((x, k) => {
              const a = ACC[x.accent] ?? ACC.brand
              const on = k === i
              return (
                <StaggerItem key={x.name} className="flex-1">
                  <button
                    onClick={() => pick(k)}
                    aria-pressed={on}
                    className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 ${
                      on
                        ? 'border-brand-400/50 bg-ink-800/70 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.95)]'
                        : 'border-brand-300/12 bg-ink-900/45 hover:border-brand-300/28 hover:bg-ink-800/50'
                    }`}
                  >
                    {on && (
                      <>
                        <span
                          className="absolute inset-y-0 left-0 w-[3px]"
                          style={{ background: a.c, boxShadow: `0 0 16px ${a.c}` }}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 opacity-70"
                          style={{
                            background: `linear-gradient(105deg, color-mix(in oklab, ${a.c} 9%, transparent), transparent 60%)`,
                          }}
                        />
                      </>
                    )}

                    <div className="relative flex items-center gap-3.5">
                      <span
                        className="grid size-11 shrink-0 place-items-center rounded-xl font-display text-[0.82rem] font-bold transition-all duration-500"
                        style={{
                          background: on
                            ? `linear-gradient(140deg, ${a.c}, ${a.deep})`
                            : 'color-mix(in oklab, var(--color-ink-700) 90%, transparent)',
                          color: on ? '#ffffff' : 'color-mix(in oklab, white 55%, transparent)',
                          border: on ? 'none' : '1px solid color-mix(in oklab, var(--color-brand-300) 16%, transparent)',
                        }}
                      >
                        {initials(x.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-[0.94rem] font-bold text-white">
                          {x.name}
                        </p>
                        <p className="mt-0.5 truncate text-[0.76rem] text-white/45">{x.role}</p>
                      </div>
                      {on ? (
                        <Stars n={x.rating} className="shrink-0 text-amber-glow" />
                      ) : (
                        <Icon
                          name="arrow"
                          className="size-4 shrink-0 text-white/25 transition-all duration-400 group-hover:translate-x-1 group-hover:text-cyan-glow"
                          strokeWidth={2}
                        />
                      )}
                    </div>

                    <p
                      className={`relative mt-4 line-clamp-2 text-[0.83rem] leading-relaxed transition-colors duration-500 ${
                        on ? 'text-white/62' : 'text-white/40'
                      }`}
                    >
                      {x.quote}
                    </p>

                    <div className="relative mt-4 flex flex-wrap gap-1.5">
                      {[x.sector, x.tenure].map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-brand-300/15 px-2.5 py-0.5 font-mono text-[0.6rem] tracking-[0.1em] text-white/40 uppercase"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </button>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { v: '4.9/5', l: 'Average client rating' },
              { v: '94%', l: 'Clients who renew' },
              { v: '12+ yrs', l: 'Combined leadership' },
            ].map((m) => (
              <div
                key={m.l}
                className="flex items-center justify-center gap-3 rounded-2xl border border-brand-300/10 bg-ink-900/45 px-5 py-4 backdrop-blur-xl"
              >
                <p className="font-display text-lg font-bold text-gradient-brand">{m.v}</p>
                <span className="h-4 w-px bg-brand-300/15" />
                <p className="text-[0.78rem] text-white/50">{m.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}