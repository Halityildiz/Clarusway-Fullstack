// function conversion() {
//     let type = prompt('enter the type of thermometer: ')
//     if (type == 'Celcius') {
//         while(true) {
//             let degree = prompt('enter the degree: ');
//             let converted = 1.8*degree+32;
//             if (degree == 'back') return conversion();
//             console.log(`${degree} °C is converted as ${converted} °F !`);
//         }
//     } else if (type == 'Fahrenheit') {
//         while(true) {
//             let degree = prompt('enter the degree: ');
//             let converted = (degree-32)/1.8;
//             if (degree == 'back') return conversion();
//             console.log(`${degree} °F is converted as ${converted} °C !`);
//         }
//     } else if (type == 'exit') {
//         return 'session end.';
//     }
// }
// console.log(conversion());



// while (true) {
//     let convert = prompt("Please enter a f>c or c>f: ")
//     let value = prompt("Please enter a temperature value: ")
//     if (convert == "f>c") {
//         let result = (value - 32) * (5 / 9)
//         console.log(`${value} Fahrenheit (°F) equals to ${result} Celsius (°C)`)
//         break
//     } else if (convert == "c>f") {
//         let result = (value * (9 / 5)) + 32
//         console.log(`${value} Celsius (°C) equals to ${result} Fahrenheit (°F)`)
//         break
//     }
// }




// // //MULTI DeGREE CONVERTOR///
// let selector = prompt('Celcius to Fahreneit = 1     Fahreneit to Celcius = 2');
// let Fah
// let Cel

// function CeltoFah(){
//     Cel = prompt('Please Type Celcius Value...')
//     Fah = Cel * 1.8 + 321                               //Global Fah to Cel formulü
//     console.log(`${Cel} °C ==> ${Fah} °F`)
// }

// function FahtoCel(){
//     Fah = prompt('Please Type Fahreneit Value...')
//     Cel = (Fah -32) / 1.8        //Global Cel to Fah formulü
//     Cel = Cel.toPrecision(4)    // Virgülden sonra gelen uzun değerler bu metod ile 4 hane ile sınırlandırılmıştır.
//     console.log(`${Fah} °F ==> ${Cel} °C`) 
// }


// switch (selector) {
//     case '1':
//         CeltoFah();  // CeltoFah fonksiyonunu çağırdık.
//         break;

//     case '2':
//         FahtoCel();    //FahtoCell fonksiyonunu çağırdık.
//         break;
        
//     default:
//         console.log('Seçenek harici girilen değer.Lütfen Tekrar Deneyiniz...')
//         break;
// }



while (true) {
    let input = prompt("Dereceyi görmek için 'f' Fahrenaytı görmek için 'c' giriniz. Çıkmak için niye girdin arkadaş! (-q-) ya bas bari...!" );    
    if(input==="c"){
        let giriş=prompt("Dereceyi giriniz ");
        let sonuç = (1.8 * giriş) + 32;
        console.log(`${giriş} Derece = ${sonuç.toFixed(2)} °F eder.`);
        
    }
    else if (input==="f"){
        let giriş=prompt("Fahrenaytı giriniz ");
        let sonuç = (giriş - 32) * 5/9;
        console.log(`${giriş} Fahrenayt = ${sonuç.toFixed(2)} °C eder.`); 
    } 
    else if(input ==="q"){
        console.log("güle güle");
        break;         
    }
    else{
        console.log("yanlış giriş yaptınız");
    } 
}