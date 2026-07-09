/* ============================================================
   PUBLIC CONTENT  —  editable per school
   (news, services, stats, staff, facilities, history, sambutan…)
   ============================================================ */

// imgUrl: foto sementara (acak tapi relevan, via LoremFlickr; lock=N agar konsisten).
// Ganti dengan URL foto asli sekolah — atau import file dari src/assets — kapan saja.
export const NEWS = [
  {
    id: 1, type: 'Pengumuman', cat: 'Akademik', date: '2 Juli 2026', author: 'Tata Usaha',
    img: 'Foto ujian', imgUrl: 'https://loremflickr.com/800/500/classroom,exam?lock=11', imgFallback: 'https://picsum.photos/seed/sekolah1/800/500', tagcls: 'ann', important: true,
    title: 'Jadwal Ujian Akhir Semester Ganjil 2025/2026',
    summary: 'Ujian Akhir Semester Ganjil digelar 14–22 Juli 2026. Simak jadwal lengkap per jenjang.',
    body: [
      'Ujian Akhir Semester (UAS) Ganjil Tahun Ajaran 2025/2026 akan dilaksanakan pada 14 hingga 22 Juli 2026. Seluruh siswa diharapkan hadir 15 menit sebelum sesi dimulai.',
      'Kartu ujian dapat diambil di ruang Tata Usaha mulai 9 Juli 2026. Siswa yang belum melunasi administrasi diminta menyelesaikan lebih dulu.',
      'Jadwal terperinci per kelas dan mata pelajaran dapat diakses melalui Dasbor Pribadi masing-masing siswa setelah masuk akun.',
    ],
  },
  {
    id: 2, type: 'Berita', cat: 'Prestasi', date: '28 Juni 2026', author: 'Humas Sekolah',
    img: 'Tim juara', imgUrl: 'https://loremflickr.com/800/500/trophy,winner?lock=22', imgFallback: 'https://picsum.photos/seed/sekolah2/800/500', tagcls: '', important: false,
    title: 'Tim Riset Bahari Raih Juara Nasional Konservasi',
    summary: 'Tim Riset Bahari SMAN 1 Raja Ampat meraih Juara 1 Lomba Karya Ilmiah Konservasi tingkat nasional.',
    body: [
      'Tim Riset Bahari sekolah kita berhasil menyabet Juara 1 pada Lomba Karya Ilmiah Remaja bidang Konservasi Laut tingkat nasional di Jakarta.',
      'Karya berjudul "Pemetaan Kesehatan Terumbu Karang Dampier Strait" mengungguli 120 peserta dari seluruh Indonesia.',
      'Prestasi ini menegaskan komitmen sekolah sebagai sekolah bahari unggulan di kawasan timur Indonesia.',
    ],
  },
  {
    id: 3, type: 'Berita', cat: 'Kegiatan', date: '20 Juni 2026', author: 'OSIS',
    img: 'Bersih pantai', imgUrl: 'https://loremflickr.com/800/500/beach,cleanup?lock=33', imgFallback: 'https://picsum.photos/seed/sekolah3/800/500', tagcls: '', important: false,
    title: 'Aksi Bersih Pantai & Transplantasi Karang',
    summary: 'Aksi bersih pantai dan transplantasi karang melibatkan 300+ siswa bersama masyarakat Waisai.',
    body: [
      'Dalam rangka Hari Lingkungan Hidup, OSIS menggelar aksi bersih pantai sepanjang pesisir Waisai bersama masyarakat setempat.',
      'Kegiatan dilanjutkan dengan transplantasi 200 fragmen karang di area konservasi binaan sekolah.',
      'Kegiatan ini menjadi bagian dari kurikulum muatan lokal kebaharian yang menjadi ciri khas sekolah.',
    ],
  },
  {
    id: 4, type: 'Pengumuman', cat: 'SPMB', date: '15 Juni 2026', author: 'Panitia SPMB',
    img: 'Pendaftaran', imgUrl: 'https://loremflickr.com/800/500/students,school?lock=44', imgFallback: 'https://picsum.photos/seed/sekolah4/800/500', tagcls: 'ann', important: true,
    title: 'Pendaftaran Siswa Baru 2026/2027 Resmi Dibuka',
    summary: 'Pendaftaran Siswa Baru (SPMB) TA 2026/2027 resmi dibuka. Kuota 320 siswa, gelombang 1.',
    body: [
      'Penerimaan Siswa Baru untuk Tahun Ajaran 2026/2027 telah dibuka mulai 15 Juni 2026 melalui jalur pendaftaran daring.',
      'Kuota gelombang pertama adalah 320 siswa. Berkas yang wajib diunggah adalah Ijazah/SKL dan Akta Kelahiran.',
      'Calon siswa dapat mendaftar langsung melalui menu Pendaftaran Siswa Baru di portal ini dan memantau statusnya secara mandiri.',
    ],
  },
  {
    id: 5, type: 'Berita', cat: 'Kegiatan', date: '8 Juni 2026', author: 'Humas Sekolah',
    img: 'Pianemo', imgUrl: 'https://loremflickr.com/800/500/tropical,island?lock=55', imgFallback: 'https://picsum.photos/seed/sekolah5/800/500', tagcls: '', important: false,
    title: 'Kunjungan Konservasi ke Karst Pianemo',
    summary: 'Kelas XI mengikuti kunjungan konservasi ke gugusan karst Pianemo sebagai pembelajaran lapangan.',
    body: [
      'Siswa kelas XI melaksanakan pembelajaran lapangan ke ikon Raja Ampat, gugusan karst Pianemo, dengan pendampingan ranger konservasi.',
      'Siswa mempelajari geologi karst, keanekaragaman hayati, serta praktik pariwisata berkelanjutan.',
      'Laporan hasil kunjungan menjadi bagian penilaian projek penguatan profil pelajar Pancasila.',
    ],
  },
  {
    id: 6, type: 'Berita', cat: 'Akademik', date: '30 Mei 2026', author: 'Kurikulum',
    img: 'Workshop guru', imgUrl: 'https://loremflickr.com/800/500/seminar,laptop?lock=66', imgFallback: 'https://picsum.photos/seed/sekolah6/800/500', tagcls: '', important: false,
    title: 'Workshop Literasi Digital untuk Guru',
    summary: 'Guru mengikuti workshop literasi digital untuk memperkuat pembelajaran berbasis teknologi.',
    body: [
      'Sebanyak 40 guru mengikuti workshop literasi dan pembelajaran digital selama dua hari di aula sekolah.',
      'Pelatihan mencakup pemanfaatan portal sekolah, penilaian daring, dan pembuatan materi interaktif.',
      'Program ini bagian dari transformasi digital sekolah menuju layanan pendidikan yang lebih transparan.',
    ],
  },
]

export const SERVICES = [
  { title: 'Pendaftaran Siswa Baru', route: 'pendaftaran', who: 'Calon Siswa', desc: 'Daftar online, unggah berkas persyaratan, dan pantau status penerimaan secara mandiri.', icon: 'enroll' },
  { title: 'Layanan Pengaduan', route: 'pengaduan', who: 'Masyarakat Umum', desc: 'Sampaikan keluhan, saran, atau pertanyaan dan lacak tanggapannya lewat kode tiket.', icon: 'complaint' },
  { title: 'Pantauan Siswa', route: 'pantau-siswa', who: 'Wali Murid', desc: 'Lihat ringkasan kehadiran dan catatan wali kelas untuk ananda. Perlu masuk akun.', icon: 'monitor', gated: true },
  { title: 'Laporan Belajar', route: 'laporan-belajar', who: 'Wali Murid & Siswa', desc: 'Pantau perkembangan nilai dan evaluasi per mata pelajaran tiap semester. Perlu masuk akun.', icon: 'news', gated: true },
  { title: 'Legalisir & Surat Keterangan', route: 'kontak', who: 'Alumni & Siswa', desc: 'Pengajuan legalisir ijazah dan surat keterangan aktif melalui Tata Usaha sekolah.', icon: 'profile' },
  { title: 'Informasi Beasiswa', route: 'kontak', who: 'Siswa', desc: 'Informasi beasiswa prestasi dan bantuan pendidikan bagi siswa Kepulauan Raja Ampat.', icon: 'contact' },
]

export const STATS = [
  { n: '1.240+', l: 'Siswa Aktif' },
  { n: '52', l: 'Prestasi (2025)' },
  { n: '98%', l: 'Tingkat Kelulusan' },
  { n: '86', l: 'Guru & Staf' },
]

export const GURU = [
  { n: 'Dra. Yohana Mambrasar, M.Pd.', j: 'Kepala Sekolah' },
  { n: 'Selfina Rumbrapuk, S.Pd.', j: 'Wakil Kurikulum' },
  { n: 'Yusuf Ayello, S.Pd.', j: 'Wakil Kesiswaan' },
  { n: 'Ester Rumbiak, S.Si.', j: 'Guru Biologi' },
  { n: 'Daniel Mambrasar, S.Pd.', j: 'Guru Matematika' },
  { n: 'Fransina Dimara, S.S.', j: 'Guru Bahasa Inggris' },
  { n: 'Agustinus Fakdawer, S.Pd.', j: 'Guru Fisika' },
  { n: 'Naomi Sauyai, A.Md.', j: 'Kepala Tata Usaha' },
]

export const FASILITAS = [
  { n: 'Laboratorium Bahari', d: 'Pusat riset kelautan & akuarium konservasi karang.', ic: 'monitor' },
  { n: 'Perpustakaan Digital', d: 'Koleksi cetak dan e-book dengan ruang baca laut.', ic: 'news' },
  { n: 'Lab Komputer', d: '40 unit dengan akses internet untuk literasi digital.', ic: 'profile' },
  { n: 'Lapangan Terpadu', d: 'Sarana olahraga voli, basket, dan futsal.', ic: 'enroll' },
  { n: 'Asrama Siswa', d: 'Hunian nyaman bagi siswa dari pulau-pulau sekitar.', ic: 'contact' },
  { n: 'Aula Serbaguna', d: 'Ruang pertemuan dan pentas seni berkapasitas 400 orang.', ic: 'complaint' },
]

export const SEJARAH = [
  { y: '1985', t: 'Berdiri', d: 'Diresmikan sebagai SMA Negeri pertama di gugusan Kepulauan Raja Ampat untuk melayani anak-anak pesisir.' },
  { y: '2003', t: 'Pemekaran Kabupaten', d: 'Menjadi sekolah rujukan seiring terbentuknya Kabupaten Raja Ampat.' },
  { y: '2015', t: 'Sekolah Bahari', d: 'Menerapkan muatan lokal kebaharian dan konservasi laut sebagai ciri khas.' },
  { y: '2023', t: 'Transformasi Digital', d: 'Membangun layanan sekolah digital untuk transparansi dan kemudahan akses warga sekolah.' },
]

export const ORG = [
  { nm: 'Dra. Yohana Mambrasar, M.Pd.', r: 'Kepala Sekolah' },
  { nm: 'Komite Sekolah', r: 'Mitra' },
  { nm: 'Naomi Sauyai, A.Md.', r: 'Kepala Tata Usaha' },
]

export const ORG_LEVEL3 = ['Wakil Kurikulum', 'Wakil Kesiswaan', 'Wakil Sarana', 'Wali Kelas & Guru']

export const VISI_MISI = [
  ['Visi', 'Menjadi sekolah bahari unggul yang membentuk generasi berkarakter, cerdas, dan peduli kelestarian laut Raja Ampat.', '◆'],
  ['Misi', 'Menyelenggarakan pembelajaran bermutu berbasis potensi lokal, menumbuhkan budi pekerti, dan mengembangkan literasi digital serta konservasi.', '❖'],
  ['Tujuan', 'Menghasilkan lulusan yang berdaya saing, mandiri, dan menjadi penjaga warisan alam serta budaya bahari.', '▲'],
]

// Kata sambutan — imgKey references school.assets keys
export const SAMBUTAN = [
  {
    tag: 'Sambutan · Kepala Dinas Pendidikan',
    role: 'Kepala Dinas Pendidikan Kab. Raja Ampat',
    nm: 'Drs. Yakob Sauyai, M.M.',
    imgKey: 'kepalaDinasImage',
    q: 'Kami menyambut baik hadirnya portal digital SMA Negeri 1 Raja Ampat. Ini wujud nyata transparansi dan pemerataan akses layanan pendidikan bagi seluruh anak negeri di Kepulauan Raja Ampat.',
  },
  {
    tag: 'Sambutan · Kepala Sekolah',
    role: 'Kepala SMA Negeri 1 Raja Ampat',
    nm: 'Dra. Yohana Mambrasar, M.Pd.',
    imgKey: 'kepalaSekolahImage',
    q: 'Selamat datang di rumah belajar kami. Melalui portal ini, kami membuka pintu selebar-lebarnya bagi siswa, wali murid, dan masyarakat untuk tumbuh bersama sekolah bahari kebanggaan Raja Ampat.',
  },
]

// Public navigation (label, route)
export const NAV = [
  ['Beranda', 'home'],
  ['Profil', 'profil'],
  ['Layanan', 'layanan'],
  ['Berita', 'berita'],
  ['Kontak', 'kontak'],
]
