import { useState } from 'react'
import api from '../api'
import PageHead from '../components/PageHead'

const EMPTY_COMP = { nama: '', kontak: '', kategori: 'Sarana', pesan: '' }

export default function Pengaduan() {
  const [ptab, setPtab] = useState('kirim')
  const [comp, setComp] = useState(EMPTY_COMP)
  const [compErr, setCompErr] = useState('')
  const [compResult, setCompResult] = useState(null)
  const [tiket, setTiket] = useState('')
  const [trackRes, setTrackRes] = useState(undefined)

  const scrollTop = () => { try { window.scrollTo(0, 0) } catch {} }
  const onComp = (name) => (e) => setComp((s) => ({ ...s, [name]: e.target.value }))

  const submitComp = async (e) => {
    e.preventDefault()
    if (!comp.nama || !comp.kontak || !comp.pesan) { setCompErr('Mohon isi Nama, Kontak, dan Isi Pesan.'); return }
    const res = await api.submitComplaint(comp)
    setCompErr(''); setCompResult(res); scrollTop()
  }
  const resetComp = () => { setCompResult(null); setComp(EMPTY_COMP) }
  const trackComp = async (e) => {
    e.preventDefault()
    if (!tiket.trim()) { setTrackRes(null); return }
    setTrackRes(await api.trackComplaint(tiket))
  }

  let body
  if (ptab === 'kirim') {
    if (compResult) {
      body = (
        <div className="card pad" style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div className="avatar" style={{ margin: '0 auto 16px', background: '#e2f0e6', color: '#1c6b3a' }}>✓</div>
          <h2 className="dispmd">Aduan Terkirim</h2>
          <p className="muted" style={{ margin: '10px 0 18px' }}>Simpan kode tiket ini untuk memantau tanggapan sekolah.</p>
          <div style={{ background: 'var(--seasoft)', borderRadius: 14, padding: 18 }}>
            <div className="muted" style={{ fontSize: 13 }}>Kode Tiket</div>
            <div className="serif sea" style={{ fontSize: 30, fontWeight: 500 }}>{compResult.tiket}</div>
          </div>
          <div className="fx gap12" style={{ justifyContent: 'center', marginTop: 20 }}>
            <button className="btn btn-o" onClick={resetComp}>Kirim Lagi</button>
            <button className="btn btn-p" onClick={() => { setPtab('pantau'); setTiket(compResult.tiket); setTrackRes(undefined) }}>Pantau Aduan</button>
          </div>
        </div>
      )
    } else {
      body = (
        <form className="card pad" style={{ maxWidth: 560, margin: '0 auto' }} onSubmit={submitComp}>
          <h3 className="dispmd" style={{ marginBottom: 6 }}>Formulir Aduan</h3>
          <p className="muted" style={{ marginBottom: 18, fontSize: 14 }}>Sampaikan keluhan, saran, atau pertanyaan Anda kepada sekolah.</p>
          <div className="field"><label>Nama Pengirim<span className="req"> *</span></label><input className="inp" value={comp.nama} onChange={onComp('nama')} /></div>
          <div className="field"><label>Kontak (email / telepon)<span className="req"> *</span></label><input className="inp" value={comp.kontak} onChange={onComp('kontak')} /></div>
          <div className="field"><label>Kategori Aduan</label>
            <select className="inp" value={comp.kategori} onChange={onComp('kategori')}>
              {['Sarana', 'Akademik', 'Kesiswaan', 'Lainnya'].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="field"><label>Isi Pesan<span className="req"> *</span></label><textarea className="inp" value={comp.pesan} onChange={onComp('pesan')} /></div>
          {compErr ? <div className="alert alert-e" style={{ marginBottom: 14 }}>⚠ {compErr}</div> : null}
          <button className="btn btn-p" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Kirim Aduan</button>
        </form>
      )
    }
  } else {
    const t = trackRes
    body = (
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <form className="card pad" onSubmit={trackComp}>
          <h3 className="dispmd" style={{ marginBottom: 6 }}>Pantau Aduan</h3>
          <p className="muted" style={{ marginBottom: 16, fontSize: 14 }}>Masukkan kode tiket yang Anda terima.</p>
          <div className="field"><label>Kode Tiket</label><input className="inp" placeholder="ADU-7F3K2" value={tiket} onChange={(e) => setTiket(e.target.value)} /></div>
          <button className="btn btn-p" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Cek Status</button>
          <p className="muted" style={{ fontSize: 12.5, marginTop: 12, textAlign: 'center' }}>Contoh: ADU-7F3K2 · ADU-9B1X8</p>
        </form>
        {t === null ? <div className="alert alert-e" style={{ marginTop: 18 }}>Kode tiket tidak ditemukan. Periksa kembali.</div> : null}
        {t ? (
          <div className="card pad" style={{ marginTop: 18 }}>
            <div className="fx ac jb gap12" style={{ flexWrap: 'wrap' }}>
              <div className="serif" style={{ fontSize: 20, fontWeight: 500 }}>{t.tiket}</div>
              <span className={'badge ' + (t.status === 'Selesai' ? 'b-ok' : 'b-wait')}>{t.status}</span>
            </div>
            <div className="muted" style={{ fontSize: 13, marginTop: 8 }}>{t.date} · Kategori: {t.cat}</div>
            <p style={{ marginTop: 12 }}>{t.msg}</p>
            {t.response
              ? <div style={{ background: 'var(--seasoft)', borderRadius: 12, padding: 14, marginTop: 14 }}><b style={{ fontSize: 13, color: 'var(--seadeep)' }}>Tanggapan Sekolah</b><p style={{ marginTop: 6, fontSize: 14.5 }}>{t.response}</p></div>
              : <p className="muted" style={{ marginTop: 12, fontSize: 14 }}>Belum ada tanggapan. Aduan Anda sedang dalam antrean.</p>}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <>
      <PageHead
        eyebrow="Layanan Pengaduan"
        title="Saluran aspirasi warga"
        sub="Kirim keluhan, saran, atau pertanyaan dan pantau tanggapannya dengan kode tiket."
      />
      <section className="wrap sec" style={{ paddingTop: 36 }}>
        <div className="tabs" style={{ maxWidth: 440, margin: '0 auto 30px' }}>
          <button className={'tab ' + (ptab === 'kirim' ? 'on' : '')} onClick={() => setPtab('kirim')}>Kirim Aduan</button>
          <button className={'tab ' + (ptab === 'pantau' ? 'on' : '')} onClick={() => setPtab('pantau')}>Pantau Aduan</button>
        </div>
        {body}
      </section>
    </>
  )
}
