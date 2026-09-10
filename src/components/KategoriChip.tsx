interface KategoriChipProps {
  nama: string;
}

function KategoriChip({ nama }: KategoriChipProps) {
  return <span className="chip">{nama}</span>;
}

export default KategoriChip;
