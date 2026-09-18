"use client";

function ErrorKomik({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error-box">
      <p>Gagal memuat daftar komik: {error.message}</p>
      <button onClick={reset}>Coba Lagi</button>
    </div>
  );
}

export default ErrorKomik;
