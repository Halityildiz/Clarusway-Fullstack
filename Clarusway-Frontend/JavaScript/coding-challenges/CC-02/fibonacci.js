
function fibonacci(myNum){
    let fibo = [0, 1]
    for(let i = 2; i <= myNum + 1; i++){
      fibo.push(fibo[i-1] + fibo[i-2])        
    }
    return fibo[fibo.length - 1]
  }
  
  let myNum = Number(prompt("Lütfen Kaçıncı Fibonacci Sayısını Görmek İstediğinizi Yazınız.:"));
  let fiboNum= fibonacci(myNum)
  console.log(`Görmek istediğiniz ${myNum}. fibonacci numarası = ${fiboNum}`);
  