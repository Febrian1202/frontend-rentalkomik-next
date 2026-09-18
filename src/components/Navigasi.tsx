import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Navigasi() {
  return (
    <nav className="navigasi">
      <Link href="/">Beranda</Link>
      <Link href="/komik">Komik</Link>
      <Link href="/anggota">Anggota</Link>
      <Link href="/peminjaman">Peminjaman</Link>
      <LogoutButton />
    </nav>
  );
}

export default Navigasi;
