# Portal Sekolah — Template Website (React + Vite)

Template portal sekolah digital yang siap dijual dan **di-rebrand cepat** untuk sekolah
berbeda. Dibangun dari desain **Portal SMAN 1 Raja Ampat** (Claude Design) menjadi
aplikasi React yang sesungguhnya, dengan **data-layer terpisah** yang siap disambung ke
backend nyata.

> Desain & percakapan asli tersimpan di `chats/` dan `project/` sebagai referensi.

---

## 🚀 Menjalankan

```bash
npm install       # sekali saja
npm run dev       # http://localhost:5173  (mode pengembangan)
npm run build     # menghasilkan folder dist/ (statis)
npm run preview   # pratinjau hasil build
```

**Upload ke subdomain:** jalankan `npm run build`, lalu unggah **isi folder `dist/`** ke
subdomain mana pun. Routing memakai hash (`/#/profil`) sehingga bekerja di hosting statis
apa pun **tanpa konfigurasi server** dan tanpa error saat halaman di-refresh.

---

## ✏️ Cara Rebrand untuk Sekolah Baru (cepat)

Semua yang berbeda antar-sekolah terkumpul di **dua file** + **lima gambar**:

### 1. `src/config/school.js` — identitas, warna, kontak, sosial, teks hero
```js
export const school = {
  name: 'SMA Negeri 1 Raja Ampat',
  shortName: 'SMAN 1 Raja Ampat',
  brandSub: 'Portal Sekolah Digital',
  theme: { sea: '#1666ad', seadeep: '#0d477e', gold: '#d98e14', /* ... */ }, // warna brand
  contact: { address, phone, email, hours, mapsUrl },
  social:  { instagram, tiktok, facebook, youtube },
  hero:    { eyebrow, title, lead, handwriting },
  // ...
}
```
Ubah **warna** cukup di `theme` — otomatis diterapkan ke seluruh situs (disuntikkan sebagai
CSS variable saat aplikasi start).

### 2. `src/data/content.js` — konten publik
Berita, layanan, statistik, guru & staf, fasilitas, sejarah, struktur organisasi, dan kata
sambutan (Kepala Dinas + Kepala Sekolah).

### 3. `src/assets/` — ganti 5 gambar (pertahankan nama file)
| File | Dipakai di |
|------|-----------|
| `logo-sman1.png` | header, footer, watermark, favicon |
| `hero-siswa.png` | foto besar di hero Beranda (idealnya PNG transparan) |
| `siswa-medali.png` | seksi "Dalam Angka" |
| `kepala-dinas.png` | kartu sambutan Kepala Dinas (Profil) |
| `kepala-sekolah.png` | kartu sambutan Kepala Sekolah (Profil) |

> Setelah mengedit → `npm run build` → upload `dist/`. Selesai.

---

## 🔌 Menyambung ke Backend Nyata

Seluruh aplikasi berbicara ke "backend" **hanya** lewat `src/api/index.js`. Saat ini setiap
method membaca data tiruan dari `src/data/mock.js` dan mengembalikan `Promise` (sudah async).
Untuk go-live, ganti isi tiap method dengan panggilan `fetch(...)` — sisa aplikasi tidak
berubah.

```js
// sekarang (mock):
async checkAdmissionStatus(no) { const rec = admissions[no]; return rec ? {...rec} : null }
// nanti (nyata):
async checkAdmissionStatus(no) { const r = await fetch(`/api/spmb/${no}`); return r.ok ? r.json() : null }
```

Method yang tersedia: `getNews`, `getNewsById`, `getImportantNews`, `submitRegistration`,
`checkAdmissionStatus`, `submitComplaint`, `trackComplaint`, `login`, `getGrades`,
`getAttendance`, `getCatatan`, `getJadwal`, `getNotif`, `getSiswaBinaan`.

---

## 🧭 Fitur (8 modul, fungsional dengan data tiruan)

- **Beranda** — hero (foto siswa, doodle pendidikan melayang, tulisan tangan, panel "Ikuti Kami!"), layanan, seksi statistik glassmorphism, berita, ticker pengumuman penting.
- **Profil** — kata sambutan Kepala Dinas & Kepala Sekolah (berfoto), visi/misi/tujuan, guru & staf, struktur organisasi, sejarah, fasilitas.
- **Pendaftaran** — formulir + unggah berkas (validasi wajib) & cek status. Coba `SPMB-2026-0148`.
- **Layanan** — daftar layanan; dua di antaranya terkunci (perlu login).
- **Berita** — daftar + halaman detail + blok pengumuman penting.
- **Pengaduan** — kirim aduan (dapat kode tiket) & pantau. Coba `ADU-7F3K2`.
- **Kontak** — info kontak, media sosial, placeholder peta.
- **Akses Khusus** — login per-peran → dasbor Wali/Siswa/Guru, proteksi rute, timeout sesi.

**Akun demo** (di halaman Masuk, kata sandi `sekolah123`):
`wali@raja1.sch.id` · `siswa@raja1.sch.id` · `guru@raja1.sch.id`

---

## 🗂️ Struktur

```
src/
  config/school.js     ← IDENTITAS & BRANDING (edit per sekolah)
  data/content.js      ← KONTEN PUBLIK (edit per sekolah)
  data/mock.js         ← data "backend" tiruan (seed)
  api/index.js         ← data-layer (ganti untuk backend nyata)
  assets/              ← 5 gambar (ganti per sekolah)
  context/AuthContext  ← login/logout, timeout sesi, localStorage
  components/          ← Header, Footer, Ticker, Layout, ikon, dsb.
  pages/               ← 12 halaman (8 modul + detail/dasbor turunan)
  styles/global.css    ← seluruh sistem desain
  routes.js  App.jsx  main.jsx
```

Teknologi: **React 18**, **Vite 5**, **React Router 6** (HashRouter). Font: Newsreader,
Instrument Sans, Caveat (Google Fonts).
