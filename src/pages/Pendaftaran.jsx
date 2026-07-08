import { useState } from 'react'
import api from '../api'
import PageHead from '../components/PageHead'
import { Icon } from '../components/icons'

const EMPTY_REG = { nama: '', ttl: '', alamat: '', asal: '', nisn: '', telp: '' }

export default function Pendaftaran() {
  const [tab, setTab] = useState('formulir')
  const [reg, setReg] = useState(EMPTY_REG)
  const [files, setFiles] = useState({ ijazah: '', akta: '' })
  const [regErr, setRegErr] = useState('')
  const [regResult, setRegResult] = useState(null)
  const [statusNo, setStatusNo] = useState('')
  const [statusRes, setStatusRes] = useState(undefined) // undefined=none, null=not found, obj=found

  const scrollTop = () => { try { window.scrollTo(0, 0) } catch {} }

  const submitReg = async (e) => {
    e.preventDefault()
    if (!reg.nama || !reg.ttl || !reg.alamat || !reg.asal || !reg.telp) {
      setRegErr('Mohon lengkapi semua kolom wajib bertanda *.'); return
    }
    if (!files.ijazah || !files.akta) {
      setRegErr('Harap lampirkan berkas Ijazah/SKL dan Akta Kelahiran sebelum mengirim.'); return
    }
    const res = await api.submitRegistration(reg)
    setRegErr(''); setRegResult(res); scrollTop()
  }

  const resetReg = () => { setRegResult(null); setReg(EMPTY_REG); setFiles({ ijazah: '', akta: '' }) }

  const checkStatus = async (e) => {
    e.preventDefault()
    if (!statusNo.trim()) { setStatusRes(null); return }
    setStatusRes(await api.checkAdmissionStatus(statusNo))
  }

  const onReg = (name) => (e) => setReg((s) => ({ ...s, [name]: e.target.value }))
  const onFile = (name) => (e) => { const f = e.target.files?.[0]; setFiles((s) => ({ ...s, [name]: f ? f.name : '' })) }

  const field = (name, label, req, ph, type) => (
    <div className="field">
      <label>{label}{req ? <span className="req"> *</span> : null}</label>
      <input className="inp" name={name} type={type || 'text'} placeholder={ph || ''} value={reg[name]} onChange={onReg(name)} />
    </div>
  )
  const drop = (name, label) => (
    <label className={'drop' + (files[name] ? ' has' : '')}>
      <span className="svcicon" style={{ width: 42, height: 42 }}><Icon name="enroll" /></span>
      <span className="f1">
        <b style={{ display: 'block', fontSize: 14 }}>{label}<span className="req"> *</span></b>
        <span className="muted" style={{ fontSize: 13 }}>{files[name] || 'Klik untuk pilih file (PDF/JPG)'}</span>
      </span>
      <input type="file" name={name} onChange={onFile(name)} style={{ display: 'none' }} />
    </label>
  )

  const badgeCls = (st) => st === 'Diterima' ? 'b-ok' : st === 'Tidak Diterima' ? 'b-no' : 'b-wait'

  let body
  if (tab === 'formulir') {
    if (regResult) {
      body = (
        <div className="card pad" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <div className="avatar" style={{ margin: '0 auto 16px', background: '#e2f0e6', color: '#1c6b3a' }}>✓</div>
          <h2 className="dispmd">Pendaftaran Terkirim!</h2>
          <p className="muted" style={{ margin: '10px 0 20px' }}>Terima kasih, <b>{regResult.nama}</b>. Simpan nomor pendaftaran Anda untuk mengecek status.</p>
          <div style={{ background: 'var(--seasoft)', borderRadius: 14, padding: 20 }}>
            <div className="muted" style={{ fontSize: 13 }}>Nomor Pendaftaran</div>
            <div className="serif sea" style={{ fontSize: 32, fontWeight: 500, letterSpacing: '.02em' }}>{regResult.no}</div>
          </div>
          <div className="fx gap12" style={{ justifyContent: 'center', marginTop: 22 }}>
            <button className="btn btn-o" onClick={resetReg}>Daftar Lagi</button>
            <button className="btn btn-p" onClick={() => { setTab('status'); setStatusNo(regResult.no); setStatusRes(undefined) }}>Cek Status</button>
          </div>
        </div>
      )
    } else {
      body = (
        <form className="card pad" style={{ maxWidth: 640, margin: '0 auto' }} onSubmit={submitReg}>
          <h3 className="dispmd" style={{ marginBottom: 6 }}>Data Calon Siswa</h3>
          <p className="muted" style={{ marginBottom: 20, fontSize: 14 }}>Lengkapi formulir berikut dengan data yang benar.</p>
          {field('nama', 'Nama Lengkap', true, 'Nama sesuai akta')}
          <div className="grid-2" style={{ gap: '0 18px' }}>
            {field('ttl', 'Tempat, Tanggal Lahir', true, 'Waisai, 12 Mei 2010')}
            {field('telp', 'Nomor Telepon', true, '08xx-xxxx-xxxx')}
          </div>
          {field('alamat', 'Alamat Lengkap', true, 'Jalan, kampung, distrik')}
          <div className="grid-2" style={{ gap: '0 18px' }}>
            {field('asal', 'Asal Sekolah (SMP)', true, 'SMP Negeri ...')}
            {field('nisn', 'NISN (jika ada)', false, '10 digit')}
          </div>
          <div className="divider" style={{ margin: '8px 0 20px' }}></div>
          <h4 className="serif" style={{ fontSize: 18, marginBottom: 12 }}>Unggah Berkas Persyaratan</h4>
          <div className="fx col gap12">{drop('ijazah', 'Ijazah / SKL')}{drop('akta', 'Akta Kelahiran')}</div>
          {regErr ? <div className="alert alert-e" style={{ marginTop: 18 }}>⚠ {regErr}</div> : null}
          <button className="btn btn-p" type="submit" style={{ marginTop: 22, width: '100%', justifyContent: 'center' }}>Kirim Pendaftaran</button>
        </form>
      )
    }
  } else {
    body = (
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <form className="card pad" onSubmit={checkStatus}>
          <h3 className="dispmd" style={{ marginBottom: 6 }}>Cek Status Penerimaan</h3>
          <p className="muted" style={{ marginBottom: 18, fontSize: 14 }}>Masukkan nomor pendaftaran yang Anda terima saat mendaftar.</p>
          <div className="field">
            <label>Nomor Pendaftaran</label>
            <input className="inp" placeholder="SPMB-2026-0148" value={statusNo} onChange={(e) => setStatusNo(e.target.value)} />
          </div>
          <button className="btn btn-p" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Cek Status</button>
          <p className="muted" style={{ fontSize: 12.5, marginTop: 14, textAlign: 'center' }}>Contoh untuk dicoba: SPMB-2026-0148 · SPMB-2026-0201 · SPMB-2026-0099</p>
        </form>
        {statusRes === null ? <div className="alert alert-e" style={{ marginTop: 18 }}>Nomor pendaftaran tidak ditemukan. Silakan periksa kembali.</div> : null}
        {statusRes ? (
          <div className="card pad" style={{ marginTop: 18 }}>
            <div className="muted" style={{ fontSize: 13 }}>Nomor {statusRes.no}</div>
            <div className="fx ac jb" style={{ marginTop: 8, gap: 12, flexWrap: 'wrap' }}>
              <div className="serif" style={{ fontSize: 22, fontWeight: 500 }}>{statusRes.name}</div>
              <span className={'badge ' + badgeCls(statusRes.status)}>{statusRes.status}</span>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <>
      <PageHead
        eyebrow="Pendaftaran Siswa Baru"
        title="SPMB 2026/2027"
        sub="Daftar online, unggah berkas persyaratan, dan pantau status penerimaan Anda secara mandiri."
      />
      <section className="wrap sec" style={{ paddingTop: 36 }}>
        <div className="tabs" style={{ maxWidth: 440, margin: '0 auto 30px' }}>
          <button className={'tab ' + (tab === 'formulir' ? 'on' : '')} onClick={() => setTab('formulir')}>Formulir Pendaftaran</button>
          <button className={'tab ' + (tab === 'status' ? 'on' : '')} onClick={() => setTab('status')}>Cek Status</button>
        </div>
        {body}
      </section>
    </>
  )
}
