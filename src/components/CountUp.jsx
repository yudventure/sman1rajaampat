import { useEffect, useRef, useState } from 'react'

// Angka statistik yang menghitung naik saat pertama kali terlihat.
// Memahami format '1.240+', '98%', '52' — pemisah ribuan & sufiks dipertahankan.
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)
  const [text, setText] = useState(() => String(value))

  useEffect(() => {
    const m = String(value).match(/^(\D*)([\d.,]+)(.*)$/)
    if (!m) { setText(String(value)); return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(String(value)); return
    }
    const target = parseInt(m[2].replace(/[.,]/g, ''), 10)
    const hasSep = /[.,]/.test(m[2])
    const fmt = (n) => (hasSep ? n.toLocaleString('id-ID') : String(n))
    setText(m[1] + fmt(0) + m[3])
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
        setText(m[1] + fmt(Math.round(target * eased)) + m[3])
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, duration])

  return <span ref={ref}>{text}</span>
}
