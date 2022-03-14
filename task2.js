const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, months);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showAllMonth = (error, months) => {
  if (error) {
    console.log(error.message);
  } else {
    months.map((month) => console.log(month));
  }
};

getMonth(showAllMonth);
