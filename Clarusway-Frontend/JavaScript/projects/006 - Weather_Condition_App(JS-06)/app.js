const url = "http://api.weatherstack.com/";
const key = "94e8a4e85dd630b7f0ade94dc7531443";

const msg = document.querySelector(".msg");
const submitBtn = document.getElementById("submit");
const searchbar = document.querySelector(".search-bar");
const cityName = document.querySelector(".city-name");
const cityTemp = document.querySelector(".city-temp");
const figcaption = document.querySelector(".figcaption");
const weather = document.querySelector(".weather-description");

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  // console.log("clicked");
  apiRegister();
});

const axios = require("axios");
const params = {
  access_key: "94e8a4e85dd630b7f0ade94dc7531443",
  query: "New York",
};

axios
  .get("https://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    console.log(
      `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
    );
  })
  .catch((error) => {
    console.log(error);
  });
