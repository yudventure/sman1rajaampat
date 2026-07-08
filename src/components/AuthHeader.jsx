import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AuthHeader() {
  const { user, logout } = useAuth()
  const nav = useNavigate()
  if (!user) return null
  const lastInitial = user.name.split(' ').slice(-1)[0][0]

  return (
    <div className="card" style={{ padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', background: 'var(--surface)' }}>
      <div className="fx ac gap12">
        <div className="avatar" style={{ width: 46, height: 46, fontSize: 18 }}>{lastInitial}</div>
        <div>
          <div style={{ fontWeight: 600 }}>{user.name}</div>
          <span className="chip" style={{ marginTop: 2 }}>{user.role}</span>
        </div>
      </div>
      <button className="btn btn-o btn-sm" onClick={() => { logout(false); nav('/') }}>Keluar</button>
    </div>
  )
}
