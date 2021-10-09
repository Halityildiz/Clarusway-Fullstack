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

// 1-6 arasinda random sayi uretilecek, eger 6 cikarsa veya ust uste 3 defa 3 gelirse donguden cikacak...
let randomnumber = 0;
let counter = 0;
while (randomnumber !== 6){         // Donguye ilk basta girebilsin diye
randomnumber = Math.floor(Math.random() * 6 + 1);   // Random sayi uretme methodu (1-6 arasi), Math.random() always returns a number lower than 1.
console.log("randomnumber :>> ", randomnumber);
    if (randomnumber == 3){ counter++; }             // Sayi 3 ise counter 1 artacak counter 3 olursa donguden cikacak
    if (counter == 3 ){                                                // counter > 2 seklinde de yazilabilirdi, sart geregi dongu tamamen biter
        console.log("3 Comes third times, exiting");
        break;
    }
    if (randomnumber == 6 ){
        console.log("6 has come the loop ends");
        break;
    }
}