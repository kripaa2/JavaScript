const students = [
  { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
  { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
  { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
  { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
  { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
  { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
  { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
  { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
  { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
  { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];
const names = students.map(function(student) {
  return student.name;
});
console.log(names);
const nameandcourse= students.map(function(student){
  return { name:student.name,course:student.course}
});
console.log(nameandcourse);

const ststatus= students.map(function(student){
  student.status= student.marks>=60 ? "pass": "fail"
  return student;
})
console.log(ststatus);

const string= students.map(function(student){
  return student.name + "-"+ student.course;
});
console.log(string);

const incrMark =students.map(function(student){
  student.marks=student.marks+5
  return student;
})
console.log(incrMark);

const cs = students.filter(student=>student.course==="Computer Science");
console.log(cs);

const above80 = students.filter(student=>student.marks>80);
console.log(above80);

const nofee = students.filter(student=>student.feesPaid===false);
console.log(nofee);

const ageandmark = students.filter(student=>student.age>20 && student.marks>70);
console.log(ageandmark);

const mechandbelow85 = students.filter(student=> student.marks<85 && student.course==="Mechanical");
console.log(mechandbelow85);

const totalmarks =students.reduce((e,student)=>e+ student.marks,0);
console.log(totalmarks);

const avgmarks =students.reduce((total,student)=>total+ student.marks,0)/students.length;
console.log(avgmarks);

const feespaid =students.reduce((count,student)=>count+ (student.feesPaid ?true:false),0);
console.log(feespaid);

const maxmarks =students.reduce((max,student)=>student.marks>max ? student.marks:max ,0);
console.log(maxmarks);

const groupbycourse = students.reduce(function(group,student){
  if(!group[student.course]){
    group[student.course]=[];

  }
  group[student.course].push(student);
  return group;

},{});
console.log(groupbycourse);


