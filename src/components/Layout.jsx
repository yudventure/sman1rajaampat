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

// Scroll-reveal: elemen ber-class "rv" dianimasikan masuk saat terlihat di
// viewport (IntersectionObserver). Setelah animasi selesai, class dilepas agar
// transisi hover elemen kembali normal. Menghormati prefers-reduced-motion.
function ScrollReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const finish = (el) => {
      el.classList.remove('rv', 'rv-l', 'rv-r', 'in')
      el.style.removeProperty('--rvd')
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.rv').forEach(finish)
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        const el = en.target
        io.unobserve(el)
        el.classList.add('in')
        el.addEventListener('animationend', (ev) => {
          if (ev.target === el && String(ev.animationName).startsWith('rvIn')) finish(el)
        })
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    const scan = () => document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el))
    scan()
    // Konten async (mis. berita dari API) ikut ter-reveal saat muncul.
    const main = document.querySelector('main')
    const mo = main ? new MutationObserver(scan) : null
    if (mo) mo.observe(main, { childList: true, subtree: true })
    return () => { io.disconnect(); if (mo) mo.disconnect() }
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Ticker />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
