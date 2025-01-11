let myname = "aarush";
let age = 18;
console.log(myname);
console.log(age);
const pi = 3.14; // you cannot change this variable's value
//pi = 2;//gives error 
console.log(pi);

let a=10;
let b = 3.14159;
console.log(b.toFixed(2));
console.log(b.toPrecision(2));

let naam = "Aarush";
let ar_naam = Array.from(naam);
console.log(naam);
console.log(ar_naam);
let p_name = ar_naam.toString();
console.log(p_name);
let randomstuff = "sdfsd";
console.log("ba" + Number(randomstuff).toString().toLowerCase() + "as");

let price  = 1000000;
console.log(price.toLocaleString("en-IN"));

let price2 = "100000";
console.log(Number(price2).toLocaleString("en"));

console.log(Math.ceil(3.14));
console.log(Math.floor(3.14));

console.log(`this is a num ${price} and ${price = 2}`);

let today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleDateString());
