import { Biodata } from "@/types/biodata";

const API_URL =
  "https://6a79852b674f43f4db116196.mockapi.io/biodata";

export async function getBiodata(): Promise<Biodata[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Gagal mengambil data biodata");
  }

  const data: Biodata[] = await response.json();

  return data;
}