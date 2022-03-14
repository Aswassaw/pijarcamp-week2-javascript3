const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item.toLowerCase() === day.toLowerCase();
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// then-catch
cekHariKerja("rAbu")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// async-await
const cekHariKerjaAsync = async (day) => {
  try {
    console.log(await cekHariKerja(day));
  } catch (error) {
    console.log(error.message);
  }
};
cekHariKerjaAsync("minggu");