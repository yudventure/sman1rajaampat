/* ============================================================
   MOCK "BACKEND" DATA
   ------------------------------------------------------------
   This stands in for a real database. The API layer (src/api)
   reads/writes these records. To go live with a real backend,
   replace the implementations in src/api — this file can stay
   as seed/demo data or be removed.
   ============================================================ */

export const ADMISSIONS = {
  'SPMB-2026-0148': { name: 'Rendi Wamea', status: 'Diterima' },
  'SPMB-2026-0201': { name: 'Siti Ayu Lestari', status: 'Sedang Diproses' },
  'SPMB-2026-0099': { name: 'Yohanis Mambor', status: 'Tidak Diterima' },
}

export const COMPLAINTS = {
  'ADU-7F3K2': { cat: 'Sarana', date: '28 Jun 2026', msg: 'Atap kelas XI IPA 2 bocor saat hujan.', status: 'Diproses', response: 'Tim sarana telah meninjau lokasi. Perbaikan dijadwalkan pekan ini.' },
  'ADU-9B1X8': { cat: 'Akademik', date: '20 Jun 2026', msg: 'Mohon tambahan jam konsultasi untuk mata pelajaran Fisika.', status: 'Selesai', response: 'Jam konsultasi Fisika ditambah setiap Rabu 14.00–15.00 mulai minggu depan. Terima kasih.' },
}

export const USERS = {
  'wali@raja1.sch.id': { pw: 'sekolah123', role: 'Wali Murid', name: 'Bapak Yance Mayor', child: 'Gita Mayor', kelas: 'XI IPA 1', nisn: '0071234567' },
  'siswa@raja1.sch.id': { pw: 'sekolah123', role: 'Siswa', name: 'Gita Mayor', kelas: 'XI IPA 1', nisn: '0071234567' },
  'guru@raja1.sch.id': { pw: 'sekolah123', role: 'Guru', name: 'Ibu Ester Rumbiak', mapel: 'Biologi' },
}

export const DEMO_ACCOUNTS = [
  { label: 'Wali Murid', email: 'wali@raja1.sch.id' },
  { label: 'Siswa', email: 'siswa@raja1.sch.id' },
  { label: 'Guru', email: 'guru@raja1.sch.id' },
]
export const DEMO_PASSWORD = 'sekolah123'

export const GRADES = {
  'Ganjil 2025/2026': [
    { s: 'Matematika', v: 88, n: 'Konsisten, analisis kuat pada trigonometri.' },
    { s: 'Biologi', v: 92, n: 'Sangat baik dalam praktikum ekosistem laut.' },
    { s: 'Fisika', v: 81, n: 'Perlu latihan pada bab dinamika.' },
    { s: 'Bahasa Indonesia', v: 90, n: 'Menulis argumentatif dengan runtut.' },
    { s: 'Bahasa Inggris', v: 85, n: 'Kemampuan speaking meningkat.' },
    { s: 'Sejarah', v: 87, n: 'Aktif berdiskusi di kelas.' },
  ],
  'Genap 2024/2025': [
    { s: 'Matematika', v: 84, n: 'Meningkat dibanding semester lalu.' },
    { s: 'Biologi', v: 89, n: 'Antusias pada projek konservasi.' },
    { s: 'Fisika', v: 78, n: 'Cukup, tingkatkan ketelitian.' },
    { s: 'Bahasa Indonesia', v: 88, n: 'Baik.' },
    { s: 'Bahasa Inggris', v: 83, n: 'Baik.' },
    { s: 'Sejarah', v: 85, n: 'Baik.' },
  ],
}

export const ATT = { hadir: 78, izin: 3, sakit: 2, alpa: 1 }

export const CATATAN = [
  { by: 'Wali Kelas — Ibu Fransina', t: 'Gita menunjukkan kepemimpinan yang baik sebagai ketua kelompok projek konservasi.' },
  { by: 'Guru BK', t: 'Kehadiran sangat baik. Disarankan mengikuti klub Riset Bahari.' },
]

export const JADWAL_SISWA = [
  { j: '07.15', m: 'Upacara / Literasi' },
  { j: '07.45', m: 'Matematika' },
  { j: '09.15', m: 'Biologi (Lab Bahari)' },
  { j: '10.45', m: 'Bahasa Inggris' },
  { j: '13.00', m: 'Fisika' },
]

export const JADWAL_GURU = [
  { j: '07.45', m: 'Biologi — XI IPA 1' },
  { j: '09.15', m: 'Biologi — XI IPA 2' },
  { j: '10.45', m: 'Bimbingan Riset Bahari' },
  { j: '13.00', m: 'Biologi — XII IPA 1' },
]

export const NOTIF = [
  { t: 'Kartu UAS dapat diambil mulai 9 Juli di Tata Usaha.', d: 'Hari ini' },
  { t: 'Pengumpulan laporan kunjungan Pianemo diperpanjang.', d: 'Kemarin' },
]

export const SISWA_BINAAN = [
  ['Gita Mayor', 'XI IPA 1', '98%', 'Baik'],
  ['Rendi Wamea', 'XI IPA 1', '95%', 'Baik'],
  ['Siti Ayu Lestari', 'XI IPA 2', '92%', 'Perlu perhatian kehadiran'],
]
