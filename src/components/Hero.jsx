import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Icon from './Icon'
import { OrbitRing } from './Decor'

const SERIES = [
  [0, 186], [52, 172], [104, 180], [156, 154], [208, 162], [260, 134],
  [312, 143], [364, 114], [416, 122], [468, 92], [520, 99], [572, 68],
  [624, 77], [676, 42], [728, 50],
]

function smooth(pts) {
  return pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p[0]} ${p[1]}`
    const prev = pts[i - 1]
    const cx = (prev[0] + p[0]) / 2
    return `${acc} C ${cx} ${prev[1]}, ${cx} ${p[1]}, ${p[0]} ${p[1]}`
  }, '')
}

const LINE = smooth(SERIES)
const AREA = `${LINE} L 728 210 L 0 210 Z`

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']

const KPIS = [
  { l: 'Revenue', v: '₹48.2L', d: '+41%', c: 'var(--color-brand-300)' },
  { l: 'ROAS', v: '5.2x', d: '+1.4', c: 'var(--color-cyan-glow)' },
  { l: 'Leads', v: '3,412', d: '+38%', c: 'var(--color-mint-glow)' },
  { l: 'Avg. position', v: '1.8', d: '-6.2', c: 'var(--color-amber-glow)' },
]

const FEED = [
  { t: 'Campaign scaled', s: 'Meta · Prospecting', c: 'var(--color-brand-400)' },
  { t: 'Keyword cluster live', s: 'SEO · 14 terms', c: 'var(--color-cyan-glow)' },
  { t: 'Landing page shipped', s: 'Web · Variant B', c: 'var(--color-mint-glow)' },
  { t: 'Ad creative testing', s: 'Social · 6 variants', c: 'var(--color-amber-glow)' },
]

const ROTATE = ['SEO', 'Social Media', 'Paid Ads', 'Web Development', 'Ecommerce', 'Branding']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATE.length), 2100)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44">
      <OrbitRing className="-top-40 -left-48 hidden opacity-70 lg:block" size={560} />
      <OrbitRing className="top-6 -right-56 hidden opacity-60 lg:block" size={680} reverse />

      <div className="container-x relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="chip mb-8"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-glow opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-cyan-glow" />
            </span>
            Now onboarding Q3 partners
          </motion.div>

          <h1 className="max-w-5xl text-[2.7rem] leading-[1.02] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
            {['Level up your', 'digital presence.'].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.12 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-lg font-semibold sm:text-xl"
          >
            <span className="text-white/50">We build</span>
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
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-gradient-brand"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="text-white/50">that compounds.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-white/62 sm:text-lg"
          >
            We connect rankings to leads, leads to revenue, and performance trends to
            strategic planning — so growth is measured in money, not impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.64 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
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
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              { icon: 'shield', t: 'No lock-in contracts' },
              { icon: 'bolt', t: 'Reporting you can audit' },
              { icon: 'check', t: 'In-house team of 18+' },
            ].map((b) => (
              <span key={b.t} className="flex items-center gap-2 text-[0.86rem] text-white/50">
                <Icon name={b.icon} className="size-4 text-cyan-glow" strokeWidth={1.8} />
                {b.t}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div className="glass-strong relative overflow-hidden rounded-[1.75rem] shadow-[0_50px_120px_-45px_rgba(0,0,0,0.95)]">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-cyan-glow),var(--color-brand-400),transparent)]" />
            {!reduce && (
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 animate-scan bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-cyan-glow)_7%,transparent),transparent)]" />
            )}

            <div className="flex flex-wrap items-center gap-3 border-b border-brand-300/10 px-5 py-4 sm:px-7">
              <span className="size-2.5 rounded-full bg-rose-glow/60" />
              <span className="size-2.5 rounded-full bg-amber-glow/60" />
              <span className="size-2.5 rounded-full bg-mint-glow/60" />
              <div className="ml-2 flex items-center gap-2 rounded-lg border border-brand-300/12 bg-ink-950/60 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--color-cyan-glow)]" />
                <span className="font-mono text-[0.66rem] text-white/45">
                  stadoworld.com/console
                </span>
              </div>
              <div className="ml-auto hidden items-center gap-1.5 sm:flex">
                {['30D', '90D', '12M'].map((r, i) => (
                  <span
                    key={r}
                    className={`rounded-md px-2.5 py-1 font-mono text-[0.62rem] ${
                      i === 1
                        ? 'border border-brand-400/40 bg-brand-500/15 text-white'
                        : 'text-white/30'
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.5fr_0.85fr]">
              <div className="border-b border-brand-300/10 p-5 sm:p-7 lg:border-r lg:border-b-0">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.62rem] tracking-[0.18em] text-cyan-glow uppercase">
                      Attributed revenue
                    </p>
                    <p className="mt-1.5 font-display text-3xl font-extrabold text-white sm:text-4xl">
                      ₹48,20,400
                    </p>
                  </div>
                  <span className="rounded-lg border border-mint-glow/25 bg-mint-glow/10 px-2.5 py-1 font-mono text-[0.7rem] text-mint-glow">
                    +41.2%
                  </span>
                </div>

                <svg viewBox="0 0 728 210" className="mt-6 h-44 w-full sm:h-52" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroLine" x1="0" x2="1">
                      <stop offset="0%" stopColor="var(--color-brand-400)" />
                      <stop offset="60%" stopColor="var(--color-brand-500)" />
                      <stop offset="100%" stopColor="var(--color-cyan-glow)" />
                    </linearGradient>
                    <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-cyan-glow)" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="var(--color-brand-500)" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3].map((g) => (
                    <line
                      key={g}
                      x1="0"
                      x2="728"
                      y1={g * 52 + 6}
                      y2={g * 52 + 6}
                      stroke="color-mix(in oklab, var(--color-brand-300) 9%, transparent)"
                      strokeWidth="1"
                    />
                  ))}
                  <motion.path
                    d={AREA}
                    fill="url(#heroArea)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.9 }}
                  />
                  <motion.path
                    d={LINE}
                    fill="none"
                    stroke="url(#heroLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: reduce ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.85, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.circle
                    cx="728"
                    cy="50"
                    r="5"
                    fill="var(--color-cyan-glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: '728px 50px' }}
                  />
                </svg>

                <div className="mt-3 flex justify-between">
                  {MONTHS.map((m) => (
                    <span key={m} className="font-mono text-[0.6rem] text-white/22">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-brand-300/8 lg:grid-cols-1">
                {KPIS.map((k, i) => (
                  <motion.div
                    key={k.l}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.09, duration: 0.6 }}
                    className="bg-ink-900/70 px-5 py-5 sm:px-6"
                  >
                    <p className="text-[0.7rem] text-white/40">{k.l}</p>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="font-display text-xl font-extrabold text-white sm:text-2xl">
                        {k.v}
                      </span>
                      <span className="font-mono text-[0.68rem]" style={{ color: k.c }}>
                        {k.d}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid gap-px border-t border-brand-300/10 bg-brand-300/8 md:grid-cols-2">
              <div className="bg-ink-900/70 p-5 sm:p-6">
                <p className="mb-4 font-mono text-[0.62rem] tracking-[0.16em] text-white/35 uppercase">
                  Live activity
                </p>
                <div className="space-y-2.5">
                  {FEED.map((f, i) => (
                    <motion.div
                      key={f.t}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.1, duration: 0.55 }}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="size-1.5 shrink-0 rounded-full"
                        style={{ background: f.c, boxShadow: `0 0 8px ${f.c}` }}
                      />
                      <span className="truncate text-[0.82rem] text-white/78">{f.t}</span>
                      <span className="ml-auto hidden shrink-0 font-mono text-[0.64rem] text-white/28 sm:block">
                        {f.s}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-ink-900/70 p-5 sm:p-6">
                <p className="mb-4 font-mono text-[0.62rem] tracking-[0.16em] text-white/35 uppercase">
                  Channel mix
                </p>
                <div className="space-y-3.5">
                  {[
                    { l: 'Organic search', v: 46, c: 'var(--color-brand-400)' },
                    { l: 'Paid media', v: 28, c: 'var(--color-cyan-glow)' },
                    { l: 'Social', v: 16, c: 'var(--color-mint-glow)' },
                    { l: 'Email', v: 10, c: 'var(--color-amber-glow)' },
                  ].map((d, i) => (
                    <div key={d.l}>
                      <div className="flex items-baseline justify-between text-[0.78rem]">
                        <span className="text-white/62">{d.l}</span>
                        <span className="font-mono text-white">{d.v}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/6">
                        <motion.span
                          className="block h-full rounded-full"
                          style={{ background: d.c, boxShadow: `0 0 10px ${d.c}` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${d.v * 2.1}%` }}
                          transition={{ delay: 1.6 + i * 0.11, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 border-t border-brand-300/10 px-5 py-3.5 sm:px-7">
              <Icon name="bolt" className="size-3.5 shrink-0 text-amber-glow" />
              <p className="truncate font-mono text-[0.68rem] text-white/45">
                <span className="text-mint-glow">$</span> stado deploy --channel all
                <span className="animate-blink ml-0.5 text-cyan-glow">▊</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20"
        >
          <p className="mb-6 text-center font-mono text-[0.66rem] tracking-[0.24em] text-white/28 uppercase">
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
                    className="font-display text-lg font-semibold whitespace-nowrap text-white/22 transition-colors duration-300 hover:text-brand-300 sm:text-xl"
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