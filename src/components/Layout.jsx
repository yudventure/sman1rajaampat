import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Ticker from './Ticker'
import Header from './Header'
import Footer from './Footer'

// Scroll to top on every route change (matches prototype behaviour).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { try { window.scrollTo(0, 0) } catch {} }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Ticker />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
