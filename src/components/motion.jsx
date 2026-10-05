import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

export function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  className = '',
  once = true,
  amount = 0.25,
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', delay = 0, gap = 0.09 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ value, decimals = 0, suffix = '', duration = 2.1 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(() => (reduce ? value : 0))

  useEffect(() => {
    if (!inView || reduce) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Tilt({ children, className = '', strength = 8 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [t, setT] = useState({ rx: 0, ry: 0 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setT({ rx: -py * strength, ry: px * strength })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      animate={{ rotateX: t.rx, rotateY: t.ry }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      style={{ transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Spotlight({ children, className = '', color = 'var(--color-brand-400)' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50, on: false })

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      className={`group/spot relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, ${color} 16%, transparent), transparent 65%)`,
        }}
      />
      {children}
    </div>
  )
}

export function Marquee({ children, speed = 'normal', className = '' }) {
  return (
    <div className={`mask-fade-x relative flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center ${
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export function Scramble({ text, className = '' }) {
  const reduce = useReducedMotion()
  const [out, setOut] = useState(() => (reduce ? text : ''))
  const ref = useRef(null)
  const seen = useRef(false)
  const inv = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inv || seen.current || reduce) return
    seen.current = true
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*'
    let i = 0
    let frame = 0
    const total = text.length
    const step = () => {
      let s = ''
      for (let k = 0; k <= total; k++) {
        if (k < i) s += text[k]
        else if (k === total) s += text[k]
        else s += glyphs[(frame * 7 + k * 13) % glyphs.length]
      }
      setOut(s)
      frame++
      const settle = Math.max(1, Math.floor(i / 2))
      if (i < total) {
        i += settle >= 3 ? 2 : 1
        requestAnimationFrame(step)
      } else {
        setOut(text)
      }
    }
    step()
  }, [inv, text, reduce])

  return (
    <span ref={ref} className={className}>
      {out || text}
    </span>
  )
}
