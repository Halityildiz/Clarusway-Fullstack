function getTextFile() {
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function getJsonFile() {
  fetch("employees.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getTextFile();
getJsonFile();

function getExternalApi() {
  fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=85c001b6c3bdead15f021bb5eca82eef&format=1"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates.TRY);
    })
    .catch((err) => console.log(err));
}
getExternalApi();
