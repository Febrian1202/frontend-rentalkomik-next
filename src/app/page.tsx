import Link from "next/link";
import PageSection from "@/components/PageSection";
import KategoriChip from "../components/KategoriChip";
import {
  getKategoriList,
  getKomikList,
  getAnggotaList,
  getPeminjamanList,
} from "../lib/api";
import "@/app/globals.css";

async function HalamanUtama() {
  const kategoriList = await getKategoriList();
  const komikList = await getKomikList();
  const anggotaList = await getAnggotaList();
  const peminjamanList = await getPeminjamanList();

  return (
    <div>
      <PageSection judul="Ringkasan">
        <div className="ringkasan-grid">
          <Link href="/komik" className="ringkasan-card">
            <strong>{komikList.length}</strong>
            <span>Komik</span>
          </Link>
          <Link href="/anggota" className="ringkasan-card">
            <strong>{anggotaList.length}</strong>
            <span>Anggota</span>
          </Link>
          <Link href="/peminjaman" className="ringkasan-card">
            <strong>{peminjamanList.length}</strong>
            <span>Peminjaman</span>
          </Link>
        </div>
      </PageSection>
      <PageSection judul="Kategori">
        <div className="daftar-kategori">
          {kategoriList.map((kategori) => (
            <KategoriChip key={kategori.id} nama={kategori.nama_kategori} />
          ))}
        </div>
      </PageSection>
    </div>
  );
}

export default HalamanUtama;
