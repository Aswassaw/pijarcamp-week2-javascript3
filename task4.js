const fetch = require("node-fetch");

const getDataFromAPI = async (cb) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  cb(data);
};

getDataFromAPI((data) => {
  data.map((item) => console.log(item.name));
});
