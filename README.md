# contoh landing-page-portfolio

Contoh landing page diskografi DJ dengan gaya editorial. Satu halaman: sleeve rilisan, catatan yang muncul saat hover, filter format, tentang, sound, formulir booking, dan footer.

Persona di halaman ini fiktif — **Sero Hale**, DJ dan produser di Jakarta, imprint Hale Records — supaya contohnya terasa selesai, bukan template kosong.

## Yang ada di halaman

- Navigasi sticky dengan smooth scroll
- Diskografi (8 rilisan) dan chip filter: All, Single, EP, Remix, Mix
- Hover atau fokus pada sleeve menampilkan catatan singkat (di ponsel, catatan ada di bawah judul)
- Tentang, sound, dan formulir booking dengan validasi
- Footer dengan indeks, meja booking, dan kolofon
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
| `src/data/portfolio.ts` | Rilisan, sound, dan navigasi |
| `src/styles.css` | Token warna dan tipografi |
