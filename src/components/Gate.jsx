import { useNavigate, useLocation } from 'react-router-dom'
import { routeFromPath } from '../routes'

// Login wall shown when a guest lands on a protected feature.
export default function Gate({ msg }) {
  const nav = useNavigate()
  const loc = useLocation()
  return (
    <section className="wrap sec">
      <div className="card pad" style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <div className="avatar" style={{ margin: '0 auto 18px' }}>🔒</div>
        <h2 className="dispmd">Perlu Masuk Akun</h2>
        <p className="muted" style={{ margin: '12px 0 22px' }}>{msg}</p>
        <button
          className="btn btn-p"
          onClick={() => nav('/masuk', { state: { redirect: routeFromPath(loc.pathname) } })}
        >
          Masuk ke Akun
        </button>
      </div>
    </section>
  )
}
