import PageSection from "../../components/PageSection";
import TabelPeminjaman from "../../components/TabelPeminjaman";
import { getPeminjamanList } from "../../lib/api";

async function HalamanPeminjaman() {
  const peminjamanList = await getPeminjamanList();
  return (
    <PageSection judul="Riwayat Peminjaman">
      <TabelPeminjaman peminjamanList={peminjamanList} />
    </PageSection>
  );
}

export default HalamanPeminjaman;
