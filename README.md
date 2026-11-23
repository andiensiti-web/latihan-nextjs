# Mini Project: Data Biodata Mahasiswa

## Deskripsi

Aplikasi web sederhana untuk menampilkan daftar biodata mahasiswa yang diambil dari MockAPI.

Project ini dibuat sebagai latihan penerapan materi Minggu 3–4, yaitu Async JavaScript, API, dan TypeScript.

## Teknologi yang Digunakan

- Next.js
- React
- TypeScript
- JavaScript
- Fetch API
- MockAPI

## Sumber API

https://6a79852b674f43f4db116196.mockapi.io/biodata

API digunakan untuk mengambil data biodata mahasiswa dalam format JSON.

## Fitur Aplikasi

1. Mengambil data biodata mahasiswa dari API menggunakan Fetch API.
2. Menampilkan daftar biodata mahasiswa.
3. Menampilkan loading state ketika data sedang dimuat.
4. Menampilkan error state jika terjadi kegagalan saat mengambil data.
5. Menggunakan TypeScript Interface untuk mendefinisikan struktur data biodata.

## Materi yang Diterapkan

- Promise dan Async/Await.
- Fetch API.
- HTTP Method dan HTTP Status Code.
- JSON.
- Error Handling menggunakan try/catch.
- TypeScript: Type dan Interface.
- Pengelolaan state loading, error, dan data.

## Cara Menjalankan Project

1. Install dependencies:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka browser dan akses:

```text
http://localhost:3000
```

## Pengujian

Pemeriksaan TypeScript:

```bash
npx tsc --noEmit
```

Build production:

```bash
npm run build
```

Menjalankan production server:

```bash
npm run start
```

## Tujuan Pembelajaran

Melalui mini project ini, diharapkan dapat memahami proses pengambilan data dari API, penggunaan Promise dan Async/Await, pengolahan response JSON, penanganan error, serta penerapan TypeScript dalam aplikasi Next.js.
