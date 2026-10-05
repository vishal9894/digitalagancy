import { motion, useScroll, useSpring } from 'motion/react'

export function Aurora({ className = '' }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-ink-850" />

      <div
        className="absolute -top-[22%] -left-[12%] size-[46rem] rounded-full blur-[130px] animate-aurora"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-brand-500) 46%, transparent), transparent 68%)',
        }}
      />
      <div
        className="absolute -top-[8%] right-[-14%] size-[40rem] rounded-full blur-[140px] animate-aurora"
        style={{
          animationDelay: '-6s',
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-cyan-glow) 26%, transparent), transparent 68%)',
        }}
      />
      <div
        className="absolute top-[42%] left-[38%] size-[44rem] rounded-full blur-[150px] animate-aurora"
        style={{
          animationDelay: '-12s',
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-brand-700) 44%, transparent), transparent 70%)',
        }}
      />

      <div className="grid-lines absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_50%_0%,#000_10%,transparent_62%)]" />
      <div className="dot-matrix absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_20%,#000,transparent_70%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink-950)_88%)]" />
    </div>
  )
}

export function Noise() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-[2.5px] origin-left bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-cyan-glow),var(--color-amber-glow))]"
    />
  )
}

export function OrbitRing({ className = '', size = 460, reverse = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`absolute inset-0 rounded-full border border-dashed border-brand-300/20 ${
          reverse ? 'animate-spin-reverse' : 'animate-spin-slow'
        }`}
      />
      <div className="absolute inset-[14%] rounded-full border border-cyan-glow/12" />
      <div className="absolute inset-[30%] rounded-full border border-brand-400/14" />
      <div
        className={`absolute inset-0 ${
          reverse ? 'animate-spin-reverse' : 'animate-spin-slow'
        }`}
      >
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-cyan-glow shadow-[0_0_16px_3px_var(--color-cyan-glow)]" />
      </div>
    </div>
  )
}

export function SweepBorder({ children, className = '' }) {
  return (
    <div className={`relative rounded-3xl p-px ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl opacity-70 animate-spin-slow"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--color-brand-400) 65%, transparent) 90deg, var(--color-cyan-glow) 160deg, transparent 260deg, color-mix(in oklab, var(--color-brand-500) 60%, transparent) 340deg, transparent 360deg)',
        }}
      />
      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-ink-900/92 backdrop-blur-xl">
        {children}
      </div>
    </div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 lg:py-32 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'
  return (
    <div
      className={`flex flex-col gap-5 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          <span className="inline-block size-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_var(--color-cyan-glow)]" />
          {eyebrow}
        </motion.span>
      )}
      <h2 className="max-w-3xl text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {lead && (
        <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  )
}
