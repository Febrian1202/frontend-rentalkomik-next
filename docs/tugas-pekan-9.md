# Tugas Praktikum: Migrasi Dashboard ke Next.js (App Router) — TypeScript

## Instruksi

Kerjakan seluruh praktikum "Migrasi Dashboard ke Next.js (App Router & Routing) — TypeScript" sesuai modul, lalu tambahkan satu fitur kecil di akhir. Kumpulkan dalam bentuk link repository GitHub atau folder project yang sudah berjalan.

## Repository

- **Nama repo:** `frontend-rentalkomik-next`
- **Link:** `https://github.com/<username>/frontend-rentalkomik-next`

---

## Bagian A — Selesaikan Praktikum

1. **Setup Project** (Bagian 1)  
   Setup project `rentalkomik-nextjs` dengan TypeScript + App Router.

2. **Definisi Tipe Data** (Bagian 2)  
   Buat `types/index.ts` — interface `Kategori`, `Komik`, `Anggota`, dan `Peminjaman`.

3. **Konfigurasi Environment** (Bagian 3)  
   Ambil token API dan buat berkas `.env.local`.

4. **API Client Helper** (Bagian 5)  
   Buat `lib/api.ts` — function fetch bertipe generic (`fetchAPI<T>`).

5. **Komponen Presentational Bertipe** (Bagian 6)  
   Buat semua component presentational bertipe:
   - `StatusBadge`
   - `KategoriChip`
   - `KomikCard`
   - `DaftarKomik`
   - `AnggotaCard`
   - `DaftarAnggota`
   - `PeminjamanRow`
   - `TabelPeminjaman`
   - `PageSection`
   - `Navigasi`

6. **Root Layout** (Bagian 7)  
   Buat `app/layout.tsx`.

7. **Halaman Beranda** (Bagian 8)  
   Buat halaman `/` (ringkasan & daftar kategori).

8. **Halaman Katalog Komik** (Bagian 9)  
   Buat halaman `/komik` dan `/komik/[id]` — termasuk penanganan `notFound()` untuk ID yang tidak ada.

9. **Halaman Anggota dan Peminjaman** (Bagian 10)  
   Buat halaman `/anggota` dan `/peminjaman`.

10. **Styling Global** (Bagian 11)  
    Styling terpusat di `app/globals.css`.

11. **Pemeriksaan dan Testing Tipe** (Bagian 12)  
    Jalankan `npm run dev` dan `npx tsc --noEmit`, pastikan tidak ada error tipe.

---

## Bagian B — Tambahan (Pilih Salah Satu)

Kerjakan salah satu dari tiga latihan mandiri di modul:

- **Opsi 1:** Halaman detail anggota bertipe (`app/anggota/[id]/page.tsx` + `getAnggotaById`)
- **Opsi 2:** Custom halaman 404 (`app/not-found.tsx`)
- **Opsi 3:** Riwayat peminjaman per komik di halaman detail komik (filter berdasarkan `judul_komik`)

---

## Verifikasi Sebelum Dikumpulkan

- [x] Semua halaman menampilkan data asli dari backend Laravel (bukan dummy).
- [x] `npx tsc --noEmit` berjalan tanpa error.
- [x] Fitur tambahan (Bagian B) berfungsi dan bisa didemokan.
