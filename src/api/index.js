/* ============================================================
   DATA-LAYER / API ABSTRACTION
   ------------------------------------------------------------
   The whole app talks to the "backend" ONLY through this module.
   Right now every method resolves against the in-memory mock data
   in src/data/mock.js. To go live, swap each method body for a real
   `fetch(...)` call — the rest of the app does not change.

   Every method returns a Promise so the UI is already async-ready.
   ============================================================ */
import {
  ADMISSIONS, COMPLAINTS, USERS, GRADES, ATT, CATATAN,
  JADWAL_SISWA, JADWAL_GURU, NOTIF, SISWA_BINAAN,
} from '../data/mock.js'
import { NEWS } from '../data/content.js'

// Mutable in-memory stores (stand-ins for DB tables)
const admissions = { ...ADMISSIONS }
const complaints = { ...COMPLAINTS }

// Simulate network latency so the UI is realistic and future-proof.
const delay = (ms = 260) => new Promise((r) => setTimeout(r, ms))
const rand = (n) => Math.floor(Math.random() * n)

export const api = {
  // ---------- News ----------
  async getNews() {
    await delay(120)
    return NEWS
  },
  async getNewsById(id) {
    await delay(120)
    return NEWS.find((n) => n.id === Number(id)) || null
  },
  async getImportantNews() {
    await delay(80)
    return NEWS.filter((n) => n.important)
  },

  // ---------- Admissions (Pendaftaran) ----------
  async submitRegistration(form) {
    await delay()
    const no = 'SPMB-2026-' + String(1000 + rand(9000))
    admissions[no] = { name: form.nama, status: 'Sedang Diproses' }
    return { no, nama: form.nama }
  },
  async checkAdmissionStatus(no) {
    await delay()
    const key = (no || '').trim().toUpperCase()
    const rec = admissions[key]
    return rec ? { no: key, ...rec } : null
  },

  // ---------- Complaints (Pengaduan) ----------
  async submitComplaint(data) {
    await delay()
    const tiket = 'ADU-' + Math.random().toString(36).slice(2, 7).toUpperCase()
    complaints[tiket] = { cat: data.kategori, date: '7 Jul 2026', msg: data.pesan, status: 'Baru', response: '' }
    return { tiket }
  },
  async trackComplaint(tiket) {
    await delay()
    const key = (tiket || '').trim().toUpperCase()
    const rec = complaints[key]
    return rec ? { tiket: key, ...rec } : null
  },

  // ---------- Auth ----------
  async login(email, pw) {
    await delay()
    const u = USERS[(email || '').trim().toLowerCase()]
    if (u && u.pw === pw) {
      return {
        email: (email || '').trim().toLowerCase(),
        role: u.role, name: u.name, child: u.child,
        kelas: u.kelas, nisn: u.nisn, mapel: u.mapel,
      }
    }
    throw new Error('Email atau kata sandi salah. Silakan coba lagi.')
  },

  // ---------- Student / academic data (protected) ----------
  async getGrades(semester) {
    await delay(140)
    return GRADES[semester] || []
  },
  getSemesters() {
    return Object.keys(GRADES)
  },
  async getAttendance() {
    await delay(120)
    return ATT
  },
  async getCatatan() {
    await delay(120)
    return CATATAN
  },
  async getJadwal(role) {
    await delay(120)
    return role === 'Guru' ? JADWAL_GURU : JADWAL_SISWA
  },
  async getNotif() {
    await delay(120)
    return NOTIF
  },
  async getSiswaBinaan() {
    await delay(140)
    return SISWA_BINAAN
  },
}

export default api
