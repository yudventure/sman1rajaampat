import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../api'
import { to } from '../routes'
import AuthHeader from '../components/AuthHeader'

const FIRST_SEMESTER = 'Ganjil 2025/2026'

function Card({ title, children }) {
  return (
    <div className="dashcard">
      <div className="eyebrow" style={{ marginBottom: 14 }}>{title}</div>
      {children}
    </div>
  )
}

export default function Dasbor() {
  const { user } = useAuth()
  const nav = useNavigate()
  const go = (route) => nav(to(route))
  const [data, setData] = useState(null)

  useEffect(() => {
    let alive = true
    async function load() {
      if (user.role === 'Wali Murid') {
        const [att, grades] = await Promise.all([api.getAttendance(), api.getGrades(FIRST_SEMESTER)])
        if (alive) setData({ att, grades })
      } else if (user.role === 'Siswa') {
        const [jadwal, notif] = await Promise.all([api.getJadwal('Siswa'), api.getNotif()])
        if (alive) setData({ jadwal, notif })
      } else {
        const jadwal = await api.getJadwal('Guru')
        if (alive) setData({ jadwal })
      }
    }
    load()
    return () => { alive = false }
  }, [user.role])

  let panels = null
  if (data) {
    if (user.role === 'Wali Murid') {
      panels = (
        <>
          <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
            <Card title="Ananda">
              <div>
                <div className="fx ac gap12">
                  <div className="avatar">G</div>
                  <div><b style={{ fontSize: 18 }}>{user.child}</b><div className="muted" style={{ fontSize: 13.5 }}>{user.kelas} · NISN {user.nisn}</div></div>
                </div>
                <div className="statbar" style={{ marginTop: 18, gridTemplateColumns: 'repeat(4,1fr)' }}>
                  {[['Hadir', data.att.hadir], ['Izin', data.att.izin], ['Sakit', data.att.sakit], ['Alpa', data.att.alpa]].map(([l, v], i) => (
                    <div className="kpi" key={i}><b>{v}</b><span>{l}</span></div>
                  ))}
                </div>
              </div>
            </Card>
            <Card title="Nilai Terbaru">
              <div>
                {data.grades.slice(0, 4).map((g, i) => (
                  <div key={i} className="fx ac jb" style={{ padding: '9px 0', borderBottom: i < 3 ? '1px solid var(--line2)' : 'none' }}>
                    <span>{g.s}</span><b className="sea">{g.v}</b>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="fx gap12" style={{ marginTop: 20, flexWrap: 'wrap' }}>
            <button className="btn btn-p" onClick={() => go('pantau-siswa')}>Pantauan Siswa →</button>
            <button className="btn btn-o" onClick={() => go('laporan-belajar')}>Laporan Belajar →</button>
          </div>
        </>
      )
    } else if (user.role === 'Siswa') {
      panels = (
        <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
          <Card title="Jadwal Hari Ini">
            <div>
              {data.jadwal.map((j, i) => (
                <div key={i} className="fx ac gap12" style={{ padding: '8px 0', borderBottom: i < data.jadwal.length - 1 ? '1px solid var(--line2)' : 'none' }}>
                  <b className="sea" style={{ width: 52 }}>{j.j}</b><span>{j.m}</span>
                </div>
              ))}
            </div>
          </Card>
          <div>
            <Card title="Pemberitahuan">
              <div className="fx col gap12">
                {data.notif.map((n, i) => (
                  <div key={i} style={{ borderLeft: '3px solid var(--sea)', paddingLeft: 12 }}>
                    <div style={{ fontSize: 14.5 }}>{n.t}</div><span className="muted" style={{ fontSize: 12 }}>{n.d}</span>
                  </div>
                ))}
              </div>
            </Card>
            <button className="btn btn-o" onClick={() => go('laporan-belajar')} style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>Lihat Nilai Saya →</button>
          </div>
        </div>
      )
    } else {
      panels = (
        <>
          <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
            <Card title="Jadwal Mengajar Hari Ini">
              <div>
                {data.jadwal.map((j, i) => (
                  <div key={i} className="fx ac gap12" style={{ padding: '8px 0', borderBottom: i < data.jadwal.length - 1 ? '1px solid var(--line2)' : 'none' }}>
                    <b className="sea" style={{ width: 52 }}>{j.j}</b><span>{j.m}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="Kelas Diampu">
              <div className="fx gap8" style={{ flexWrap: 'wrap' }}>
                {['XI IPA 1', 'XI IPA 2', 'XII IPA 1'].map((k, i) => <span key={i} className="chip">{k}</span>)}
              </div>
            </Card>
          </div>
          <div className="fx gap12" style={{ marginTop: 20, flexWrap: 'wrap' }}>
            <button className="btn btn-p" onClick={() => go('pantau-siswa')}>Data Siswa →</button>
          </div>
        </>
      )
    }
  }

  return (
    <section className="wrap sec" style={{ paddingTop: 44 }}>
      <AuthHeader />
      <h1 className="displg" style={{ margin: '28px 0 6px' }}>Selamat datang, <span className="ital sea">{user.name}</span></h1>
      <p className="muted" style={{ marginBottom: 26 }}>Ringkasan informasi personal Anda.</p>
      {panels}
    </section>
  )
}
