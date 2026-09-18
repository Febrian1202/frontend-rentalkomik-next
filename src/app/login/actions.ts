"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(`${process.env.API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const hasil = await response.json();

  if (!response.ok) {
    throw new Error(hasil.message ?? "Login gagal.");
  }

  const cookieStore = await cookies();
  cookieStore.set("token", hasil.data.token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
  });

  redirect("/");
}
