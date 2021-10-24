function fizz() {
    let number = document.getElementById("number").value;
    for( var i=1; i<=number; i++){
        if (i % 15 == 0)
        document.getElementById("result").innerHTML += `${i} FizzBuzz <br>`;
        else if(i % 3 == 0)
        document.getElementById("result").innerHTML += `${i} Fizz <br>`;
        else if(i % 5 == 0)
        document.getElementById("result").innerHTML += `${i} Buzz <br>`;
        // else document.getElementById("result").textHTML += `<br>`;        
    }    
}
