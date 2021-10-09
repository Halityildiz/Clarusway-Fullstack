console.log('» app.js is running');

for (;;) {
    console.log("hello");    
}

// [1 -- 100] yazdır
// 5 katları yazılmasın

for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0) {
    continue;
  } else {
    console.log(i);
  }
  if (i === 42) break;
}


//  [1 - 6] arasında rastgele sayı
// 3 defa 3 çıkarsa oyun bitecek
// 6 çıkarsa

// let x = Math.trunc(Math.random() * 20) + 1;
console.log(x);
 
let randomNumber = 0;
let countFor3 = 0;
while (randomNumber !== 6) {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('randomNumber :>> ', randomNumber);
  if (randomNumber === 3) countFor3++;
  if (countFor3 > 2) {
    console.log('3 comes third times, exiting...');
    break;
  }
}



function greet(student) {
  console.log(`Welcome ${student}!`;
}
function greetAll(who) {
  for
}
