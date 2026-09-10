import type { Kategori, Komik, Anggota, Peminjaman } from "../types";

const API_BASE_URL = process.env.API_BASE_URL as string;
const API_TOKEN = process.env.API_TOKEN as string;

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(
      `Gagal mengambil data dari ${endpoint} (status ${response.status})`,
    );
  }
  const hasil = await response.json();
  return hasil.data as T;
}

export function getKategoriList(): Promise<Kategori[]> {
  return fetchAPI<Kategori[]>("/kategori");
}

export function getKomikList(): Promise<Komik[]> {
  return fetchAPI<Komik[]>("/komik");
}

export async function getKomikById(id: string): Promise<Komik | null> {
  try {
    return await fetchAPI<Komik>(`/komik/${id}`);
  } catch {
    return null;
  }
}

export function getAnggotaList(): Promise<Anggota[]> {
  return fetchAPI<Anggota[]>("/anggota");
}

export async function getAnggotaById(id: string): Promise<Anggota | null> {
  try {
    return await fetchAPI<Anggota>(`/anggota/${id}`);
  } catch {
    return null;
  }
}

export function getPeminjamanList(): Promise<Peminjaman[]> {
  return fetchAPI<Peminjaman[]>("/peminjaman");
}
