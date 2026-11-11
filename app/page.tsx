
"use client";

import { useEffect, useState } from "react";
import { getBiodata } from "@/lib/api";
import { Biodata } from "@/types/biodata";

export default function Home() {
  const [data, setData] = useState<Biodata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function tampilkanBiodata() {
      try {
        const hasil = await getBiodata();
        setData(hasil);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan"
        );
      } finally {
        setLoading(false);
      }
    }

    tampilkanBiodata();
  }, []);

  if (loading) {
    return <p className="p-8">Memuat data mahasiswa...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-600">Error: {error}</p>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-2 text-3xl font-bold">
        Data Biodata Mahasiswa
      </h1>

      <p className="mb-6 text-gray-600">
        Daftar mahasiswa dari MockAPI
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((mahasiswa, index) => (
          <div
            key={mahasiswa.nim || index}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h2 className="mb-3 text-xl font-bold">
              {mahasiswa.nama}
            </h2>

            <p><strong>NIM:</strong> {mahasiswa.nim}</p>
            <p><strong>Program Studi:</strong> {mahasiswa.prodi}</p>
            <p><strong>Semester:</strong> {mahasiswa.semester}</p>
            <p><strong>Email:</strong> {mahasiswa.email}</p>
            <p><strong>No. HP:</strong> {mahasiswa.no_hp}</p>
            <p><strong>Alamat:</strong> {mahasiswa.alamat}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
