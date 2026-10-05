const PATHS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="19" r="2.6" />
      <path d="m8.4 10.8 7.2-4.2M8.4 13.2l7.2 4.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.6 5l-3.2 14" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.3 10.2a1.6 1.6 0 0 0 1.6 1.3h7.6a1.6 1.6 0 0 0 1.6-1.2L20 8H6" />
      <circle cx="9.5" cy="19" r="1.3" />
      <circle cx="17" cy="19" r="1.3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2 10.3 12.4 4.5 10.7 10.3 9 12 3.2Z" />
      <path d="M18.6 3.4v3.2M20.2 5h-3.2" />
    </>
  ),
  app: (
    <>
      <rect x="6.5" y="2.8" width="11" height="18.4" rx="2.6" />
      <path d="M10.6 5.2h2.8" />
    </>
  ),
  erp: (
    <>
      <rect x="3" y="4.5" width="7.5" height="6" rx="1.5" />
      <rect x="13.5" y="4.5" width="7.5" height="6" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="6" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="6" rx="1.5" />
    </>
  ),
  uiux: (
    <>
      <path d="M3.5 8.5 12 3.5l8.5 5M3.5 15.5 12 20.5l8.5-5" />
      <path d="M12 3.5v17" />
    </>
  ),
  arrow: (
    <>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  bolt: <path d="M13.5 2.5 4 14h7l-.5 7.5L20 10h-7l.5-7.5Z" />,
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16.5v-4M12.5 16.5V8M17 16.5v-6.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.3 2.9 7.9 7 9.3 4.1-1.4 7-5 7-9.3V5.8L12 3Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.8" />
      <path d="M10.5 5.5h3" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="m3.6 7 7.3 5.4a2 2 0 0 0 2.2 0L20.4 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: (
    <>
      <path d="M9.5 6.5C6.6 7.7 5 10 5 13.2V18h5.6v-5.4H8.1c0-2 .7-3.3 2.4-4.1l-1-2Zm9 0C15.6 7.7 14 10 14 13.2V18h5.6v-5.4h-2.5c0-2 .7-3.3 2.4-4.1l-1-2Z" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
}

export default function Icon({ name, className = 'size-5', strokeWidth = 1.6 }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d}
    </svg>
  )
}
