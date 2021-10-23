//Dom Events

// window.onload = (e)=> {
//     console.log("your page is loaded");
//     // alert("your page was rendered");
// }

// window.addEventListener("load",(e) => {
//     console.log("windowload eventlistener added");
// });

// window.addEventListener("DOMContentLoaded", function () {
//     console.log("DOMContent was loaded");
// });

let navbarItem1 = document.getElementsByClassName("nav__links")[0].children[0].innerText;

let navbarItem2 = document.getElementsByClassName("nav__links")[0].children[1];
let navbarItem3 = document.getElementsByClassName("nav__links")[0].children[2];
console.log(navbarItem1);

navbarItem1.onclick = () =>{
    alert("Paths clicked by old version");
};

navbarItem1.onclick = () =>{
    alert("Paths clicked by old version"); 
};

navbarItem2.addEventListener("mouseover", ()=>{
    navbarItem2.innerText =    "Over Me!";
    navbarItem2.style.color = "green";
});

navbarItem2.addEventListener("mouseout", ()=>{
    navbarItem2.innerText = "Instructors";
    navbarItem2.style.color = "#444444";
    navbarItem2.style.fontSize = "1.7rem";
});

// const randomNumber = () => {
//    return Math.round(Math.random()*255);
// };
// const randomColor = ()=> {
//     return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
// }
// console.log(randomColor);
// navbarItem3.addEventListener("click", ()=> {
//     navbarItem3.style.backgroundColor = randomColor();
// });


const randomNumber = () => Math.round(Math.random()*255);
const randomColor = ()=> `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
navbarItem3.addEventListener("click", (e)=> {
    // e.stopPropagation();
    navbarItem3.style.backgroundColor = randomColor();
});

navbarItem3.parentElement.addEventListener("click", ()=>{
    navbarItem3.parentElement.style.backgroundColor=randomColor();
});
navbarItem3.parentElement.parentElement.addEventListener("click", ()=>{
    navbarItem3.parentElement.parentElement.style.backgroundColor=randomColor();
});