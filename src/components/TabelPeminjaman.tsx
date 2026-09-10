import PeminjamanRow from "./PeminjamanRow";
import type { Peminjaman } from "../types";

interface TabelPeminjamanProps {
  peminjamanList: Peminjaman[];
}

function TabelPeminjaman({ peminjamanList }: TabelPeminjamanProps) {
  return (
    <table className="tabel-peminjaman">
      <thead>
        <tr>
          <th>Anggota</th>
          <th>Komik</th>
          <th>Tgl Pinjam</th>
          <th>Tgl Kembali</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {peminjamanList.map((peminjaman) => (
          <PeminjamanRow key={peminjaman.id} peminjaman={peminjaman} />
        ))}
      </tbody>
    </table>
  );
}

export default TabelPeminjaman;
