// const langs = ["phyton", "Java", "C++"];
// langs.forEach(function (lang) {
//   console.log(lang);
// });

// document.getElementById("btn").addEventListener("click", function () {
//   console.log("Tikla");
// });

// function process1() {
//   setTimeout(function () {
//     console.log("process1");
//   }, 3000);
// }

// function process2() {
//   setTimeout(function () {
//     console.log("process2");
//   }, 2000);
// }
// process1();
// process2();
// console.log("naber gardas");

// function process1(callback) {
//   setTimeout(function () {
//     console.log("process1");
//     callback();
//   }, 3000);
// }

// function process2() {
//   setTimeout(function () {
//     console.log("process2");
//   }, 2000);
// }
// process1(process2);

const langs = ["phyton", "Java", "C++"];

function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("eklendi");
    callback();
  }, 2000);
}

function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

addLang("Javascript", getAllLangs);
// asenkron durum
