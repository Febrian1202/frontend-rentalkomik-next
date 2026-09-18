import { cookies } from "next/headers";
import type { Kategori, Komik, Anggota, Peminjaman } from "../types";

const API_BASE_URL = process.env.API_BASE_URL as string;

async function getToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value;
}

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const token = await getToken();
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Gagal mengambil data dari ${endpoint} (s
tatus ${response.status})`);
  }
  const hasil = await response.json();
  return hasil.data;
}

export async function getKategoriList(): Promise<Kategori[]> {
  const token = await getToken();
  const response = await fetch(`${API_BASE_URL}/kategori`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 60 },
  });
  const hasil = await response.json();
  return hasil.data;
}

export async function getKomikList(): Promise<Komik[]> {
  const token = await getToken();
  const response = await fetch(`${API_BASE_URL}/komik`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 15 },
  });
  const hasil = await response.json();
  return hasil.data;
}

export async function getKomikById(id: string): Promise<Komik | null> {
  try {
    return await fetchAPI(`/komik/${id}`);
  } catch (_err) {
    return null;
  }
}
export async function getAnggotaList(): Promise<Anggota[]> {
  return fetchAPI("/anggota");
}
export async function getPeminjamanList(): Promise<Peminjaman[]> {
  return fetchAPI("/peminjaman");
}
