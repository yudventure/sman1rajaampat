import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import { to } from '../routes'
import PageHead from '../components/PageHead'

export default function Berita() {
  const nav = useNavigate()
  const go = (id) => nav(to('berita-detail', id))
  const [news, setNews] = useState([])
  const [important, setImportant] = useState([])

  useEffect(() => {
    let alive = true
    api.getNews().then((all) => { if (alive) { setNews(all); setImportant(all.filter((n) => n.important)) } })
    return () => { alive = false }
  }, [])

  return (
    <>
      <PageHead
        eyebrow="Berita & Pengumuman"
        title="Kabar terbaru sekolah"
        sub="Berita kegiatan, agenda, dan pengumuman resmi SMA Negeri 1 Raja Ampat."
      />

      <section className="wrap" style={{ paddingTop: 26 }}>
        <div className="card rv" style={{ background: 'var(--seadeep)', border: 'none', padding: '24px 26px' }}>
          <span className="pill">Pengumuman Penting</span>
          <div className="fx col gap12" style={{ marginTop: 14 }}>
            {important.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{ background: 'none', border: 'none', borderTop: '1px solid rgba(255,255,255,.14)', paddingTop: 12, textAlign: 'left', cursor: 'pointer', color: '#fff' }}
              >
                <div className="fx ac jb gap12" style={{ flexWrap: 'wrap' }}>
                  <b className="serif" style={{ fontSize: 19, fontWeight: 500, color: '#fff' }}>{n.title}</b>
                  <span style={{ color: '#9cc4ea', fontSize: 13, flex: 'none' }}>{n.date} →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 40 }}>
        <h2 className="displg" style={{ marginBottom: 26 }}>Semua Berita</h2>
        <div className="grid-news">
          {news.map((n, i) => (
            <button key={n.id} className="card svccard rv" onClick={() => go(n.id)} style={{ overflow: 'hidden', textAlign: 'left', display: 'flex', flexDirection: 'column', padding: 0, '--rvd': (i % 3) * 0.08 + 's' }}>
              <span className="ph news-img" data-ph={n.img}></span>
              <span className="pad" style={{ display: 'block' }}>
                <span className={'tag ' + n.tagcls}>{n.type} · {n.cat}</span>
                <b className="serif" style={{ fontSize: 20, fontWeight: 500, display: 'block', marginTop: 10, lineHeight: 1.2 }}>{n.title}</b>
                <span className="muted" style={{ fontSize: 14, display: 'block', marginTop: 8, lineHeight: 1.55 }}>{n.summary}</span>
                <span className="muted" style={{ fontSize: 12.5, display: 'block', marginTop: 14 }}>{n.date} · {n.author}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
