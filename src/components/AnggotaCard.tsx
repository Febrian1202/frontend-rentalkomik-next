import type { Anggota } from "../types";

interface AnggotaCardProps {
  anggota: Anggota;
}

function AnggotaCard({ anggota }: AnggotaCardProps) {
  return (
    <div className="card anggota-card">
      <h3>{anggota.nama}</h3>
      <p>{anggota.no_hp}</p>
      <p className="alamat">{anggota.alamat}</p>
      <p className="tanggal-daftar">Terdaftar sejak {anggota.tanggal_daftar}</p>
    </div>
  );
}

export default AnggotaCard;
