import { useState } from 'react'
import { motion } from 'motion/react'
import Icon from './Icon'
import { Section } from './Decor'
import { Reveal } from './motion'
import { SERVICES } from '../data/site'

const BUDGETS = ['< ₹1L / mo', '₹1L – ₹3L / mo', '₹3L – ₹8L / mo', '₹8L+ / mo']

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [budget, setBudget] = useState(BUDGETS[1])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-brand-300/15 bg-ink-950/55 px-4 py-3.5 text-[0.92rem] text-white placeholder-white/35 outline-none transition-all duration-300 focus:border-cyan-glow/55 focus:bg-ink-950/75 focus:ring-4 focus:ring-cyan-glow/10'

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-64 max-w-3xl rounded-[50%] bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--color-brand-500)_22%,transparent),transparent_70%)] blur-3xl" />

      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <span className="section-eyebrow">
                <span className="inline-block size-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_var(--color-cyan-glow)]" />
                Free growth audit
              </span>
              <h2 className="mt-5 text-4xl leading-[1.06] font-bold text-white sm:text-5xl">
                Let&apos;s find the
                <br />
                <span className="text-gradient">fastest path to revenue</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-white/68">
                Book a 30-minute audit. We&apos;ll review your current funnel, ad accounts and
                search visibility, then send you a prioritised action plan — free, whether or not
                we work together.
              </p>

              <div className="mt-10 space-y-3.5">
                {[
                  { icon: 'phone', l: 'Call us', v: '+91 91174 18000', href: 'tel:+919117418000' },
                  { icon: 'mail', l: 'Email', v: 'business@stadoadtech.com', href: 'mailto:business@stadoadtech.com' },
                  { icon: 'pin', l: 'Studio', v: 'Jaipur, Rajasthan, India' },
                ].map((c, i) => (
                  <motion.div
                    key={c.l}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.6 }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        className="group flex items-center gap-4 rounded-2xl border border-brand-300/12 bg-ink-900/45 px-5 py-4 backdrop-blur-xl transition-all duration-400 hover:border-cyan-glow/45 hover:bg-ink-800/60"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500/14 text-cyan-glow transition-transform duration-400 group-hover:scale-110">
                          <Icon name={c.icon} className="size-4.5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block font-mono text-[0.62rem] tracking-[0.16em] text-white/40 uppercase">
                            {c.l}
                          </span>
                          <span className="mt-0.5 block text-[0.94rem] font-medium text-white">
                            {c.v}
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-brand-300/12 bg-ink-900/45 px-5 py-4 backdrop-blur-xl">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500/14 text-cyan-glow">
                          <Icon name={c.icon} className="size-4.5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block font-mono text-[0.62rem] tracking-[0.16em] text-white/40 uppercase">
                            {c.l}
                          </span>
                          <span className="mt-0.5 block text-[0.94rem] font-medium text-white">
                            {c.v}
                          </span>
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {SERVICES.slice(0, 4).map((s) => (
                  <span key={s.id} className="chip">
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-cyan-glow),var(--color-brand-400),transparent)]" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
                    className="grid size-18 place-items-center rounded-3xl bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-mint-glow))]"
                  >
                    <Icon name="check" className="size-9 text-white" strokeWidth={2.4} />
                  </motion.span>
                  <h3 className="mt-7 font-display text-2xl font-bold text-white">
                    Request received
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.95rem] text-white/65">
                    Thanks for reaching out. Our strategist will review your details and get back
                    to you within one business day with next steps.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-8"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Tell us about your project
                    </h3>
                    <p className="mt-2 text-sm text-white/55">
                      We reply within 24 hours. No spam, ever.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[0.78rem] font-medium text-white/65">
                        Full name
                      </label>
                      <input id="name" name="name" required className={field} placeholder="Rishu Kumar" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-[0.78rem] font-medium text-white/65">
                        Company
                      </label>
                      <input id="company" name="company" className={field} placeholder="Aan Store" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-[0.78rem] font-medium text-white/65">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={field}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-[0.78rem] font-medium text-white/65">
                      What do you need?
                    </label>
                    <select id="service" name="service" className={`${field} appearance-none`}>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id} className="bg-ink-900">
                          {s.title}
                        </option>
                      ))}
                      <option value="other" className="bg-ink-900">
                        Something else
                      </option>
                    </select>
                  </div>

                  <div>
                    <span className="mb-2.5 block text-[0.78rem] font-medium text-white/65">
                      Monthly budget
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`rounded-full border px-3.5 py-2 text-[0.78rem] font-medium transition-all duration-300 ${
                            budget === b
                              ? 'border-transparent bg-[linear-gradient(100deg,var(--color-brand-600),var(--color-brand-500))] text-white shadow-[0_6px_20px_-8px_var(--color-brand-500)]'
                              : 'border-brand-300/15 bg-ink-950/50 text-white/65 hover:border-cyan-glow/45 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-[0.78rem] font-medium text-white/65">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${field} resize-none`}
                      placeholder="Current traffic, goals, timeline…"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Request my free audit
                    <Icon name="arrow" className="size-4" strokeWidth={2} />
                  </button>

                  <p className="text-center text-[0.72rem] text-white/38">
                    By submitting you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
