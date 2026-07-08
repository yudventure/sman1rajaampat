# Portal SMAN 1 Raja Ampat

Situs portal resmi SMA Negeri 1 Raja Ampat — satu halaman statis yang mandiri (HTML, CSS, dan JavaScript dalam satu berkas), tanpa dependensi build.

## Struktur

- `index.html` — seluruh situs: gaya, markup, ilustrasi SVG, dan interaksi.

## Fitur

- Bagian: Beranda (hero), Statistik, Pengumuman & Agenda, Profil, Program Akademik, Ekstrakurikuler, Berita, PPDB, Galeri, Kontak, dan Footer.
- Desain bertema bahari Raja Ampat (palet laut/karang) dengan ilustrasi SVG inline — tidak ada aset gambar eksternal.
- Responsif penuh (desktop, tablet, ponsel) dengan menu hamburger di layar kecil.
- Interaksi: scroll-spy navigasi, animasi reveal saat digulir, penghitung statistik animasi, tombol kembali ke atas, dan validasi formulir kontak (demo statis, tanpa backend).

## Menjalankan

Buka `index.html` langsung di peramban, atau sajikan lewat server statis:

```sh
python3 -m http.server 8000
# lalu buka http://localhost:8000
```
