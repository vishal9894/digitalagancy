import { motion } from 'motion/react'
import Icon from './Icon'
import { Marquee } from './motion'
import { CHANNELS, NAV_LINKS, SERVICES } from '../data/site'

const YEAR = new Date().getFullYear()

const SOCIALS = [
  {
    name: 'Instagram',
    d: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.4-3.3a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z',
  },
  {
    name: 'Facebook',
    d: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z',
  },
  {
    name: 'LinkedIn',
    d: 'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.48h3.4V21H3.3V8.48Zm5.6 0h3.26v1.7h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.26 4.07 5.2V21h-3.4v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21H8.9V8.48Z',
  },
  {
    name: 'X',
    d: 'M17.53 3H20.5l-6.49 7.42L21.5 21h-5.86l-4.6-6.02L5.7 21H2.73l6.94-7.93L2.5 3h6.02l4.16 5.51L17.53 3Zm-1.04 16.2h1.64L7.6 4.71H5.84L16.49 19.2Z',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-300/10 pt-20 pb-8">
      <div className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center overflow-hidden">
        <span className="bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-brand-300)_12%,transparent),transparent)] bg-clip-text font-display text-[19vw] leading-none font-extrabold text-transparent select-none">
          STADO WORLD
        </span>
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-cyan-glow))]">
                <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V6.5a1 1 0 0 1 1.53-.85l11 6.35a1 1 0 0 1 0 1.68l-11 6.35A1 1 0 0 1 4 19Z" />
                </svg>
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                Stado<span className="text-gradient-brand">World</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-white/55">
              A digital marketing and development studio. We ship the assets and
              infrastructure your growth depends on.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.name}
                  href="#home"
                  aria-label={s.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="grid size-10 place-items-center rounded-xl border border-brand-300/15 bg-ink-900/50 text-white/65 transition-all duration-400 hover:-translate-y-1 hover:border-cyan-glow/50 hover:text-cyan-glow"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[0.66rem] tracking-[0.2em] text-cyan-glow uppercase">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-[0.88rem] text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-cyan-glow transition-all duration-400 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.66rem] tracking-[0.2em] text-cyan-glow uppercase">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-[0.88rem] text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-cyan-glow transition-all duration-400 group-hover:w-4" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.66rem] tracking-[0.2em] text-cyan-glow uppercase">
              Start a project
            </h4>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-white/55">
              Get a free growth audit of your website, SEO and ad accounts.
            </p>
            <a href="#contact" className="btn-primary mt-6 w-full">
              Book a call
              <Icon name="arrow" className="size-4" strokeWidth={2} />
            </a>
            <div className="mt-6 space-y-2.5 text-[0.86rem]">
              <a
                href="tel:+919117418000"
                className="flex items-center gap-2.5 text-white/60 transition-colors hover:text-white"
              >
                <Icon name="phone" className="size-4 text-cyan-glow" strokeWidth={1.8} />
                +91 91174 18000
              </a>
              <a
                href="mailto:business@stadoadtech.com"
                className="flex items-center gap-2.5 break-all text-white/60 transition-colors hover:text-white"
              >
                <Icon name="mail" className="size-4 text-cyan-glow" strokeWidth={1.8} />
                business@stadoadtech.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-y border-brand-300/10 py-5">
          <Marquee>
            {CHANNELS.map((c) => (
              <span key={c.label} className="flex items-center gap-3 pr-12">
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
                />
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-white/40 uppercase">
                  {c.label}
                </span>
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[0.8rem] text-white/40">
            © {YEAR} Stado World — All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.8rem] text-white/40">
            {['Privacy Policy', 'Terms & Conditions', 'Cookies'].map((l) => (
              <a key={l} href="#home" className="transition-colors hover:text-cyan-glow">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
