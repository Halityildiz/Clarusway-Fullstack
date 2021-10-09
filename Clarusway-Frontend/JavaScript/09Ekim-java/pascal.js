function pascal(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  // second way
  function pascal(n) {
    return (n * (n + 1)) / 2;
  }
  
  // third way
  function pascal(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(i);
    }
    return arr.reduce((a, b) => a + b);
}
  
console.log(pascal(5));