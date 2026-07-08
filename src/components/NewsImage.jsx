import { useState } from 'react'

/* Gambar berita dengan fallback: memuat n.imgUrl di atas placeholder
   bergaris; kalau gambar gagal dimuat, placeholder berlabel (data-ph)
   tetap tampil sehingga layout tidak pernah rusak. */
export default function NewsImage({ n, className = '', style }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={('ph ' + className).trim()} data-ph={n.img} style={{ display: 'block', ...style }}>
      {!failed && n.imgUrl ? (
        <img
          src={n.imgUrl}
          alt={n.title}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
      ) : null}
    </span>
  )
}
