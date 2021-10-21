let student = {name:'alex', age:18, gander:'Male'};

//Object
//student.name = 'alex';
console.log(typeof student);
console.log(student.name);
console.log(student['name']);
let userPick = 'age';
console.log(student[userPick]);

//Array
let studentsAge = [13, 16, 15, 17, 19];

console.log(typeof studentsAge);
console.log(studentsAge.length);
console.log(studentsAge[3]);    //Array从0开始数
studentsAge.push(89);
studentsAge.pop();

//Function
function sayHi(){
    console.log('Hi');
}
sayHi();

function square(num){
    return num * num;
}
let result = square(5); //25

function saySomething(word){
    console.log(word);
    console.log(word);
    console.log(word);
}

student.say = saySomething; //say这个函数定义为saySomething
student.say('Hello!');

saySomething(Math.PI);

//Math
console.log(Math.abs(-12));