const fetch = require("node-fetch");

const getDataFromAPI = async (cb) => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

    cb(data);
  } catch (error) {
    console.log(error.message);
  }
};

getDataFromAPI((data) => {
  data.map((item) => console.log(item.name));
});
