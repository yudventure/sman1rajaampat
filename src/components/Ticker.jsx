import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import { to } from '../routes'

export default function Ticker() {
  const [show, setShow] = useState(true)
  const [text, setText] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    let alive = true
    api.getImportantNews().then((list) => {
      if (alive && list[0]) setText(list[0].title)
    })
    return () => { alive = false }
  }, [])

  if (!show || !text) return null

  return (
    <div className="topbar">
      <div className="wrap tick">
        <span className="pill">Penting</span>
        <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {text}
        </span>
        <a onClick={() => nav(to('berita'))} style={{ flex: 'none', fontWeight: 600 }}>Selengkapnya</a>
        <button
          onClick={() => setShow(false)}
          aria-label="Tutup"
          style={{ background: 'none', border: 0, color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1, flex: 'none', opacity: 0.8, position: 'absolute', right: 0 }}
        >
          ×
        </button>
      </div>
    </div>
  )
}
