import { notFound } from "next/navigation";
import Link from "next/link";
import { getAnggotaById } from "@/lib/api";

interface HalamanDetailAnggotaProps {
  params: Promise<{ id: string }>;
}

async function HalamanDetailAnggota({ params }: HalamanDetailAnggotaProps) {
  const { id } = await params;
  const anggota = await getAnggotaById(id);
  if (!anggota) {
    notFound();
  }
  return (
    <div>
      <Link href="/anggota">&larr; Kembali ke Daftar Anggota</Link>
      <div className="card anggota-detail">
        <h1>{anggota.nama}</h1>
        <p><strong>Nomor HP:</strong> {anggota.no_hp}</p>
        <p className="alamat"><strong>Alamat:</strong> {anggota.alamat}</p>
        <p className="tanggal-daftar"><strong>Terdaftar sejak:</strong> {anggota.tanggal_daftar}</p>
      </div>
    </div>
  );
}

export default HalamanDetailAnggota;
