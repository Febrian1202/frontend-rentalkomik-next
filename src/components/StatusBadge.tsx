// components/StatusBadge.tsx
interface StatusBadgeProps {
  status: string;
}
function StatusBadge({ status }: StatusBadgeProps) {
  const tampilan: Record<string, { label: string; warna: string }> = {
    available: { label: "Tersedia", warna: "badge-hijau" },
    unavailable: { label: "Tidak Tersedia", warna: "badge-abu" },
    dipinjam: { label: "Dipinjam", warna: "badge-kuning" },
    dikembalikan: { label: "Dikembalikan", warna: "badge-hijau" },
    telat: { label: "Telat", warna: "badge-merah" },
  };

  const info = tampilan[status] ?? { label: status, warna: "badge-abu" };

  return <span className={`badge ${info.warna}`}>{info.label}</span>;
}

export default StatusBadge;
