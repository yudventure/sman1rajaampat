import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { school } from '../config/school'
import { NAV } from '../data/content'
import { to, routeFromPath } from '../routes'
import { useAuth } from '../context/AuthContext'
import { LoginIcon } from './icons'

export default function Header() {
  const [mob, setMob] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Bayangan halus di header saat halaman di-scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const { user } = useAuth()
  const loc = useLocation()
  const nav = useNavigate()
  const active = routeFromPath(loc.pathname)

  const goto = (route, id) => {
    setMob(false)
    nav(to(route, id))
  }

  return (
    <header className={'hd' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap fx ac jb hdrow">
        <button className="brand" onClick={() => goto('home')} style={{ background: 'none', border: 0 }}>
          <img className="crest" src={school.assets.logo} alt={`Logo ${school.shortName}`} />
          <span style={{ textAlign: 'left' }}>
            <span className="brandtxt" style={{ display: 'block' }}>{school.shortName}</span>
            <span className="brandsub">{school.brandSub}</span>
          </span>
        </button>

        <nav className="nav">
          {NAV.map(([label, route]) => (
            <button
              key={route}
              className={'navlink ' + (route === active ? 'on' : '')}
              onClick={() => goto(route)}
            >
              {label}
            </button>
          ))}
          {user ? (
            <button className="btn btn-p btn-sm" onClick={() => goto('dasbor')} style={{ marginLeft: 8 }}>
              Dasbor
            </button>
          ) : (
            <button className="btn btn-o btn-sm" onClick={() => goto('masuk')} style={{ marginLeft: 8 }}>
              <LoginIcon />Masuk
            </button>
          )}
        </nav>

        <button className="burger" onClick={() => setMob((v) => !v)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="wrap">
        <div className={'mobnav ' + (mob ? 'open' : '')}>
          {NAV.map(([label, route]) => (
            <button key={route} className={'navlink ' + (route === active ? 'on' : '')} onClick={() => goto(route)}>
              {label}
            </button>
          ))}
          <button className="navlink" onClick={() => goto(user ? 'dasbor' : 'masuk')}>
            {user ? 'Dasbor' : 'Masuk'}
          </button>
        </div>
      </div>
    </header>
  )
}
