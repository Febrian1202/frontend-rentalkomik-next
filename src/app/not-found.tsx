import Link from "next/link";

function NotFound() {
  return (
    <div className="card not-found-container">
      <h2>404 — Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman atau data yang Anda cari tidak tersedia.</p>
      <Link href="/" className="kembali-btn">
        &larr; Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
