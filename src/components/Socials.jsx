import { school } from '../config/school'
import { SOCIAL_LIST } from './icons'

/* Renders the school's social links. `itemClass` styles each anchor
   (e.g. "soc", "soc soc-l", "ssoc"); `size` sets glyph size. */
export default function Socials({ itemClass = 'soc', size, sizes = {} }) {
  return SOCIAL_LIST.map(([key, label, IconComp]) => {
    const href = school.social[key]
    if (!href) return null
    return (
      <a key={key} className={itemClass} href={href} target="_blank" rel="noopener" aria-label={label}>
        <span className="fx ac"><IconComp size={sizes[key] || size} /></span>
      </a>
    )
  })
}
