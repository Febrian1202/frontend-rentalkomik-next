import Link from "next/link";
import KomikCard from "./KomikCard";
import type { Komik } from "../types";

interface DaftarKomikProps {
  komiks: Komik[];
}

function DaftarKomik({ komiks }: DaftarKomikProps) {
  if (komiks.length === 0) {
    return <p className="kosong">Belum ada komik.</p>;
  }
  return (
    <div className="grid-komik">
      {komiks.map((komik) => (
        <Link href={`/komik/${komik.id}`} key={komik.id} className="komik-link">
          <KomikCard komik={komik} />
        </Link>
      ))}
    </div>
  );
}

export default DaftarKomik;
