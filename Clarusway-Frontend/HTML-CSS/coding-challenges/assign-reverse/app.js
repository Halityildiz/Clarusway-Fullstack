// reverse words example
/* 
const word = "ozkan ozkan";

------Make an array from string------

 const arr = [...word];  
const arr = word.split("");
 */
 


// methods of defining function in js.
/* function reverse(sentence){    

} */
const reverse = function (sentence){
    let arr = sentence.split("");
    let arr1 = [];

    //return arr.reverse().join("");       // reverse an array directly and join its all elements.
    for ( let i = arr.length-1 ; i >=  0; i--){

        arr1.push(arr[i]);


    };
    
    return arr1.join("");

};

console.log(reverse("ozkan"));  

 

  
// practic usage of  function in Js.
/* const a = x => x**2;

console.log(a(5)); */