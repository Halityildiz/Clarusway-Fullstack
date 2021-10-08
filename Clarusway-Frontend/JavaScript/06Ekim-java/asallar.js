// let x = 0;
// let number = parseInt(prompt("Please enter a number "));
	
//     for(let i = 2; i < number; i++)
// 	{
//         if ( number % i == 0 ){ x++; }
//     }
//     x == 0 ? document.write("It is a prime number") :
//   document.write("It is NOT a prime number ");  	



// for (let i=1; i<=100; i++) {
//     if (i<=2) {
//         console.log(i, 'is not a prime number');
//     }
//     else {
//         for (let j=2; j<i; j++) {
//             if (i%j == 0) {
//                 console.log(i, 'is not a prime number');
//                 break;
//             } else {
//                 if (j<(i-1)) {
//                     continue;
//                 } else {
//                     console.log(i, 'IS A PRIME NUMBER');
//                 }
//             }
//         }
//     }
// }

// let number = parseInt(prompt("Please enter number : "));
// let sonuç=""
// let sayaç=0
// for(let i=1;i<=number;i++){
//   if(number%i==0){
//     sayaç+=1
//     }
//   if(sayaç==1 || sayaç>2){
//     sonuç="sayı asal değil"
//     }else{
//       sonuç="sayı asal"
//       }
//   }
// document.write(sonuç)


// const number = 47;
// let isPrime = true;

// for(let i=2; i<number; i ++){
//     if (number%i ==0) {
//         isPrime = false
//         break        
//     }
// }
// console.log(isPrime);


// for (var i = 2; i < 100; i++) {
//     let k = true;
//     for (var j = 2; j < i; j++) {
//       if (i % j == 0) {
//         k = false
//         break;
//       }
//     }
//     if (k === true){
//       console.log(i);
//     }
// }

for(let num=2 ; num<100; num++){
    var sonuc=true;
        for(let i = 2; i < num; i++){
            if(num %i == 0){
               sonuc=false;
               break;
            }
        }  
    if(sonuc == true){console.log(num);}    
}
