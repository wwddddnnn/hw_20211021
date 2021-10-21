/*alert("欢迎咨询今天中午吃啥_bot");
alert("bot需要通过你的回答提供建议");
console.log(confirm("开始"));
//console.log(prompt("请输入"));

let input = prompt("今天是星期几");

if(input==4||input==1){
    alert("别骗人!");
    let new_input = prompt("再给你次机会~今天是星期几");
    input=new_input;
}
alert("别耍赖, 我说啥你吃啥");

if(input==4){
    alert("gw饭堂");
}else if(input==5){
    alert("吃饺子");
}else{
    alert("pizza~");
}

//变量关键字: let (var) 不写:全局变量
//primitive type
let age = 17;
let name = "alex";
let isMan = true; //boolean



//console.log("你好 "+name+"你今年"+age+"了");

*/

let student = {name:'alex', age:18, gender:'Male'};//有属性
 //默认的variable都是undefined {}object或funtion   [] ()
//Object
console.log(typeof student);
console.log(student.name);//name是key
console.log(student['gender']);//[]一定要传字符串

//Array
//let studentsAge = [13,16,15,17,19];


let students= [1,5,8,45,'sos'];
students.push(6); //从后把property push进array
students = students.sort((a,b)=>a-b);
console.log(students);

students.pop(); //把最后一个元素返回出来并删掉

console.log(typeof students);
/*console.log(students.length);
//console.log(studentsAge[3]);
console.log(students[1]);
*/
//typeof ... array,funtion-->object


//Function
function sayHi(thisStudent,thatStudent){
    console.log('hi '+thisStudent.name+thatStudent.name);
}
sayHi(student,student);


// operators
// Arithmetic ++a, 先加再print; a++先print再加 
// Assignment
// Comparison == 同样的value, 会转type; === 严谨, 不转type
// Equality
// Logical && || !
// Terrary : if else

let result2 = 0;
let count=0;
while(count<100){
    count++;
    result2+=2;
}
console.log(result2);

//do while 先运行, 再判断是否运行第二次
//for loop
/* arr.forEach(function (o){
    o*=2;
}); */
//复制品, 不会动数组的元素

arr = arr.map((o)=>{
    o*=2;
    console.log(o);
});   
//动了
console.log(arr);
alert("123/n123")//换行
//prompt 弹框