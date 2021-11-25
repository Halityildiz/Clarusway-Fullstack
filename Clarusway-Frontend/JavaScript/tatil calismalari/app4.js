document.getElementById("change").addEventListener("click", change);

function change() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://api.exchangeratesapi.io/v1/latest?access_key=85c001b6c3bdead15f021bb5eca82eef&format=1",
    true
  );
  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      // console.log(this.responseText);
      // console.log(response.rates.TRY);
      const TLrate = response.rates.TRY;
      const Erate = response.rates.EUR;
      const Drate = response.rates.USD;
      let parite = Erate / Drate;
      const amount = Number(document.getElementById("amount").value);
      document.getElementById("tl").value = amount * parite * TLrate;
      // document.getElementById("tl").value = amount * TLrate;
      console.log(document.getElementById("tl").value);
    }
  };
  xhr.send();
}
