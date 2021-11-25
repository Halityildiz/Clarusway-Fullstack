// async function test(data) {
//   //promise return new promise
//   // return new Promise((resolve, reject) => {
//   //   resolve(data);
//   return data;
//   // });
// }
// console.log(test("merhaba"));

async function test(data) {
  //promise return new promise
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}
test("merhaba").then((response) => clg(response));
