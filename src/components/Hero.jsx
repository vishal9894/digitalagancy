import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import Icon from './Icon'
import { OrbitRing } from './Decor'
import { Tilt } from './motion'

function BarChart() {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92, 84, 100]
  return (
    <div className="flex h-24 items-end gap-[5px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: '6%' }}
          animate={{ height: `${h}%` }}
          transition={{
            delay: 0.9 + i * 0.075,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-1 rounded-t-[3px]"
          style={{
            background:
              i > 6
                ? 'linear-gradient(to top, var(--color-brand-500), var(--color-cyan-glow))'
                : 'linear-gradient(to top, color-mix(in oklab, var(--color-brand-500) 35%, transparent), color-mix(in oklab, var(--color-brand-300) 60%, transparent))',
          }}
        />
      ))}
    </div>
  )
}

function Sparkline() {
  const pts = [0, 34, 22, 52, 44, 74, 62, 96]
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * 14} ${100 - p}`).join(' ')
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-12 w-full">
      <defs>
        <linearGradient id="spark" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-brand-500)" />
          <stop offset="100%" stopColor="var(--color-cyan-glow)" />
        </linearGradient>
        <linearGradient id="sparkfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-cyan-glow)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-cyan-glow)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} L 98 100 L 0 100 Z`}
        fill="url(#sparkfill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="url(#spark)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.85, duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

const CARDS = [
  {
    icon: 'chart',
    label: 'Organic traffic',
    value: '+248%',
    sub: 'last 6 months',
    pos: 'left-[-4%] top-[14%]',
    delay: 1.15,
    float: 'animate-float',
  },
  {
    icon: 'bolt',
    label: 'ROAS',
    value: '5.2x',
    sub: 'blended paid',
    pos: 'right-[-3%] top-[30%]',
    delay: 1.35,
    float: 'animate-float-slow',
  },
  {
    icon: 'target',
    label: 'Conversion',
    value: '+64%',
    sub: 'checkout CVR',
    pos: 'left-[2%] bottom-[6%]',
    delay: 1.55,
    float: 'animate-float',
  },
]

const ROTATE = ['SEO', 'Social Media', 'Paid Ads', 'Web Dev', 'Ecommerce', 'Branding']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATE.length), 2100)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      <OrbitRing className="-top-32 -left-40 hidden opacity-70 lg:block" size={520} />
      <OrbitRing className="top-10 -right-52 hidden opacity-60 lg:block" size={620} reverse />

      <div className="container-x relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="chip mb-7"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint-glow opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-mint-glow" />
              </span>
              Now onboarding Q3 partners
            </motion.div>

            <h1 className="text-[2.6rem] leading-[1.03] font-extrabold text-white sm:text-6xl lg:text-[4.15rem]">
              {['Level up your', 'digital presence.'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.14 + i * 0.11,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block"
                  >
                    {i === 1 ? <span className="text-gradient">{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-lg font-semibold sm:text-xl"
            >
              <span className="text-white/55">We build</span>
              <span className="relative inline-flex h-8 items-center overflow-hidden sm:h-9">
                {ROTATE.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={false}
                    animate={{
                      y: i === idx ? 0 : i < idx ? '-115%' : '115%',
                      opacity: i === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 whitespace-nowrap text-gradient-brand"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="text-white/55">that compounds.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-white/70 sm:text-lg"
            >
              We connect rankings to leads, leads to revenue, and performance trends to
              strategic planning — so growth is measured in money, not impressions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.68 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a href="#contact" className="btn-primary">
                Get a Free Growth Audit
                <Icon name="arrow" className="size-4" strokeWidth={2} />
              </a>
              <a href="#services" className="btn-ghost">
                <Icon name="play" className="size-3.5" />
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.95 }}
              className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-4"
            >
              {[
                { icon: 'shield', t: 'No lock-in contracts' },
                { icon: 'bolt', t: 'Reporting you can audit' },
                { icon: 'check', t: 'In-house team of 18+' },
              ].map((b) => (
                <span key={b.t} className="flex items-center gap-2 text-[0.86rem] text-white/60">
                  <Icon name={b.icon} className="size-4 text-cyan-glow" strokeWidth={1.8} />
                  {b.t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.15, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
          >
            <Tilt strength={6}>
              <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-cyan-glow),var(--color-brand-400),transparent)]" />
                {!reduce && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-cyan-glow)_8%,transparent),transparent)]" />
                )}

                <div className="flex items-center gap-2 pb-5">
                  <span className="size-2.5 rounded-full bg-rose-glow/70" />
                  <span className="size-2.5 rounded-full bg-amber-glow/70" />
                  <span className="size-2.5 rounded-full bg-mint-glow/70" />
                  <div className="ml-3 flex items-center gap-2 rounded-lg border border-brand-300/12 bg-ink-950/60 px-3 py-1">
                    <span className="size-1.5 rounded-full bg-cyan-glow" />
                    <span className="font-mono text-[0.66rem] text-white/55">
                      stadoworld.com/dashboard
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.66rem] tracking-[0.18em] text-cyan-glow uppercase">
                      Live performance
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                      Growth <span className="text-gradient-brand">Overview</span>
                    </h3>
                  </div>
                  <div className="rounded-xl border border-mint-glow/25 bg-mint-glow/10 px-3 py-1.5 text-right">
                    <p className="font-mono text-[0.6rem] text-mint-glow/80 uppercase">Roas</p>
                    <p className="font-display text-lg leading-none font-bold text-mint-glow">
                      5.2x
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-brand-300/10 bg-ink-950/45 p-4">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[0.78rem] text-white/55">Revenue attributed</p>
                    <p className="font-mono text-[0.8rem] font-medium text-white">
                      ₹ 48,20,400
                    </p>
                  </div>
                  <div className="mt-2">
                    <Sparkline />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1.35fr_1fr] gap-4">
                  <div className="rounded-2xl border border-brand-300/10 bg-ink-950/45 p-4">
                    <p className="mb-3 font-mono text-[0.6rem] tracking-[0.16em] text-white/45 uppercase">
                      Sessions
                    </p>
                    <BarChart />
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      { l: 'Impressions', v: '2.4M', c: 'var(--color-brand-300)' },
                      { l: 'Avg. position', v: '1.8', c: 'var(--color-cyan-glow)' },
                      { l: 'Backlinks', v: '18.2k', c: 'var(--color-mint-glow)' },
                    ].map((m, i) => (
                      <motion.div
                        key={m.l}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.12, duration: 0.6 }}
                        className="rounded-xl border border-brand-300/10 bg-ink-950/45 px-3.5 py-2.5"
                      >
                        <p className="text-[0.66rem] text-white/45">{m.l}</p>
                        <p className="font-display text-[0.98rem] font-bold" style={{ color: m.c }}>
                          {m.v}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-brand-300/10 bg-ink-950/70 px-3.5 py-2.5">
                  <Icon name="bolt" className="size-3.5 shrink-0 text-amber-glow" />
                  <p className="truncate font-mono text-[0.68rem] text-white/60">
                    <span className="text-mint-glow">$</span> deploy campaign
                    <span className="animate-blink ml-0.5 text-cyan-glow">▊</span>
                  </p>
                </div>
              </div>
            </Tilt>

            {CARDS.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.86, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: c.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${c.pos} ${reduce ? '' : c.float} hidden sm:block`}
              >
                <div className="glass flex items-center gap-3 rounded-2xl px-3.5 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)]">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-cyan-glow))]">
                    <Icon name={c.icon} className="size-4 text-white" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[0.62rem] tracking-wide text-white/50 uppercase">
                      {c.label}
                    </p>
                    <p className="font-display text-[0.98rem] leading-tight font-bold text-white">
                      {c.value}
                      <span className="ml-1.5 text-[0.6rem] font-normal text-white/45">
                        {c.sub}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 sm:mt-28"
        >
          <p className="mb-6 text-center font-mono text-[0.66rem] tracking-[0.24em] text-white/35 uppercase">
            Trusted by growing brands across India
          </p>
          <div className="mask-fade-x flex overflow-hidden">
            <div className="animate-marquee-slow flex shrink-0 items-center gap-14 pr-14">
              {[...Array(2)].flatMap((_, dup) =>
                [
                  'AAN — The Ethnic Store',
                  'Dr. Hasnain Clinic',
                  'Garg360',
                  'Stado Publication',
                  'Keshawa',
                  'BizBuzz',
                ].map((l, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="font-display text-lg font-semibold whitespace-nowrap text-white/28 transition-colors duration-300 hover:text-brand-300 sm:text-xl"
                  >
                    {l}
                  </span>
                )),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
