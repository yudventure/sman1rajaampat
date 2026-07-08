import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { to } from '../routes'
import { DEMO_ACCOUNTS, DEMO_PASSWORD } from '../data/mock'

export default function Masuk() {
  const { login } = useAuth()
  const nav = useNavigate()
  const loc = useLocation()
  const redirect = loc.state?.redirect
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')

  const doLogin = async (e) => {
    e.preventDefault()
    try {
      await login(email, pw)
      nav(to(redirect || 'dasbor'), { replace: true })
    } catch (ex) {
      setErr(ex.message || 'Email atau kata sandi salah. Silakan coba lagi.')
    }
  }
  const quickFill = (em) => { setEmail(em); setPw(DEMO_PASSWORD); setErr('') }

  return (
    <section className="wrap sec" style={{ paddingTop: 56 }}>
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <span className="eyebrow">Akses Khusus Warga Sekolah</span>
          <h1 className="displg" style={{ marginTop: 10 }}>Masuk Akun</h1>
          <p className="muted" style={{ marginTop: 10, fontSize: 14 }}>
            {redirect ? 'Silakan masuk untuk mengakses fitur tersebut.' : 'Untuk guru, siswa, dan wali murid.'}
          </p>
        </div>

        <form className="card pad" onSubmit={doLogin}>
          <div className="field"><label>Email</label><input className="inp" type="email" placeholder="nama@raja1.sch.id" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="field"><label>Kata Sandi</label><input className="inp" type="password" placeholder="••••••••" value={pw} onChange={(e) => setPw(e.target.value)} /></div>
          {err ? <div className="alert alert-e" style={{ marginBottom: 14 }}>⚠ {err}</div> : null}
          <button className="btn btn-p" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Masuk</button>
        </form>

        <div className="card" style={{ marginTop: 16, padding: '16px 18px', background: 'var(--paper)' }}>
          <div className="muted" style={{ fontSize: 12.5, marginBottom: 10 }}>Akun demo — klik untuk mengisi otomatis (kata sandi: {DEMO_PASSWORD}):</div>
          <div className="roleswitch">
            {DEMO_ACCOUNTS.map((a) => (
              <button key={a.email} type="button" className="rolebtn" onClick={() => quickFill(a.email)}>{a.label}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
