import { useEffect, useRef } from 'react'

/* Pointer follower: titik solid mengikuti kursor secara presisi, lingkaran
   transparan mengejar dengan lag halus (lerp) dan membesar di atas elemen
   yang bisa diklik. Nonaktif di perangkat sentuh & prefers-reduced-motion.
   pointer-events:none — tidak pernah mengganggu klik. */
export default function CursorFollower() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = -100, y = -100        // posisi kursor
    let rx = -100, ry = -100      // posisi ring (mengejar)
    let s = 1, sTarget = 1        // skala ring (membesar di elemen klik)
    let visible = false
    let raf

    const onMove = (e) => {
      x = e.clientX; y = e.clientY
      if (!visible) {
        visible = true
        rx = x; ry = y
        dot.style.opacity = '1'; ring.style.opacity = '1'
      }
    }
    const onOver = (e) => {
      sTarget = e.target.closest('a,button,select,label,[role="button"]') ? 1.65 : 1
    }
    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'; ring.style.opacity = '0'
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      s += (sTarget - s) * 0.2
      dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${s})`
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </>
  )
}
