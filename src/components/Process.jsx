import { motion } from 'motion/react'
import { Section, SectionHeading } from './Decor'
import { Stagger, StaggerItem } from './motion'
import { PROCESS } from '../data/site'

export default function Process() {
  return (
    <Section id="process" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -right-40 size-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-cyan-glow)_13%,transparent),transparent_70%)] blur-3xl" />

      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="How we work"
              title={
                <>
                  A process built on{' '}
                  <span className="text-gradient-brand">evidence, not guesswork</span>
                </>
              }
              lead="We start by understanding what is happening today — tracking, traffic quality, funnel drop-offs, creative performance and market positioning. You get a clear diagnosis and a practical action plan, so work begins with direction, not assumptions."
            />
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="btn-primary mt-9"
            >
              Book a strategy call
            </motion.a>
          </div>

          <Stagger className="relative" gap={0.13}>
            <motion.span
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 bottom-6 left-[1.65rem] w-px origin-top bg-[linear-gradient(to_bottom,var(--color-brand-400),var(--color-cyan-glow),transparent)] sm:left-[1.9rem]"
            />

            {PROCESS.map((p, i) => (
              <StaggerItem key={p.step} x={26}>
                <div className="group relative flex gap-6 sm:gap-7">
                  <div className="relative shrink-0">
                    <div className="relative grid size-13 place-items-center rounded-2xl border border-brand-300/20 bg-ink-900/90 backdrop-blur-xl sm:size-15">
                      <span className="font-mono text-[0.82rem] font-medium text-cyan-glow">
                        {p.step}
                      </span>
                      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-brand-500)_26%,transparent),transparent_70%)] opacity-0 transition-opacity duration-600 group-hover:opacity-100" />
                    </div>
                    {i < PROCESS.length - 1 && (
                      <span className="absolute top-full left-1/2 mt-1 h-6 w-px -translate-x-1/2 bg-brand-300/10 sm:hidden" />
                    )}
                  </div>

                  <div className="flex-1 pb-10">
                    <div className="glass card-hover rounded-2xl p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                        <span className="font-mono text-[0.62rem] tracking-[0.16em] text-white/28 uppercase">
                          Phase {p.step}
                        </span>
                      </div>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  )
}
