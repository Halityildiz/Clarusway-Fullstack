// function getData(data) {
//   //promise objesi donduren fonsiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("olumlu sonuc");
//       // reject("olumsuz sonuc");
//     }, 5000);
//   });
// }
// getData("Merhaba").then(function (response) {
//   console.log(response);
// });

// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject("olumsuz sonuc");
//     }, 5000);
//   });
// }
// getData("Merhaba").catch(function (err) {
//   console.log(err);
// });

// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject("Lutfen string bir deger giriniz...");
//       }
//     }, 5000);
//   });
// }
// getData(35)
//   .then(function (response) {
//     console.log("Gelen deger:" + response);
//   })
//   .catch(function (err) {
//     // console.log(err);
//     console.error(err); // boyle yazarsak konsola yaziyi kirmizi yazar
//   });

// getData(35) // usttekinin yerine arrow yazdik
//   .then((response) => console.log("Gelen deger:" + response)) // tek islem yaptigimiz icin suslere de gerek yok
//   .catch((err) => console.error(err));

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lutfen yeni bir sayi  girin .."));
      }
    }, 3000);
  });
}
addTwo(23)
  .then((response) => {
    console.log(response);
    return response * 2;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err)); // bir tane catch birden cok then yakalayabiliriz
