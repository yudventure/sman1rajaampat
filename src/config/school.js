/* ============================================================
   SCHOOL CONFIG  —  EDIT THIS FILE TO RE-BRAND FOR A NEW SCHOOL
   ------------------------------------------------------------
   Everything that changes from one school to the next lives here
   or in src/data/content.js. Swap the 5 images in src/assets/,
   change the strings/colors below, run `npm run build`, upload.
   ============================================================ */

// -- Images (replace the files in src/assets/, keep the names or update here) --
import logo from '../assets/logo-sman1.png'
import heroImage from '../assets/hero-siswa.png'
import medalistImage from '../assets/siswa-medali.png'
import kepalaDinasImage from '../assets/kepala-dinas.png'
import kepalaSekolahImage from '../assets/kepala-sekolah.png'

export const school = {
  // -- Identity --
  name: 'SMA Negeri 1 Raja Ampat',
  shortName: 'SMAN 1 Raja Ampat',
  brandSub: 'Portal Sekolah Digital',
  region: 'Kepulauan Raja Ampat, Papua Barat Daya',

  // -- Brand color tokens (injected as CSS variables at runtime) --
  theme: {
    sea: '#1666ad',      // primary
    seadeep: '#0d477e',  // dark primary (headers, footer, ticker)
    sea2: '#3f92d6',
    seasoft: '#e8f1fa',  // soft primary tint
    gold: '#d98e14',     // accent
    paper: '#ffffff',    // page background
    paper2: '#eef1f4',
    surface: '#ffffff',
    ink: '#211e18',
    ink2: '#4c463c',
    muted: '#807a6d',
  },

  // -- Assets --
  assets: { logo, heroImage, medalistImage, kepalaDinasImage, kepalaSekolahImage },

  // -- Hero copy (Beranda) --
  hero: {
    eyebrow: 'Beranda · SMA Negeri 1 Raja Ampat',
    // title supports a highlighted span via {{hl:...}}
    title: 'Belajar tumbuh di antara {{hl:laut & karst}} Raja Ampat.',
    lead:
      'Portal digital terpadu untuk calon siswa, wali murid, guru, dan masyarakat — akses cepat ke pendaftaran, layanan, berita, dan pemantauan belajar dalam satu tempat.',
    handwriting: 'Ayo raih prestasimu!',
  },

  // -- Contact --
  contact: {
    address: 'Jl. Pendidikan No. 1, Waisai, Distrik Kota Waisai, Kabupaten Raja Ampat, Papua Barat Daya 98481',
    addressShort: ['Jl. Pendidikan No. 1', 'Waisai, Raja Ampat', 'Papua Barat Daya 98481'],
    phone: '(0951) 000-1234',
    email: 'info@sman1rajaampat.sch.id',
    hours: 'Senin–Jumat, 07.30–15.00 WIT',
    mapsUrl: 'https://maps.google.com/?q=Waisai+Raja+Ampat',
    mapLabel: 'SMA Negeri 1 Raja Ampat · Waisai',
  },

  // -- Social links --
  social: {
    instagram: 'https://instagram.com/sman1rajaampat',
    tiktok: 'https://tiktok.com/@sman1rajaampat',
    facebook: 'https://facebook.com/sman1rajaampat',
    youtube: 'https://youtube.com/@sman1rajaampat',
  },

  // -- Footer --
  footer: {
    blurb:
      'Portal digital terpadu untuk warga sekolah dan masyarakat Kepulauan Raja Ampat, Papua Barat Daya.',
    copyright: '© 2026 SMA Negeri 1 Raja Ampat. Purwarupa portal digital.',
    note: 'Dibuat sesuai PRD · Data tiruan',
  },

  // -- Session (auth) --
  sessionTimeoutMs: 20 * 60 * 1000,
}

/** Apply the theme tokens as CSS variables on :root. Called once at startup. */
export function applyTheme(t = school.theme) {
  const map = {
    '--sea': t.sea,
    '--seadeep': t.seadeep,
    '--sea2': t.sea2,
    '--seasoft': t.seasoft,
    '--gold': t.gold,
    '--paper': t.paper,
    '--paper2': t.paper2,
    '--surface': t.surface,
    '--ink': t.ink,
    '--ink2': t.ink2,
    '--muted': t.muted,
  }
  const root = document.documentElement
  Object.entries(map).forEach(([k, v]) => v && root.style.setProperty(k, v))
}

export default school
