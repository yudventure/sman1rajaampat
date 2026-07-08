/* Shared SVG icon set. `<Icon name="enroll" />` renders a service glyph;
   social icons are exported individually. Ported 1:1 from the prototype. */

export const SERVICE_ICONS = {
  enroll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
      <circle cx="17" cy="17" r="4" fill="#fff" />
      <path d="M15.4 17l1.1 1.1 2-2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  complaint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5h16v11H9l-4 4V5z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" strokeLinecap="round" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 18V9M9 18V5M14 18v-6M19 18v-9" strokeLinecap="round" />
      <path d="M3 21h18" strokeLinecap="round" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 21V6l8-3 8 3v15" strokeLinejoin="round" />
      <path d="M9 21v-5h6v5M9 9h.01M15 9h.01M9 12.5h.01M15 12.5h.01" strokeLinecap="round" />
    </svg>
  ),
  news: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h6M7 12h6M7 15h4M16 9h1M16 12h1" strokeLinecap="round" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
}

export function Icon({ name }) {
  return SERVICE_ICONS[name] || null
}

export const ArrowRight = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const LoginIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...props}>
    <path d="M10 17l5-5-5-5M15 12H3M14 4h5a1 1 0 011 1v14a1 1 0 01-1 1h-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ---------- Social icons ---------- */
export const InstagramIcon = ({ size = 23 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
export const TiktokIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 11-1.79-2.46V9.66a5.87 5.87 0 00-.88-.07A5.66 5.66 0 1015.43 15.3V9.35a7.35 7.35 0 004.3 1.38V7.66a4.28 4.28 0 01-3.13-1.84z" />
  </svg>
)
export const FacebookIcon = ({ size = 23 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 21v-7h2.4l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.8 5 13.8 5 11.6 5 10 6.3 10 8.8V11H7.6v3H10v7h3z" />
  </svg>
)
export const YoutubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 002.42 7.2 26 26 0 002 12c0 1.62.14 3.23.42 4.81a2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77c.28-1.58.42-3.19.42-4.81s-.14-3.23-.42-4.81zM10 15.2V8.8L15.5 12 10 15.2z" />
  </svg>
)

// [key, iconComponent] in display order — used by hero panel, footer, kontak
export const SOCIAL_LIST = [
  ['instagram', 'Instagram', InstagramIcon],
  ['tiktok', 'TikTok', TiktokIcon],
  ['facebook', 'Facebook', FacebookIcon],
  ['youtube', 'YouTube', YoutubeIcon],
]
