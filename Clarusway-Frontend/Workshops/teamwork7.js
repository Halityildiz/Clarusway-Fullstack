const arr1 = ["a", "b", "c"];
const arr2 = ["b", "c", "a"];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);

// There are a couple concepts at play here. First, the array sort method sorts your original array and also returns a reference to that array. This means that when you write arr2.sort(), the arr2 array object is sorted.

// It turns out, however, the sort order of the array doesn’t matter when you’re comparing objects. Since arr1.sort() and arr1 point to the same object in memory, the first equality test returns true. This holds true for the second comparison as well: arr2.sort() and arr2 point to the same object in memory.

// In the third test, the sort order of arr1.sort() and arr2.sort() are the same; however, they still point to different objects in memory. Therefore, the third test evaluates to false.

const notifications = 1;
console.log(
  `You have ${notifications} notification${notifications !== 1 || "s"}`
);

// Unfortunately, our short-circuit evaluation will not work as intended here: notifications !== 1 && 's' evaluates to false, meaning we will actually be logging You have 1 notificationfalse. If we want our snippet to work correctly, we could consider the conditional operator: ${notifications === 1 ? '' : 's'}.

const arr = [...new Set([3, 1, 2, 3, 4])];
console.log(arr.length, arr[2]);

// The Set object will force unique elements (duplicate elements already in the set are ignored), but will not change order. The resultant arr array will be [3, 1, 2, 4], meaning arr.length is 4 and arr[2] (the third element of the array) is 2.

let text = "       Hello World!        ";
text.trim();
console.log(text);
console.log(text.trim());

// function Dog(name) {
//   this.name = name;
//   this.speak = function () {
//     return "woof";
//   };
// }

// const dog = new Dog("Pogo");

// Dog.prototype.speak = function () {
//   return "arf";
// };

// console.log(dog.speak());

// Every time we create a new Dog instance, we set the speak property of that instance to be a function returning the string woof. Since this is being set every time we create a new Dog instance, the interpreter never has to look farther up the prototype chain to find a speak property. As a result, the speak method on Dog.prototype.speak never gets used.

const arr4 = [(x) => x * 1, (x) => x * 2, (x) => x * 3, (x) => x * 4];

console.log(arr4.reduce((agg, el) => agg + el(agg), 1));

// With Array#reduce, the initial value of the aggregator (here, named agg) is given in the second argument. In this case, that’s 1. We can then iterate over our functions as follows:

// 1 + 1 * 1 = 2 (value of aggregator in next iteration)
// 2 + 2 * 2 = 6 (value of aggregator in next iteration)
// 6 + 6 * 3 = 24 (value of aggregator in next iteration)
// 24 + 24 * 4 = 120 (final value)

// So, 120 it is!

// console.log("I");
// setTimeout(() => {
//   console.log("love");
// }, 0);
// console.log("Javascript!");

// var obj;
// console.log(obj);

// function logThis() {
//   console.log(this);
// }
// logThis();

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

const x = 6 % 2;
const y = x ? "one" : "two";
console.log(y);
