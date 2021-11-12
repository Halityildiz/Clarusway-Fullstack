// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = ["John", "Ali", "Can"];

students.forEach(print);

// * function decleration
function print(x) {
  console.log(x);
}

//  * with Arrow funct
students.forEach((x) => console.log(x));

//---------------------------------------------------------------
// Calculate the sum of the array
//----------------------------------------------------------------

const array1 = [5, 6, 7, 2, 3];

let sum = 0;
array1.forEach((v) => (sum += v));
console.log("SUM= ", sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atmaya izin  vermektedir.

const numberArray = [3, 7, 17, 8, 9, 3, 0];

const doubled = numberArray.map((x) => x * 2);

console.log(doubled, numberArray);
