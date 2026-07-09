import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { school } from '../config/school'
import { SERVICES, STATS } from '../data/content'
import { to } from '../routes'
import api from '../api'
import { Icon, ArrowRight, InstagramIcon, TiktokIcon, FacebookIcon, YoutubeIcon } from '../components/icons'
import CountUp from '../components/CountUp'
import NewsImage from '../components/NewsImage'

// Render hero title with an italic highlight where {{hl:...}} appears.
function HeroTitle({ text }) {
  const m = text.match(/\{\{hl:(.*?)\}\}/)
  if (!m) return <>{text}</>
  const [before, after] = text.split(m[0])
  return (<>{before}<span className="ital sea">{m[1]}</span>{after}</>)
}

export default function Home() {
  const nav = useNavigate()
  const go = (route, id) => nav(to(route, id))
  const [news, setNews] = useState([])
  const homeServices = SERVICES.slice(0, 4)

  useEffect(() => {
    let alive = true
    api.getNews().then((all) => { if (alive) setNews(all.slice(0, 3)) })
    return () => { alive = false }
  }, [])

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="herogrid"></div>

        {/* floating education doodles */}
        <div className="doodwrap">
          <div className="doodle" style={{ top: '2%', left: '76%', animationDuration: '7s' }}>
            <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-8deg)' }}><path d="M24 12 4 21l20 9 20-9-20-9z"></path><path d="M12 26v8c0 3 6 6 12 6s12-3 12-6v-8"></path><path d="M44 22v9"></path></svg>
          </div>
          <div className="doodle" style={{ top: '26%', left: '30%', animationDelay: '.9s' }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-5deg)' }}><path d="M6 23 42 8l-9 31-9-12-9 6 2-9z"></path><path d="M42 8 24 27"></path></svg>
          </div>
          <div className="doodle" style={{ top: '7%', left: '87%', animationDelay: '1.6s', animationDuration: '6.5s' }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(7deg)' }}><path d="M24 12c-4-3-10-4-16-3v26c6-1 12 0 16 3 4-3 10-4 16-3V9c-6-1-12 0-16 3z"></path><path d="M24 12v26"></path></svg>
          </div>
          <div className="doodle doodle-g" style={{ top: '36%', right: '.5%', animationDelay: '.4s', animationDuration: '7.5s' }}>
            <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(8deg)' }}><circle cx="24" cy="17" r="10"></circle><path d="M24 12l1.6 3.2 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5L24 12z"></path><path d="M19 26l-5 15 10-5 10 5-5-15"></path></svg>
          </div>
          <div className="doodle" style={{ top: '44%', left: '38%', animationDelay: '2.2s' }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-5deg)' }}><path d="M24 6a12 12 0 00-7 21c2 2 3 3 3 6h8c0-3 1-4 3-6a12 12 0 00-7-21z"></path><path d="M20 38h8"></path><path d="M21 42h6"></path></svg>
          </div>
          <div className="doodle" style={{ top: '68%', left: '33%', animationDelay: '1.1s', animationDuration: '8s' }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-12deg)' }}><path d="M33 7l8 8-24 24-10 2 2-10L33 7z"></path><path d="M29 11l8 8"></path></svg>
          </div>
          <div className="doodle doodle-g" style={{ top: '30%', left: '41%', animationDelay: '1.8s' }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z"></path></svg>
          </div>
          <div className="doodle" style={{ top: '2%', left: '71%', animationDelay: '2.8s' }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z"></path></svg>
          </div>
        </div>

        {/* hero photo (bottom-right) */}
        <div className="heroscene" style={{ backgroundImage: `url(${school.assets.heroImage})` }}></div>

        {/* cream notch + "Ikuti Kami!" social panel */}
        <div className="hero-notch"></div>
        <div className="hero-notch-r"></div>
        <div className="hero-notch-l"></div>
        <div className="hero-soc">
          <span className="hero-soc-t">Ikuti Kami!</span>
          <div className="fx gap12">
            <a className="ssoc" href={school.social.instagram} target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
            <a className="ssoc" href={school.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><TiktokIcon /></a>
            <a className="ssoc" href={school.social.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
            <a className="ssoc" href={school.social.youtube} target="_blank" rel="noopener" aria-label="YouTube"><YoutubeIcon /></a>
          </div>
        </div>

        {/* handwriting accent */}
        <div className="handwrap">
          <div className="hand" style={{ top: '1%', right: '33%' }}>
            <span className="hand-txt">{school.hero.handwriting}</span>
            <svg className="hand-arrow" style={{ top: 34, right: -18 }} width="84" height="70" viewBox="0 0 84 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8c28 6 52 22 64 52" /><path d="M56 56l14 6 4-16" /></svg>
          </div>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(64px, 12vw, 120px)', paddingBottom: 'clamp(56px, 11vw, 120px)' }}>
          <div style={{ maxWidth: 640 }}>
            <span className="eyebrow reveal">{school.hero.eyebrow}</span>
            <h1 className="dispxl reveal" style={{ marginTop: 18, animationDelay: '.05s' }}>
              <HeroTitle text={school.hero.title} />
            </h1>
            <p className="lead reveal" style={{ marginTop: 22, maxWidth: 620, animationDelay: '.12s' }}>{school.hero.lead}</p>
            <div className="fx gap12 fxwrap reveal" style={{ marginTop: 32, animationDelay: '.18s' }}>
              <button className="btn btn-p" onClick={() => go('pendaftaran')}>Daftar Siswa Baru<ArrowRight /></button>
              <button className="btn btn-l" onClick={() => go('profil')}>Kenali Sekolah</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="sec posrel ohide">
        <img className="secmark" src={school.assets.logo} alt="" />
        <div className="wrap posrel">
          <div className="fx ac jb fxwrap gap16 posrel" style={{ marginBottom: 36 }}>
            <div className="rv">
              <span className="eyebrow">Layanan Kami</span>
              <h2 className="displg" style={{ marginTop: 12 }}>Semua layanan sekolah,<br />dalam satu pintu.</h2>
            </div>
            {/* decorative doodles (right of the heading) */}
            <div className="doodle lay-dood" style={{ top: '2%', right: '31%', animationDelay: '.5s' }}><svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-7deg)' }}><rect x="12" y="14" width="24" height="28" rx="6"></rect><path d="M18 14v-2a6 6 0 0112 0v2"></path><path d="M12 27h24"></path><path d="M20 27v6h8v-6"></path></svg></div>
            <div className="doodle doodle-g lay-dood" style={{ top: '56%', right: '23%', animationDelay: '1.4s' }}><svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(9deg)' }}><path d="M24 8a10 10 0 00-10 10v8l-4 6h28l-4-6v-8a10 10 0 00-10-10z"></path><path d="M20 36a4 4 0 008 0"></path></svg></div>
            <div className="doodle lay-dood" style={{ top: '4%', right: '6%', animationDuration: '7s' }}><svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(6deg)' }}><circle cx="24" cy="24" r="16"></circle><path d="M8 24h32"></path><path d="M24 8c6 5 6 27 0 32-6-5-6-27 0-32z"></path></svg></div>
            <div className="doodle lay-dood" style={{ top: '54%', right: '39%', animationDelay: '2.4s', animationDuration: '7.5s' }}><svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-6deg)' }}><rect x="12" y="8" width="24" height="32" rx="4"></rect><path d="M17 14h14v6H17z"></path><path d="M18 27h.1M24 27h.1M30 27h.1M18 33h.1M24 33h.1M30 33h.1"></path></svg></div>
            <div className="doodle lay-dood" style={{ top: '24%', right: '15%', animationDelay: '2s', animationDuration: '8s' }}><svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(5deg)' }}><rect x="8" y="12" width="32" height="22" rx="3"></rect><path d="M14 20h20"></path><path d="M14 25h12"></path><circle cx="32" cy="30" r="4"></circle><path d="M30 33l-2 8 4-2 4 2-2-8"></path></svg></div>
          </div>

          {/* quick access */}
          <div className="grid-2" style={{ gap: 16, marginBottom: 22 }}>
            <button className="qa rv" onClick={() => go('pendaftaran')}>
              <span className="svcicon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" /></svg></span>
              <span><b style={{ display: 'block', fontSize: 15.5 }}>Cek Status Pendaftaran</b><span className="muted" style={{ fontSize: 13.5 }}>Pantau hasil penerimaan dengan nomor daftar</span></span>
            </button>
            <button className="qa rv" style={{ '--rvd': '.08s' }} onClick={() => go('pengaduan')}>
              <span className="svcicon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 5h16v11H9l-4 4V5z" strokeLinejoin="round" /><path d="M8 10h8M8 13h5" strokeLinecap="round" /></svg></span>
              <span><b style={{ display: 'block', fontSize: 15.5 }}>Pantau Aduan</b><span className="muted" style={{ fontSize: 13.5 }}>Lacak status aduan dengan kode tiket</span></span>
            </button>
          </div>

          {/* service cards */}
          <div className="grid-4">
            {homeServices.map((s, i) => (
              <button key={s.title} className="card pad svccard rv" onClick={() => go(s.route)} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', '--rvd': i * 0.08 + 's' }}>
                <span className="svcicon" style={{ width: 48, height: 48 }}><Icon name={s.icon} /></span>
                <span>
                  <b className="serif" style={{ fontSize: 19, fontWeight: 500, display: 'block' }}>{s.title}</b>
                  <span className="muted" style={{ fontSize: 14, display: 'block', marginTop: 5, lineHeight: 1.5 }}>{s.desc}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="tc rv" style={{ marginTop: 30 }}>
            <button className="link-arrow" onClick={() => go('layanan')}>Lihat semua layanan →</button>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="posrel" style={{ background: 'var(--seadeep)', color: '#fff', zIndex: 0 }}>
        <div className="wrap sec posrel">
          <img className="statboy" src={school.assets.medalistImage} alt={`Siswa berprestasi ${school.shortName}`} />
          <div className="grid-2" style={{ alignItems: 'center', gap: 48 }}>
            <div className="rv rv-l" style={{ maxWidth: 330 }}>
              <span className="eyebrow" style={{ color: '#9cc4ea' }}>Dalam Angka</span>
              <h2 className="displg" style={{ color: '#fff', marginTop: 12 }}>Sekolah bahari yang terus bertumbuh.</h2>
              <p style={{ color: '#bcd0e8', marginTop: 14, maxWidth: 420 }}>Data ringkas capaian dan skala {school.name} tahun ajaran berjalan.</p>
            </div>
            <div className="statbar2">
              {STATS.map((st, i) => (
                <div className="glasscard rv" key={st.l} style={{ '--rvd': i * 0.09 + 's' }}>
                  <div className="serif" style={{ fontSize: 'clamp(32px, 9vw, 40px)', fontWeight: 500, lineHeight: 1, color: '#fff' }}><CountUp value={st.n} /></div>
                  <div style={{ fontSize: 13.5, color: '#a9c4e2', marginTop: 8 }}>{st.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="fx ac jb fxwrap gap16" style={{ marginBottom: 34 }}>
            <div className="rv">
              <span className="eyebrow">Terkini</span>
              <h2 className="displg" style={{ marginTop: 12 }}>Berita & Pengumuman</h2>
            </div>
          </div>
          <div className="grid-news">
            {news.map((n, i) => (
              <button key={n.id} className="card svccard rv" onClick={() => go('berita-detail', n.id)} style={{ overflow: 'hidden', textAlign: 'left', display: 'flex', flexDirection: 'column', padding: 0, '--rvd': i * 0.08 + 's' }}>
                <NewsImage n={n} className="news-img" />
                <span className="pad" style={{ display: 'block' }}>
                  <span className={'tag ' + n.tagcls}>{n.type} · {n.cat}</span>
                  <b className="serif" style={{ fontSize: 20, fontWeight: 500, display: 'block', marginTop: 10, lineHeight: 1.2 }}>{n.title}</b>
                  <span className="muted" style={{ fontSize: 14, display: 'block', marginTop: 8, lineHeight: 1.55 }}>{n.summary}</span>
                  <span className="muted" style={{ fontSize: 12.5, display: 'block', marginTop: 14 }}>{n.date}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="tc rv" style={{ marginTop: 30 }}>
            <button className="link-arrow" onClick={() => go('berita')}>Lihat semua →</button>
          </div>
        </div>
      </section>
    </div>
  )
}
