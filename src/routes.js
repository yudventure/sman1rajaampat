/* Central route map so nav links, buttons, and active-state detection
   all agree. `to('berita-detail', 5)` => '/berita/5'. */

export const PROTECTED = ['dasbor', 'pantau-siswa', 'laporan-belajar']

export function to(route, id) {
  switch (route) {
    case 'home': return '/'
    case 'berita-detail': return `/berita/${id}`
    default: return `/${route}`
  }
}

// Given a pathname, return the logical route key ('home', 'profil', …)
export function routeFromPath(pathname) {
  if (pathname === '/' || pathname === '') return 'home'
  const seg = pathname.replace(/^\//, '').split('/')[0]
  if (seg === 'berita') return 'berita' // detail also highlights "Berita"
  return seg
}
