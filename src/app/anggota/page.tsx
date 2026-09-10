import PageSection from "../../components/PageSection";
import DaftarAnggota from "../../components/DaftarAnggota";
import { getAnggotaList } from "../../lib/api";

async function HalamanAnggota() {
  const anggotaList = await getAnggotaList();
  return (
    <PageSection judul="Daftar Anggota">
      <DaftarAnggota anggotaList={anggotaList} />
    </PageSection>
  );
}

export default HalamanAnggota;
