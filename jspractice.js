// let num = 1634;
// let ognum = num;
// let arm=0;
// let rem;
// let length = Math.floor(Math.log10(Math.abs(num)))+1;
// let power;

// while(num!=0){
//     rem = parseInt(num % 10);
//     power = Math.pow(rem,length);
//     arm += power;
//     num = parseInt(num/10);
// }

// if(arm==ognum){
//     console.log(`${ognum} is armstrong`);
// }else{
//     console.log(`${ognum} is not armstrong`);
// }

// let naam = "Aarush";
// let ar_naam = Array.from(naam);
// console.log(naam);
// console.log(ar_naam);
// let p_name = ar_naam.toString();
// console.log(p_name);
// let randomstuff = "sdfsd";
// console.log("ba" + Number(randomstuff).toString().toLowerCase() + "as");

// let arr = [1,2,3,4,5];

// let task1 = arr.map((x)=>x*2);
// console.log(task1);

// let task2 = arr.filter((x)=>x%2==0);
// console.log(task2);

// let task3 = arr.reduce((acc,curr)=>acc*curr);
// console.log(task3);\

// let user = [
//     {
//         name:'Garviel Loken',
//         age:19
//     },
//     {
//         name:'Ezekyle Abaddon',
//         age:32
//     }
// ]

// let filtered = user.filter((user)=>user.age>20);
// console.log(filtered);

// let animals = ['dogs','cats','birds'];

// let count = animals.push('sheeps');
// console.log(count);
// console.log(animals);

// animals.push('lions','tigers','cows');
// console.log(animals);

// let nums = [1,2,3];
// let firstElement = nums.shift();
// console.log(firstElement);
// console.log(nums);
// let addedelement = nums.unshift(4);
// console.log(addedelement);
// console.log(nums);

// let bin = 0b101001;
// let oct = 0o1237;
// let hex = 0xABC2;
// console.log(bin);
// console.log(oct);
// console.log(hex);

// let num = "1234";
// console.log(typeof Number(num));
// console.log(Number("abc"));

// let name = "Kharn";
// console.log(Boolean(name));
// console.log(typeof Boolean(name));

// let user = {
//     fullname : 'kharn the betrayer',
//     age: 300,
//     address: 'Terra',
//     isBetrayer: true,
//     getUserName: function(){
//         console.log(this.fullname);
//     },
//     getAge: function(){
//         console.log(user.age);
//     }
// };

// user.getAge();
// user.fullname = "Sigismund";
// console.log(user.fullname); 
// console.log(user["fullname"]);
// user.getUserName();

// let my = {

// };
// function isEmpty(obj){
//     let check = Object.values(obj)
//     if(check.length == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isEmpty(my))

// let user = [
//     {
//         fullname: "kharn",
//         age: 500
//     },
//     {
//         fullname: "sigismund",
//         age: 400,
//         teran : {
//             fullname:  "garvi",
//             age: 300   
//         }
//     }

// ]
// let filtered = user.filter((user)=>user.age>=400);
// for(let i in user){
//     console.log(filtered[i].fullname);
// }
// import{add} from "./01.js";
// console.log(add());
function add(){
let value1 = Number(document.getElementById("val1").value);
let value2 = Number(document.getElementById("val2").value);
console.log(value1+value2);
}



