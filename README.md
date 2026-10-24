# contoh landing-page-portfolio

Contoh landing page portfolio dengan gaya editorial. Satu halaman: kartu proyek, catatan yang muncul saat hover, filter kategori, bagian tentang, keahlian, formulir kontak, dan footer.

Persona di halaman ini fiktif — **Mira Ellison**, desainer dan engineer di Kopenhagen — supaya contohnya terasa selesai, bukan template kosong.

## Yang ada di halaman

- Navigasi sticky dengan smooth scroll
- Indeks karya (8 proyek) dan chip filter: All, Product, Editorial, Systems, Motion
- Hover atau fokus pada cover menampilkan deskripsi singkat (di ponsel, catatan ada di bawah judul)
- Tentang, keahlian, dan formulir kontak dengan validasi
- Footer dengan indeks, praktik, dan kolofon
- Responsif, dari layar sempit sampai desktop

## Menjalankan

Butuh Node.js 22.

```bash
npm install
npm run dev
```

Buka [http://localhost:8080](http://localhost:8080).

```bash
npm run build
npm run typecheck
```

## Tumpukan

- TanStack Start + React
- Tailwind CSS
- Formulir divalidasi di browser (tidak mengirim email)

## Struktur

| Path | Isi |
| --- | --- |
| `src/routes/index.tsx` | Halaman utama |
| `src/components/portfolio/portfolio-page.tsx` | Tata letak dan interaksi |
| `src/data/portfolio.ts` | Proyek, keahlian, dan navigasi |
| `src/styles.css` | Token warna dan tipografi |
