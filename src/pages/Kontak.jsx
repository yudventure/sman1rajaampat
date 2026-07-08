import { school } from '../config/school'
import PageHead from '../components/PageHead'
import Socials from '../components/Socials'

export default function Kontak() {
  const { contact } = school
  const items = [
    ['Alamat', contact.address],
    ['Telepon', contact.phone],
    ['Email', contact.email],
    ['Jam Layanan', contact.hours],
  ]

  return (
    <>
      <PageHead
        eyebrow="Kontak Kami"
        title="Hubungi sekolah"
        sub={`Semua informasi kontak resmi dan lokasi ${school.name}.`}
      />
      <section className="wrap sec" style={{ paddingTop: 40 }}>
        <div className="grid-2" style={{ gap: 40, alignItems: 'start' }}>
          <div>
            <div className="fx col gap16">
              {items.map((it, i) => (
                <div key={i} className="card rv" style={{ padding: '18px 20px', '--rvd': i * 0.06 + 's' }}>
                  <div className="eyebrow">{it[0]}</div>
                  <div style={{ marginTop: 6, lineHeight: 1.5 }}>{it[1]}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Media Sosial</div>
              <div className="fx gap10">
                <Socials itemClass="soc soc-l" sizes={{ instagram: 17, tiktok: 16, facebook: 17, youtube: 18 }} />
              </div>
            </div>
          </div>

          <div className="rv rv-r">
            <div className="map-ph">
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,rgba(255,255,255,.35),rgba(255,255,255,.35) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(255,255,255,.35),rgba(255,255,255,.35) 1px,transparent 1px,transparent 40px)' }}></div>
              <div className="mappin">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="var(--sea)"><path d="M12 22s7-6.3 7-12A7 7 0 105 10c0 5.7 7 12 7 12z" /><circle cx="12" cy="10" r="2.6" fill="#fff" /></svg>
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '12px 16px', background: 'linear-gradient(0deg,rgba(13,71,126,.85),transparent)', color: '#fff', fontSize: 13 }}>{contact.mapLabel}</div>
            </div>
            <a className="btn btn-o" href={contact.mapsUrl} target="_blank" rel="noopener" style={{ marginTop: 16 }}>Buka di Google Maps →</a>
            <p className="muted" style={{ fontSize: 12.5, marginTop: 12 }}>Peta di atas adalah placeholder. Sematkan embed Google Maps resmi sekolah untuk versi final.</p>
          </div>
        </div>
      </section>
    </>
  )
}
