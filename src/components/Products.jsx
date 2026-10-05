import { motion } from 'motion/react'
import Icon from './Icon'
import { Section, SectionHeading } from './Decor'
import { Reveal, Stagger, StaggerItem } from './motion'
import { PRODUCTS } from '../data/site'

const ACC = {
  brand: { c: 'var(--color-brand-400)', g: 'from-brand-500/22 to-transparent' },
  cyan: { c: 'var(--color-cyan-glow)', g: 'from-cyan-glow/20 to-transparent' },
  amber: { c: 'var(--color-amber-glow)', g: 'from-amber-glow/20 to-transparent' },
}

function ProductMock({ accent }) {
  const c = ACC[accent] ?? ACC.brand
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-300/12 bg-ink-950/60">
      <div className={`absolute inset-0 bg-gradient-to-br ${c.g} to-transparent`} />
      <div className="grid-lines absolute inset-0 opacity-40" />

      <div className="relative p-4">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-rose-glow/60" />
          <span className="size-1.5 rounded-full bg-amber-glow/60" />
          <span className="size-1.5 rounded-full bg-mint-glow/60" />
        </div>

        <div className="mt-3.5 space-y-2">
          <div className="h-2.5 w-2/5 rounded-full bg-brand-300/20" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
                className="h-11 rounded-lg border border-brand-300/10"
                style={{ background: `color-mix(in oklab, ${c.c} ${8 + i * 4}%, transparent)` }}
              />
            ))}
          </div>
          <div className="flex h-12 items-end gap-1.5 rounded-lg border border-brand-300/10 p-1.5">
            {[35, 55, 42, 72, 60, 88, 78].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: '8%' }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-sm"
                style={{ background: `color-mix(in oklab, ${c.c} ${35 + i * 8}%, transparent)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <Section id="products">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our products"
          title={
            <>
              Tools we built for{' '}
              <span className="text-gradient-brand">our own clients</span>
            </>
          }
          lead="We don't just advise on software — we ship it. Our in-house products run our own operations and prove the systems we recommend."
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3" gap={0.1}>
          {PRODUCTS.map((p) => {
            const a = ACC[p.accent] ?? ACC.brand
            return (
              <StaggerItem key={p.name} className="h-full">
                <article className="group glass card-hover relative flex h-full flex-col overflow-hidden rounded-3xl p-6">
                  <div
                    className="pointer-events-none absolute -top-20 left-1/2 size-48 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `color-mix(in oklab, ${a.c} 26%, transparent)` }}
                  />
                  <div className="relative">
                    <span
                      className="rounded-full border px-3 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase"
                      style={{
                        color: a.c,
                        borderColor: `color-mix(in oklab, ${a.c} 32%, transparent)`,
                        background: `color-mix(in oklab, ${a.c} 10%, transparent)`,
                      }}
                    >
                      {p.category}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-white">{p.name}</h3>
                    <p className="mt-2.5 text-[0.88rem] leading-relaxed text-white/62">
                      {p.description}
                    </p>
                  </div>

                  <div className="relative mt-6">
                    <ProductMock accent={p.accent} />
                  </div>

                  <a
                    href="#contact"
                    className="relative mt-6 inline-flex items-center gap-2 text-[0.84rem] font-semibold text-white/85 transition-colors hover:text-cyan-glow"
                  >
                    Discover {p.name}
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform duration-400 group-hover:translate-x-1.5"
                      strokeWidth={2}
                    />
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-brand-300/18 px-7 py-9 text-center">
            <p className="font-display text-lg font-bold text-white sm:text-xl">
              Need a custom build? We ship software, not slideware.
            </p>
            <p className="max-w-2xl text-sm text-white/60">
              Mobile apps, ERP systems, dashboards and full web platforms — scoped, designed,
              built and maintained in-house.
            </p>
            <a href="#contact" className="btn-ghost mt-1">
              Scope a project
              <Icon name="arrow" className="size-4" strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
