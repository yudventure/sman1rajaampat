import { useNavigate } from 'react-router-dom'
import { school } from '../config/school'
import { to } from '../routes'
import Socials from './Socials'

export default function Footer() {
  const nav = useNavigate()
  const { contact, footer } = school
  const link = (route) => (e) => { e.preventDefault(); nav(to(route)) }

  return (
    <footer className="footer">
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 34 }}>
        <div className="fgrid">
          <div>
            <div className="fx ac gap12" style={{ marginBottom: 16 }}>
              <img className="crest" src={school.assets.logo} alt={`Logo ${school.shortName}`} />
              <span className="brandtxt" style={{ color: '#fff', fontSize: 17 }}>{school.shortName}</span>
            </div>
            <p style={{ color: '#a9c4e2', fontSize: 14, maxWidth: 260 }}>{footer.blurb}</p>
            <div className="fx gap10" style={{ marginTop: 20 }}>
              <Socials itemClass="soc" sizes={{ instagram: 17, tiktok: 16, facebook: 17, youtube: 18 }} />
            </div>
          </div>

          <div>
            <div className="foot-h">Navigasi</div>
            <div className="fx col gap10" style={{ fontSize: 14.5 }}>
              <a href={to('profil')} onClick={link('profil')}>Profil Sekolah</a>
              <a href={to('pendaftaran')} onClick={link('pendaftaran')}>Pendaftaran</a>
              <a href={to('layanan')} onClick={link('layanan')}>Layanan</a>
              <a href={to('berita')} onClick={link('berita')}>Berita</a>
              <a href={to('galeri')} onClick={link('galeri')}>Galeri</a>
            </div>
          </div>

          <div>
            <div className="foot-h">Bantuan</div>
            <div className="fx col gap10" style={{ fontSize: 14.5 }}>
              <a href={to('pengaduan')} onClick={link('pengaduan')}>Layanan Pengaduan</a>
              <a href={to('kontak')} onClick={link('kontak')}>Kontak Kami</a>
              <a href={to('masuk')} onClick={link('masuk')}>Akses Warga Sekolah</a>
            </div>
          </div>

          <div>
            <div className="foot-h">Kontak</div>
            <div style={{ color: '#bcd0e8', fontSize: 14, lineHeight: 1.7 }}>
              {contact.addressShort.map((l, i) => (<span key={i}>{l}<br /></span>))}
              <br />
              {contact.phone}<br />
              {contact.email}
            </div>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,.13)', margin: '40px 0 22px' }} />
        <div className="fx ac jb fxwrap gap12" style={{ fontSize: 13, color: '#8ba9cc' }}>
          <span>{footer.copyright}</span>
          <span>{footer.note}</span>
        </div>
      </div>
    </footer>
  )
}
