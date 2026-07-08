import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api'
import { to } from '../routes'

export default function BeritaDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const go = (nid) => nav(to('berita-detail', nid))
  const [n, setN] = useState(undefined)
  const [related, setRelated] = useState([])

  useEffect(() => {
    let alive = true
    Promise.all([api.getNewsById(id), api.getNews()]).then(([item, all]) => {
      if (!alive) return
      setN(item)
      setRelated(all.filter((x) => x.id !== Number(id)).slice(0, 3))
    })
    return () => { alive = false }
  }, [id])

  if (n === null) return <section className="wrap sec"><p>Berita tidak ditemukan.</p></section>
  if (!n) return <section className="wrap sec"><p className="muted">Memuat…</p></section>

  return (
    <section className="wrap sec" style={{ paddingTop: 44 }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <button className="link-arrow" onClick={() => nav(to('berita'))} style={{ marginBottom: 18 }}>← Kembali ke Berita</button>
        <span className={'tag ' + n.tagcls}>{n.type} · {n.cat}</span>
        <h1 className="displg" style={{ margin: '12px 0 14px' }}>{n.title}</h1>
        <p className="muted" style={{ fontSize: 14 }}>{n.date} · Oleh {n.author}</p>
        <div className="ph" data-ph={n.img} style={{ aspectRatio: '16/8', borderRadius: 16, margin: '24px 0' }}></div>
        <div className="lead" style={{ color: 'var(--ink2)' }}>
          {n.body.map((p, i) => <p key={i} style={{ marginBottom: 18 }}>{p}</p>)}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '56px auto 0' }}>
        <h3 className="dispmd" style={{ marginBottom: 22 }}>Berita Lainnya</h3>
        <div className="grid-3">
          {related.map((x) => (
            <button key={x.id} className="card pad svccard" onClick={() => go(x.id)} style={{ textAlign: 'left' }}>
              <span className={'tag ' + x.tagcls}>{x.type}</span>
              <b className="serif" style={{ fontSize: 18, fontWeight: 500, display: 'block', marginTop: 8, lineHeight: 1.25 }}>{x.title}</b>
              <span className="muted" style={{ fontSize: 12.5, display: 'block', marginTop: 10 }}>{x.date}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
