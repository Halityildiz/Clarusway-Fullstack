// class Student1{
//     constructorStudent(imageUrl, studentName, studentPath){
//         console.log(this);
//     }
// }
function Student(imageUrl, studentName, studentPath) {
  // console.log(this);
  // console.log(self);
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
  // console.log(this);
}

const std = new Student("url", "Ryan", "Fullstack");
const std2 = new Student("url", "Daniel", "AWS");

// console.log(std);
// console.log(std2);
