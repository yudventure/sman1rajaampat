import { useState } from 'react'

/* Gambar berita dengan rantai fallback:
   1. n.imgUrl       — foto topikal (kata kunci relevan dengan berita)
   2. n.imgFallback  — foto cadangan dari layanan yang sangat stabil
   3. placeholder bergaris berlabel (data-ph) — layout tidak pernah rusak
   Ganti imgUrl dengan foto asli sekolah di src/data/content.js kapan saja. */
export default function NewsImage({ n, className = '', style }) {
  const urls = [n.imgUrl, n.imgFallback].filter(Boolean)
  const [idx, setIdx] = useState(0)
  return (
    <span className={('ph ' + className).trim()} data-ph={n.img} style={{ display: 'block', ...style }}>
      {idx < urls.length ? (
        <img
          key={urls[idx]}
          src={urls[idx]}
          alt={n.title}
          loading="lazy"
          onError={() => setIdx((i) => i + 1)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
      ) : null}
    </span>
  )
}
