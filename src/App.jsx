import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Profil from './pages/Profil'
import Layanan from './pages/Layanan'
import Pendaftaran from './pages/Pendaftaran'
import Berita from './pages/Berita'
import BeritaDetail from './pages/BeritaDetail'
import Pengaduan from './pages/Pengaduan'
import Galeri from './pages/Galeri'
import Kontak from './pages/Kontak'
import Masuk from './pages/Masuk'
import Dasbor from './pages/Dasbor'
import Pantau from './pages/Pantau'
import Laporan from './pages/Laporan'

export default function App() {
  const nav = useNavigate()
  return (
    <AuthProvider onSessionTimeout={() => nav('/masuk')}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/dasbor" element={<ProtectedRoute><Dasbor /></ProtectedRoute>} />
          <Route path="/pantau-siswa" element={<ProtectedRoute><Pantau /></ProtectedRoute>} />
          <Route path="/laporan-belajar" element={<ProtectedRoute><Laporan /></ProtectedRoute>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
