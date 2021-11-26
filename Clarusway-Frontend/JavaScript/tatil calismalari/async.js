// async function test(data) {
//   //promise return new promise
//   // return new Promise((resolve, reject) => {
//   //   resolve(data);
//   return data;
//   // });
// }
// console.log(test("merhaba"));

// async function test(data) {
//   //promise return new promise
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Bu bir degerdir.");
//     }, 5000);
//   });
//   let response = await promise; //5 saniye bekleyecek
// return response
//   console.log(response);
//   console.log("naber");
// }
// test("merhaba"); //.then((response) => console.log(response));

async function testData(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("Lutfen string bir deger girin.."));
      }
    }, 5000);
  });
  const response = await promise;
  return response;
}
testData(35)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
