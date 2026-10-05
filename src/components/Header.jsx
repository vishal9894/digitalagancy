import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react'
import Icon from './Icon'
import { NAV_LINKS } from '../data/site'

function Logo({ compact = false }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="Stado World home">
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-cyan-glow))] shadow-[0_6px_22px_-6px_var(--color-brand-500)] transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19V6.5a1 1 0 0 1 1.53-.85l11 6.35a1 1 0 0 1 0 1.68l-11 6.35A1 1 0 0 1 4 19Z" />
        </svg>
        <span className="absolute inset-0 translate-x-[-120%] bg-white/35 transition-transform duration-700 group-hover:translate-x-[120%]" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.06rem] font-extrabold tracking-tight text-white">
            Stado<span className="text-gradient-brand">World</span>
          </span>
          <span className="mt-1 font-mono text-[0.58rem] tracking-[0.2em] text-white/40 uppercase">
            Digital Agency
          </span>
        </span>
      )}
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { scrollY, scrollYProgress } = useScroll()
  const reduce = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'border-b border-brand-300/12 bg-ink-950/78 backdrop-blur-2xl'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors duration-300 ${
                    active === l.href
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-brand-300/22 bg-brand-500/14"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="btn-primary hidden sm:inline-flex">
                Free Consultation
                <Icon name="arrow" className="size-4" strokeWidth={2} />
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="grid size-10 place-items-center rounded-xl border border-brand-300/20 bg-ink-800/70 text-white transition-colors hover:border-cyan-glow/50 lg:hidden"
              >
                <Icon name={open ? 'close' : 'menu'} className="size-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <motion.div
            style={{ scaleX: reduce ? 0 : scrollYProgress }}
            className="h-px origin-left bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-cyan-glow),transparent)]"
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/80 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(21rem,86vw)] flex-col gap-2 border-l border-brand-300/14 bg-ink-900/96 px-6 pt-28 pb-10 backdrop-blur-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.055, duration: 0.45 }}
                    className="flex items-center justify-between border-b border-brand-300/8 py-4 font-display text-lg font-semibold text-white/85 transition-colors hover:text-cyan-glow"
                  >
                    {l.label}
                    <Icon name="arrow" className="size-4 opacity-45" strokeWidth={2} />
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="btn-primary mt-6 w-full"
              >
                Get Free Consultation
              </motion.a>
              <div className="mt-auto space-y-1.5 text-sm text-white/60">
                <p className="flex items-center gap-2">
                  <Icon name="phone" className="size-4" /> +91 91174 18000
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="mail" className="size-4" /> business@stadoadtech.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
