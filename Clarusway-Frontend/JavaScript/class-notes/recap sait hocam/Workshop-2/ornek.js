const people = ['greg,male,36', 'susan,female,18', 'john,male,25', 'anna,female,25', 'ayşe,female,42', 'emine,female,62'];

let female = [];
let age = [];
people.forEach(person => {
  if (person.includes('female')) {
    female.push([person.split(',')[0], person.split(',')[2]]);
    age.push(Number(person.split(',')[2]));
  }
});

let maxAge = Math.max(...age);

female.forEach(female => {
  if (female[1] == maxAge) {
    console.log(`The oldest female is ${female[0]}`);
  }
});

// Arrayde sirasi ile kisi bilgileri veriliyor. Bu bilgilere gore yasi en buyuk olan bayanin adi nedir?
// kisi bilgileri -- name, gender, age olarak veriliyor
const people = ['greg,male,36', 'susan,female,18', 'john,male,25', 'anna,female,25', 'ayşe,female,42', 'emine,female,62'];
