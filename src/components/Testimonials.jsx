import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Icon from './Icon'
import { Section, SectionHeading } from './Decor'
import { Reveal } from './motion'
import { TESTIMONIALS } from '../data/site'

const ACC = {
  brand: 'var(--color-brand-400)',
  cyan: 'var(--color-cyan-glow)',
  mint: 'var(--color-mint-glow)',
}

function initials(name) {
  return name
    .replace(/^(Dr\.?|Mr\.?|Mrs\.?)\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const t = TESTIMONIALS[i]
  const color = ACC[t.accent] ?? ACC.brand

  const go = useCallback((d) => {
    setDir(d)
    setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 7000)
    return () => clearInterval(id)
  }, [paused, go, i])

  return (
    <Section id="testimonials" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -left-40 size-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-brand-600)_18%,transparent),transparent_70%)] blur-3xl" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Client words"
          title={
            <>
              Trusted by founders, <span className="text-gradient-brand">stores and clinics</span>
            </>
          }
        />

        <div
          className="relative mx-auto mt-14 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass-strong relative overflow-hidden rounded-[2rem] px-7 py-11 sm:px-14 sm:py-14">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />
            <Icon
              name="quote"
              className="absolute top-8 right-8 size-16 opacity-[0.06]"
              strokeWidth={1}
            />

            <div className="min-h-[15rem] sm:min-h-[13rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 44, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: dir * -44, filter: 'blur(6px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <p className="font-display text-xl leading-[1.5] font-medium text-white sm:text-2xl lg:text-[1.7rem] lg:leading-[1.5]">
                    <span style={{ color }}>“</span>
                    {t.quote}
                    <span style={{ color }}>”</span>
                  </p>

                  <footer className="mt-9 flex items-center gap-4">
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, var(--color-brand-700)))`,
                      }}
                    >
                      {initials(t.name)}
                    </span>
                    <div>
                      <p className="font-display text-[0.98rem] font-bold text-white">{t.name}</p>
                      <p className="mt-0.5 text-[0.82rem] text-white/55">{t.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between gap-6 border-t border-brand-300/10 pt-7">
              <div className="flex items-center gap-2.5">
                {TESTIMONIALS.map((x, k) => (
                  <button
                    key={x.name}
                    onClick={() => {
                      setDir(k > i ? 1 : -1)
                      setI(k)
                    }}
                    aria-label={`Show testimonial from ${x.name}`}
                    aria-current={k === i}
                    className="group relative h-1.5 rounded-full transition-all duration-500"
                    style={{ width: k === i ? 40 : 16 }}
                  >
                    <span
                      className="absolute inset-0 rounded-full transition-opacity duration-300"
                      style={{
                        background: k === i ? color : 'color-mix(in oklab, var(--color-brand-200) 22%, transparent)',
                        boxShadow: k === i ? `0 0 12px ${color}` : 'none',
                      }}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
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
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              { v: '4.9/5', l: 'Average client rating' },
              { v: '94%', l: 'Clients who renew' },
              { v: '12+ yrs', l: 'Combined leadership' },
            ].map((m) => (
              <div
                key={m.l}
                className="rounded-2xl border border-brand-300/10 bg-ink-900/45 px-5 py-4 text-center backdrop-blur-xl"
              >
                <p className="font-display text-lg font-bold text-gradient-brand">{m.v}</p>
                <p className="mt-1 text-[0.78rem] text-white/50">{m.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
