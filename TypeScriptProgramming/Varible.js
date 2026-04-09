"use strict";
console.log("Varibles");
let studentName = 123;
const id = 123;
var x2 = "ravi";
studentName = "sai";
console.log(typeof (x2));
console.log(typeof (x2), typeof (studentName), typeof (id));
//number
let ageValue = 20;
console.log(`Age: ${ageValue}`);
//String
let firstName = "Ravi";
let lastName = "Sai";
let fullName = firstName + " " + lastName;
console.log(`Hello, ${fullName}`);
//Boolean
let isStudent = true;
let isEmployed = false;
console.log(`Is the person a student? ${isStudent}`);
console.log(`Is the person employed? ${isEmployed}`);
//Null and Undefined
let middleName = null;
let age2 = undefined;
console.log(`middleName: ${middleName}`);
console.log(`age2: ${age2}`);
//any
let value = "ravi";
value = 10;
value = true;
console.log(`value:${typeof (value)}`);
//union type
let idValue = 123;
idValue = "abc123";
console.log(`idValue: ${typeof (idValue)}`);
//void
function greetMe() {
    console.log("Hello, welcome to TypeScript!");
}
function sumOfTow(x, y) {
    return x + y;
}
console.log(`sum: ${sumOfTow(10.5, 5)}`);
