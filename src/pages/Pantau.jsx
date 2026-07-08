import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../api'
import { to } from '../routes'
import AuthHeader from '../components/AuthHeader'

export default function Pantau() {
  const { user } = useAuth()
  const nav = useNavigate()
  const [att, setAtt] = useState(null)
  const [catatan, setCatatan] = useState([])
  const [binaan, setBinaan] = useState([])

  useEffect(() => {
    let alive = true
    if (user.role === 'Guru') {
      api.getSiswaBinaan().then((b) => { if (alive) setBinaan(b) })
    } else {
      Promise.all([api.getAttendance(), api.getCatatan()]).then(([a, c]) => {
        if (alive) { setAtt(a); setCatatan(c) }
      })
    }
    return () => { alive = false }
  }, [user.role])

  if (user.role === 'Guru') {
    return (
      <section className="wrap sec" style={{ paddingTop: 44 }}>
        <AuthHeader />
        <h1 className="displg" style={{ margin: '26px 0 20px' }}>Data Siswa Binaan</h1>
        <div className="card" style={{ overflow: 'hidden' }}>
          <table className="tbl">
            <thead><tr><th>Nama</th><th>Kelas</th><th>Hadir</th><th>Catatan</th></tr></thead>
            <tbody>
              {binaan.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  const child = user.role === 'Wali Murid' ? user.child : user.name
  return (
    <section className="wrap sec" style={{ paddingTop: 44 }}>
      <AuthHeader />
      <h1 className="displg" style={{ margin: '26px 0 6px' }}>Pantauan Siswa</h1>
      <p className="muted" style={{ marginBottom: 24 }}>Ringkasan kehadiran dan catatan untuk <b>{child}</b>.</p>
      <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
        <div className="dashcard">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Kehadiran Semester Berjalan</div>
          <div className="statbar">
            {att && [['Hadir', att.hadir], ['Izin', att.izin], ['Sakit', att.sakit], ['Alpa', att.alpa]].map(([l, v], i) => (
              <div className="kpi" key={i}><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
          <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>Total 84 hari efektif · Persentase kehadiran 98%</p>
        </div>
        <div className="dashcard">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Catatan Wali Kelas & Guru</div>
          <div className="fx col gap14">
            {catatan.map((c, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--sea)', paddingLeft: 14 }}>
                <p style={{ fontSize: 14.5 }}>{c.t}</p><span className="muted" style={{ fontSize: 12 }}>{c.by}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn btn-p" onClick={() => nav(to('laporan-belajar'))} style={{ marginTop: 22 }}>Lihat Laporan Belajar →</button>
    </section>
  )
}
