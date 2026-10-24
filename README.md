# contoh landing-page-portfolio

Contoh landing page diskografi DJ. Satu halaman: sleeve rilisan, catatan saat hover, filter genre, tentang, suara, formulir booking, dan footer.

**DJ Nah-Man** · label **Shadytronic** · genre **Funkot**, **Breakbeat**, dan **Indonesia Speed Trance**.

Judul rilisan di katalog ini masih contoh tata letak. Ganti dengan tracklist asli kalau sudah ada.

## Yang ada di halaman

- Navigasi sticky dengan smooth scroll
- Diskografi (8 rilisan) dan chip filter: Semua, Funkot, Breakbeat, Speed Trance
- Hover atau fokus pada sleeve menampilkan catatan (di ponsel, catatan ada di bawah judul)
- Tentang, suara, dan formulir booking dengan validasi
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
| `src/data/portfolio.ts` | Rilisan, suara, dan navigasi |
| `src/styles.css` | Token warna dan tipografi |
