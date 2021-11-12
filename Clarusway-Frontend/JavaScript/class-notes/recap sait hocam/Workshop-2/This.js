// this is the **object** that the `function is a property of`
// - two main benefits:
//   - 1: gives methods access to their object
//   - 2: execute same code for multiple objects

const person = {
  name: 'salih',
  age: 7,
  gender: 'male',
  printPerson() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};
const person2 = {
  name: 'ayse',
  age: 9,
  gender: 'female',
  printPerson() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};

person.printPerson();

function printName() {
  console.log(`${this.name}`);
}
let name = 'nilufer';

printName.call(person);
printName.call(person2);
