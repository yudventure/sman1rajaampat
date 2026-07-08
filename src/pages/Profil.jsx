import { school } from '../config/school'
import { GURU, FASILITAS, SEJARAH, ORG, ORG_LEVEL3, VISI_MISI, SAMBUTAN } from '../data/content'
import PageHead from '../components/PageHead'
import { Icon } from '../components/icons'

const initials = (name) => {
  const p = name.split(' ')
  return p[0][0] + (p[1] ? p[1][0] : '')
}

export default function Profil() {
  return (
    <>
      <PageHead
        eyebrow="Profil Sekolah"
        title={`Mengenal ${school.name}`}
        sub="Identitas, sejarah, sumber daya manusia, dan fasilitas sekolah bahari di jantung Kepulauan Raja Ampat."
      />

      {/* sambutan heading */}
      <section className="wrap sec" style={{ paddingTop: 44, paddingBottom: 0 }}>
        <span className="eyebrow">Sambutan</span>
        <h2 className="displg" style={{ marginTop: 12 }}>Kata Sambutan</h2>
      </section>

      {/* sambutan bands */}
      {SAMBUTAN.map((s, i) => (
        <section
          key={i}
          className="posrel"
          style={{ background: 'var(--seadeep)', color: '#fff', zIndex: 0, marginTop: i === 0 ? 44 : 92 }}
        >
          <div className="wrap sec posrel" style={{ paddingTop: 60, paddingBottom: 60 }}>
            <img
              className="sambo"
              src={school.assets[s.imgKey]}
              alt={s.nm}
              style={i === 0 ? undefined : { right: 'auto', left: '3%' }}
            />
            <div style={{ maxWidth: 580, marginLeft: i === 0 ? 0 : 'auto' }}>
              <span className="eyebrow" style={{ color: '#9cc4ea' }}>{s.tag}</span>
              <p className="serif ital" style={{ fontSize: 24, lineHeight: 1.55, margin: '16px 0 26px' }}>{'“' + s.q + '”'}</p>
              <b style={{ display: 'block', fontSize: 16 }}>{s.nm}</b>
              <span style={{ fontSize: 13.5, color: '#bcd0e8', display: 'block', marginTop: 3 }}>{s.role}</span>
            </div>
          </div>
        </section>
      ))}

      {/* visi misi tujuan */}
      <section className="wrap sec" style={{ paddingTop: 44 }}>
        <div className="grid-3">
          {VISI_MISI.map(([t, d, ic], i) => (
            <div className="card pad" key={i}>
              <div className="svcicon" style={{ marginBottom: 16, fontSize: 22 }}>{ic}</div>
              <h3 className="dispmd">{t}</h3>
              <p className="muted" style={{ marginTop: 10, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* guru & staf + struktur organisasi */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap sec">
          <span className="eyebrow">Sumber Daya Manusia</span>
          <h2 className="displg" style={{ marginTop: 12, marginBottom: 32 }}>Guru & Staf</h2>
          <div className="grid-4">
            {GURU.map((g, i) => (
              <div className="card pad" key={i} style={{ textAlign: 'center' }}>
                <div className="avatar" style={{ margin: '0 auto 14px' }}>{initials(g.n)}</div>
                <b style={{ display: 'block', fontSize: 15 }}>{g.n}</b>
                <span className="muted" style={{ fontSize: 13 }}>{g.j}</span>
              </div>
            ))}
          </div>

          <h3 className="dispmd" style={{ margin: '48px 0 24px', textAlign: 'center' }}>Struktur Organisasi</h3>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: 520, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="org-node" style={{ background: 'var(--sea)', color: '#fff', border: 'none' }}>
                <div className="nm" style={{ color: '#fff' }}>{ORG[0].nm}</div>
                <div style={{ fontSize: 12, color: '#d0e4f6' }}>{ORG[0].r}</div>
              </div>
              <div className="org-line"></div>
              <div className="fx" style={{ gap: 40, position: 'relative' }}>
                <div className="org-node"><div className="nm">{ORG[1].nm}</div><div className="muted" style={{ fontSize: 12 }}>{ORG[1].r}</div></div>
                <div className="org-node"><div className="nm">{ORG[2].nm}</div><div className="muted" style={{ fontSize: 12 }}>{ORG[2].r}</div></div>
              </div>
              <div className="org-line"></div>
              <div className="fx" style={{ gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
                {ORG_LEVEL3.map((x, i) => (
                  <div className="org-node" key={i} style={{ minWidth: 130 }}><div className="nm" style={{ fontSize: 13.5 }}>{x}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sejarah + fasilitas */}
      <section className="wrap sec">
        <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Perjalanan</span>
            <h2 className="displg" style={{ margin: '12px 0 28px' }}>Sejarah Singkat</h2>
            <div>
              {SEJARAH.map((e, i) => (
                <div className="tl-item" key={i}>
                  <span className="tl-dot"></span>
                  <div className="tl-year">{e.y}</div>
                  <b style={{ display: 'block', marginTop: 2 }}>{e.t}</b>
                  <p className="muted" style={{ marginTop: 6, fontSize: 14.5 }}>{e.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">Fasilitas Unggulan</span>
            <h2 className="displg" style={{ margin: '12px 0 24px' }}>Ruang untuk bertumbuh</h2>
            <div className="fx col gap12">
              {FASILITAS.map((f, i) => (
                <div className="card" key={i} style={{ padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span className="svcicon" style={{ width: 44, height: 44 }}><Icon name={f.ic} /></span>
                  <span><b style={{ display: 'block' }}>{f.n}</b><span className="muted" style={{ fontSize: 13.5 }}>{f.d}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
