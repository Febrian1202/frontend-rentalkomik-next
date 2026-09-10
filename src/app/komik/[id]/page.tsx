import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import KategoriChip from "@/components/KategoriChip";
import PageSection from "@/components/PageSection";
import TabelPeminjaman from "@/components/TabelPeminjaman";
import { getKomikById, getPeminjamanList } from "@/lib/api";

interface HalamanDetailKomikProps {
  params: Promise<{ id: string }>;
}

async function HalamanDetailKomik({ params }: HalamanDetailKomikProps) {
  const { id } = await params;
  const [komik, peminjamanList] = await Promise.all([
    getKomikById(id),
    getPeminjamanList(),
  ]);

  if (!komik) {
    notFound();
  }

  const riwayatKomik = peminjamanList.filter(
    (p) => p.judul_komik.toLowerCase() === komik.judul.toLowerCase(),
  );

  return (
    <div>
      <Link href="/komik">&larr; Kembali ke Daftar Komik</Link>
      <div className="card komik-detail">
        <div className="komik-card-header">
          <h1>{komik.judul}</h1>
          <StatusBadge status={komik.status} />
        </div>
        <p className="komik-penulis">oleh {komik.penulis}</p>
        <KategoriChip nama={komik.nama_kategori} />
        <p>Stok tersedia: {komik.stok}</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <PageSection judul={`Riwayat Peminjaman: ${komik.judul}`}>
          {riwayatKomik.length === 0 ? (
            <p className="kosong">Belum ada riwayat peminjaman untuk komik ini.</p>
          ) : (
            <TabelPeminjaman peminjamanList={riwayatKomik} />
          )}
        </PageSection>
      </div>
    </div>
  );
}

export default HalamanDetailKomik;
