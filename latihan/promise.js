const ambilData = new Promise((resolve, reject) => {
  const berhasil = false;

  setTimeout(() => {
    if (berhasil) {
      resolve("Data berhasil diambil!");
    } else {
      reject("Gagal mengambil data!");
    }
  }, 2000);
});

async function tampilkanData() {
  try {
    const hasil = await ambilData;
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
}

tampilkanData();