// var indices = [];
// var array = "merhaba selam";
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);


let str = 'Lorem ipsum dolor adalet amet consectetur adipisicing elit. Cupiditate numquam, minima soluta beatae a quas aliquam ex distinctio exercitationem illo adalet autem quod vitae. Repellat quasi ab dolorum, doloremque laudantium unde cum doloribus! Officiis delectus nulla error suscipit debitis incidunt. Accusamus aliquid odio inventore adalet nemo ea qui quam neque non? Nisi voluptas alias tempore numquam harum voluptatum ab laborum ea ipsum officia quisquam, maxime fugit animi eaque soluta molestiae, eum adalet ipsam impedit corrupti dolorem odio, cumque labore? Quod odit, sunt a itaque quisquam officiis blanditiis at dolorem, repudiandae dignissimos ipsam voluptatem incidunt. Suscipit adalet sunt optio corrupti eveniet beatae consequatur, impedit laboriosam eos mollitia, exercitationem rerum ipsum? Harum quidem ut, ea error modi nesciunt iste dolorum voluptates voluptate a, sit aut';
const myArr = str.split(" ");
let strAranan = prompt("aranacak kelimeyi giriniz");
let indexAranan = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === strAranan){
      indexAranan.push(i);    
    }
  }
console.log(indexAranan);


// let str = 'Lorem? ipsum dolor adalet amet consectetur adipisicing elit? Cupiditate numquam, minima soluta be?atae a quas aliquam ex distinctio exercitationem illo adalet autem quod vitae. Repellat quasi ab dolorum, doloremque laudantium unde cum doloribus! Officiis delectus nulla error suscipit debitis incidunt. Accusamus? aliquid odio? inventore adalet nemo ea qui quam neque non? Nisi voluptas alias tempore numquam harum voluptatum ab laborum ea ipsum officia quisquam, maxime fugit animi eaque soluta molestiae, eum adalet ipsam impedit corrupti dolorem odio, cumque labore? Quod odit, sunt a itaque quisquam? officiis blandi?tiis at dolorem, repudiandae dignissimos ipsam voluptatem incidunt. Suscipit adalet sunt optio corrupti eveniet beatae consequatur, impedit laboriosam eos mollitia, exercitationem rerum ipsum? Harum quidem ut, ea error modi nesciunt iste dolorum voluptates voluptate a, sit aut';
// var character = '?';
// let indexSoru = [];
// var i = str.indexOf(character);
// while (i != -1) {
//   indexSoru.push(i);
//   i = str.indexOf(character, i + 1);
// }
// console.log(indexSoru);





// let str = 'Lorem? ipsum dolor adalet amet consectetur adipisicing elit? Cupiditate numquam, minima soluta be?atae a quas aliquam ex distinctio exercitationem illo adalet autem quod vitae. Repellat quasi ab dolorum, doloremque laudantium unde cum doloribus! Officiis delectus nulla error suscipit debitis incidunt. Accusamus? aliquid odio? inventore adalet nemo ea qui quam neque non? Nisi voluptas alias tempore numquam harum voluptatum ab laborum ea ipsum officia quisquam, maxime fugit animi eaque soluta molestiae, eum adalet ipsam impedit corrupti dolorem odio, cumque labore? Quod odit, sunt a itaque quisquam? officiis blandi?tiis at dolorem, repudiandae dignissimos ipsam voluptatem incidunt. Suscipit adalet sunt optio corrupti eveniet beatae consequatur, impedit laboriosam eos mollitia, exercitationem rerum ipsum? Harum quidem ut, ea error modi nesciunt iste dolorum voluptates voluptate a, sit aut';
// let character = prompt("aranacak karakteri giriniz");
// let indexSoru = [];
// var i = str.indexOf(character);
// while (i != -1) {
//   indexSoru.push(i);
//   i = str.indexOf(character, i + 1);
// }
// console.log(indexSoru);



// let kelime = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// let l = "";
// let aranan = prompt("aranacak harfi giriniz");
// for (let i in kelime) {
//   if (kelime[i] === aranan) {
//     l += i + ",";
//   }
// }
// if(l.length===0){
//     l+=`aranan ${aranan} harfi bulunamadı. `
// } 
// console.log(
//   `${aranan} harfinin cümledeki index numarası(numaraları) :` +
//     l.slice(0, l.length - 1)
// );


// array_char = []
// function indexNumber(text) {
//     let inputChar = prompt('enter the character searching in the text: ')
//     for (let i=0; i<text.length; i++) {
//         if (inputChar == text[i]) {
//             array_char.push(i);
//         }
//     }
//     return array_char;
// }
// console.log(indexNumber('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'));



