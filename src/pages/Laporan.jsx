import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api'
import AuthHeader from '../components/AuthHeader'

export default function Laporan() {
  const { user } = useAuth()
  const semesters = api.getSemesters()
  const [semester, setSemester] = useState(semesters[0])
  const [rows, setRows] = useState([])

  useEffect(() => {
    let alive = true
    api.getGrades(semester).then((r) => { if (alive) setRows(r) })
    return () => { alive = false }
  }, [semester])

  const avg = rows.length ? Math.round(rows.reduce((a, b) => a + b.v, 0) / rows.length) : 0
  const who = user.role === 'Wali Murid' ? user.child : user.name
  const badgeCls = (v) => (v >= 85 ? 'b-ok' : v >= 75 ? 'b-wait' : 'b-no')

  return (
    <section className="wrap sec" style={{ paddingTop: 44 }}>
      <AuthHeader />
      <div className="fx ac jb gap16" style={{ margin: '26px 0 20px', flexWrap: 'wrap' }}>
        <div>
          <h1 className="displg">Laporan Belajar</h1>
          <p className="muted" style={{ marginTop: 6 }}>{who} · Rata-rata {avg}</p>
        </div>
        <select className="inp" style={{ width: 'auto' }} value={semester} onChange={(e) => setSemester(e.target.value)}>
          {semesters.map((k) => <option key={k}>{k}</option>)}
        </select>
      </div>
      <div className="card" style={{ overflow: 'hidden' }}>
        <table className="tbl">
          <thead><tr><th>Mata Pelajaran</th><th style={{ width: 80 }}>Nilai</th><th>Catatan Evaluasi Guru</th></tr></thead>
          <tbody>
            {rows.map((g, i) => (
              <tr key={i}>
                <td><b>{g.s}</b></td>
                <td><span className={'badge ' + badgeCls(g.v)}>{g.v}</span></td>
                <td className="muted">{g.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
