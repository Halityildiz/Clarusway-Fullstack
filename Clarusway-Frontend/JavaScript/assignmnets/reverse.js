function reserve_txt(myText) {
    if (myText.length == 1) {
      console.log(myText)
    } else {
      newText = ""
      for (let i = myText.length - 1; i >= 0; i--) {
        newText += myText[i]
      }
      console.log(newText)
    }
  }  
reserve_txt("Cohort__9--FS Harveyli Cumalar");


function reverseWord(myWord){
    var lastWord = ""
    if (myWord.length === 1){
        console.log(myWord);
    }
    else{
        for(i = myWord.length - 1; i >=0; i--){    
            lastWord += myWord[i];
        }
    }
    console.log(lastWord);
}

reverseWord('ey edip adanada pide ye')


let myword="Mustafa";
let lastword="";
for (i = myword.length-1; i >= 0; i--) {
    lastword +=myword[i];    
}
console.log(lastword.toUpperCase());


function reverseWords(str) {
    return str.split('').reverse().join('')} 
   console.log(reverseWords('Hayirli Cumalar')); 


function a(color){
  if(color!=="blue"|| color!=="green"){
    color="red";
  }
  return color;
}
console.log(a("blue"));