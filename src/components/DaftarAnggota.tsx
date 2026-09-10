import Link from "next/link";
import AnggotaCard from "./AnggotaCard";
import type { Anggota } from "../types";

interface DaftarAnggotaProps {
  anggotaList: Anggota[];
}

function DaftarAnggota({ anggotaList }: DaftarAnggotaProps) {
  return (
    <div className="grid-anggota">
      {anggotaList.map((anggota) => (
        <Link href={`/anggota/${anggota.id}`} key={anggota.id} className="anggota-link">
          <AnggotaCard anggota={anggota} />
        </Link>
      ))}
    </div>
  );
}

export default DaftarAnggota;
