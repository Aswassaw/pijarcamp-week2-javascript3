const convertCelcius = (celcius) => {
  return new Promise((resolve, reject) => {
    if (typeof celcius === "number") {
      setTimeout(() => {
        const convertResult = {
          celcius,
          kelvin: celcius + 273.15,
          reamur: (4 / 5) * celcius,
          fahrenheit: (9 / 5) * celcius + 32,
        };

        resolve(convertResult);
      }, 3000);
    } else {
      reject(new Error("Parameter yang dimasukkan bukanlah number."));
    }
  });
};

convertCelcius(60)
  .then(({ celcius, kelvin, reamur, fahrenheit }) => {
    console.log(`${celcius} Celcius setara dengan ${kelvin} Kelvin`);
    console.log(`${celcius} Celcius setara dengan ${reamur} Reamur`);
    console.log(`${celcius} Celcius setara dengan ${fahrenheit} Fahrenheit`);
  })
  .catch(({ message }) => console.log(message));
