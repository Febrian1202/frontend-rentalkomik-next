import StatusBadge from "./StatusBadge";
import KategoriChip from "./KategoriChip";
import type { Komik } from "../types";

interface KomikCardProps {
  komik: Komik;
}

function KomikCard({ komik }: KomikCardProps) {
  return (
    <div className="card komik-card">
      <div className="komik-card-header">
        <h3>{komik.judul}</h3>
        <StatusBadge status={komik.status} />
      </div>
      <p className="komik-penulis">oleh {komik.penulis}</p>
      <div className="komik-card-footer">
        <KategoriChip nama={komik.nama_kategori} />
        <span className="stok">Stok: {komik.stok}</span>
      </div>
    </div>
  );
}

export default KomikCard;
