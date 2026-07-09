import { useState } from 'react'
import { GALERI } from '../data/content'
import PageHead from '../components/PageHead'
import NewsImage from '../components/NewsImage'

const STEP = 12 // tampil 12 dulu, tombol memuat sisanya

export default function Galeri() {
  const [shown, setShown] = useState(STEP)
  const visible = GALERI.slice(0, shown)
  const sisa = GALERI.length - shown

  return (
    <>
      <PageHead
        eyebrow="Galeri Sekolah"
        title="Dokumentasi kegiatan"
        sub="Potret kegiatan belajar, konservasi bahari, olahraga, seni, dan fasilitas SMA Negeri 1 Raja Ampat."
      />
      <section className="wrap sec" style={{ paddingTop: 36 }}>
        <div className="galgrid">
          {visible.map((g, i) => (
            <figure key={g.id} className="galcard rv" style={{ margin: 0, '--rvd': (i % 4) * 0.06 + 's' }}>
              <NewsImage n={g} style={{ position: 'absolute', inset: 0 }} />
              <span className="chip galtag">{g.cat}</span>
              <figcaption className="galcap">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
        {sisa > 0 && (
          <div className="tc" style={{ marginTop: 30 }}>
            <button className="btn btn-o" onClick={() => setShown((s) => s + STEP)}>
              Tampilkan Lebih Banyak ({sisa} foto lagi)
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </section>
    </>
  )
}
