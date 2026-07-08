import { useNavigate } from 'react-router-dom'
import { SERVICES } from '../data/content'
import { to } from '../routes'
import PageHead from '../components/PageHead'
import { Icon } from '../components/icons'

export default function Layanan() {
  const nav = useNavigate()
  return (
    <>
      <PageHead
        eyebrow="Layanan Sekolah"
        title="Pusat layanan & pemantauan"
        sub="Daftar layanan administrasi dan kesiswaan yang tersedia bagi warga sekolah dan masyarakat."
      />
      <section className="wrap sec" style={{ paddingTop: 40 }}>
        <div className="grid-2">
          {SERVICES.map((x, i) => (
            <button
              key={i}
              className="card pad svccard rv"
              onClick={() => nav(to(x.route))}
              style={{ textAlign: 'left', display: 'flex', gap: 18, alignItems: 'flex-start', '--rvd': (i % 2) * 0.08 + 's' }}
            >
              <span className="svcicon"><Icon name={x.icon} /></span>
              <span>
                <span className="fx ac gap8" style={{ flexWrap: 'wrap' }}>
                  <b className="serif" style={{ fontSize: 20, fontWeight: 500 }}>{x.title}</b>
                  {x.gated ? <span className="chip chip-g" style={{ fontSize: 11 }}>Perlu login</span> : null}
                </span>
                <span className="chip" style={{ marginTop: 8 }}>{x.who}</span>
                <span className="muted" style={{ display: 'block', marginTop: 10, lineHeight: 1.55 }}>{x.desc}</span>
                <span className="link-arrow" style={{ marginTop: 12 }}>Buka layanan →</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
