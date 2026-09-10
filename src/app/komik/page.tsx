import PageSection from "../../components/PageSection";
import DaftarKomik from "../../components/DaftarKomik";
import { getKomikList } from "../../lib/api";

async function HalamanKomik() {
  const komikList = await getKomikList();
  return (
    <PageSection judul="Daftar Komik">
      <DaftarKomik komiks={komikList} />
    </PageSection>
  );
}

export default HalamanKomik;
