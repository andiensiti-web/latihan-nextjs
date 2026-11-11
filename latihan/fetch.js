const API_URL = "https://6a79852b674f43f4db116196.mockapi.io/biodata";

async function ambilBiodata() {
  try {
    const response = await fetch(API_URL);

    console.log("Status HTTP:", response.status);
    console.log("Apakah respons berhasil?", response.ok);

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }

    const data = await response.json();

    console.log("Data biodata:");
    console.log(data);
  } catch (error) {
    console.log("Terjadi kesalahan:", error.message);
  }
}

ambilBiodata();