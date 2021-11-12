const checkButton = document.querySelector(".check");
checkButton.addEventListener("click", message);

function message() {
  var firstNumber = parseInt(document.getElementById("firstvalue").value);
  var secondNumber = parseInt(document.getElementById("secondtvalue").value);
  var thirdNumber = parseInt(document.getElementById("thirdvalue").value);
  var text;
  var array = [firstNumber, secondNumber, thirdNumber];

  
  if (firstNumber <= 0 || secondNumber <= 0 || thirdNumber <= 0) {
      alert("Invalid value!")
      text = "A triangle must have 3 positive value!";
  }

  else if (
      (firstNumber + secondNumber <= thirdNumber) ||
      (firstNumber + thirdNumber <= secondNumber) ||
      (secondNumber + thirdNumber <= firstNumber)
  ) {
      text = " This is Not a Triangle";
  }

  else if (
      firstNumber === secondNumber &&
      secondNumber === thirdNumber &&
      thirdNumber === firstNumber
  ) {
      text = " The triangle form is EQUILATERAL.";
  }

  else if (
      firstNumber === secondNumber ||
      secondNumber === thirdNumber ||
      thirdNumber === firstNumber
  ) {
      text = " The triangle form is ISOSCELES.";
  }

  else if (
      firstNumber !== secondNumber &&
      firstNumber !== thirdNumber &&
      secondNumber !== thirdNumber
  ) {
      text = " The triangle formed is SCLANE";
  }

  else {
      text = " error";
  }
  document.getElementById("demo").innerHTML = `The values you entered: [${firstNumber}, ${secondNumber}, ${thirdNumber}]</br>${text}` 
}

