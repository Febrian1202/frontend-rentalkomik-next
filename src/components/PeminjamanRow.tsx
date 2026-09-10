import StatusBadge from "./StatusBadge";
import type { Peminjaman } from "../types";

interface PeminjamanRowProps {
  peminjaman: Peminjaman;
}

function PeminjamanRow({ peminjaman }: PeminjamanRowProps) {
  return (
    <tr>
      <td>{peminjaman.nama_anggota}</td>
      <td>{peminjaman.judul_komik}</td>
      <td>{peminjaman.tanggal_pinjam}</td>
      <td>{peminjaman.tanggal_kembali ?? "-"}</td>
      <td>
        <StatusBadge status={peminjaman.status} />
      </td>
    </tr>
  );
}

export default PeminjamanRow;
