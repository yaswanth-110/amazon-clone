import axios from "axios";
const options = {
  method: "GET",
  url: "https://real-time-amazon-data.p.rapidapi.com/product-details",
  params: {
    asin: "B07ZPKBL9V",
    country: "US",
  },
  headers: {
    "X-RapidAPI-Key": "779e30e9c1msh475aff364c85d29p1888c9jsnecd0b1d24f5d",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  },
};

const apiData = async () => {
  await axios(options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default apiData;
