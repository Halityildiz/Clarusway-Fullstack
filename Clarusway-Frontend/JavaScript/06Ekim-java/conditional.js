 // Conditionals

/* let score = 85;
// let grade = score >= 50
if (score >= 80) { 
    console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
}else if (score >= 50) {
    console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
}else{
    
    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
}
// console.log('ders bitti'); */


// Ternary If else

/* let score = 49;
score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
               console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */


/* let username = 'Mark';
username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */


/* if (score >= 80) { 
    console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
}else if (score >= 50) {
    console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
}else{
    
    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
} */

/* let score = prompt(' Sınav notunu gir : ')
score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
   console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))
 */


/* let userName;
console.log(userName && console.log(`Merhaba ${userName}`)); */


//Switch Case Yapısı

/* var text;
// var fruits ='LemoN';
var fruits = prompt(" Lütfen bir meyve ismi giriniz : ")
switch (fruits.toLowerCase()) {
    case "banana":
        text = " Banana is good!";
        break;
    case "lime":
    case "lemon":
    case "orange":
        text = ` I am not fan of ${fruits}!`;
        break;
    case "apple":
        text = "How you like them apples?";
        break;
    default :
        text = `I have never heard of ${fruits}`;
    }
    console.log(text); */


// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29


var day=prompt("Lütfen gün giriniz :");
var ders="monday";
switch (day) {
    case "wednesday":
    case "thursday":
    case "saturday":
        ders="In Class";
        break;
    case "tuesday":
    case "friday":
        ders="teamwork";
        break;
    case "sunday":
        ders="flipgridi unutma";
        break;
    default:
        ders="error";
        break;
}
console.log(ders);


let password = 'pg@'
if(password.length >=5 && password.includes('@') ){
    console.log('that password is strong');
}else {
    console.log('password is not long enough');
}



