import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { routeFromPath } from '../routes'

// Guards dasbor / pantau-siswa / laporan-belajar. Sends guests to /masuk
// and remembers where they were headed so login can bounce them back.
export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const loc = useLocation()
  if (!user) {
    return <Navigate to="/masuk" replace state={{ redirect: routeFromPath(loc.pathname) }} />
  }
  return children
}
