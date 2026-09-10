export interface Kategori {
  id: number;
  nama_kategori: string;
}

export interface Komik {
  id: number;
  judul: string;
  penulis: string;
  kategori_id: number;
  nama_kategori: string;
  stok: number;
  status: "available" | "unavailable";
  file_pdf: string | null;
}

export interface Anggota {
  id: number;
  nama: string;
  no_hp: string;
  alamat: string;
  tanggal_daftar: string;
}

export interface Peminjaman {
  id: number;
  nama_anggota: string;
  judul_komik: string;
  tanggal_pinjam: string;
  tanggal_kembali: string | null;
  status: "dipinjam" | "dikembalikan" | "telat";
}
