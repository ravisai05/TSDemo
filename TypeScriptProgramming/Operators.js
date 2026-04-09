"use strict";
let a = 10, b = 20;
//Arthametic operators
console.log(`a+b=${a + b}`);
console.log(`a-b=${a - b}`);
console.log(`a*b=${a * b}`);
console.log(`a/b=${a / b}`);
console.log(`a%b=${a % b}`);
//Assignment operator
console.log(`a+=${a += b}`);
console.log(`a-=${a -= b}`);
console.log(`a*=${a *= b}`);
console.log(`a/=${a /= b}`);
console.log(`a%=${a %= b}`);
//relational operator
console.log(`a==b:${a == b}`);
console.log(`a!=b:${a != b}`);
console.log(`a>b:${a > b}`);
console.log(`a<b:${a < b}`);
console.log(`a>=b:${a >= b}`);
console.log(`a<=b:${a <= b}`);
console.log(`a===b:${a === b}`);
console.log(`a!==b:${a !== b}`);
/*
== is equality operator that checks if the values of a and b are equal, regardless of their types. It performs type coercion if necessary.
=== is the strict equality operator that checks if the values of a and b are equal and also checks if they are of the same type. It does not perform type coercion.

*/
//logical operator
let x = true, y = false;
console.log(`x && y:${x && y}`);
console.log(`x || y:${x || y}`);
console.log(`!x:${!x}`);
console.log(`!y:${!y}`);
//ternary operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(`Is the person an adult? ${isAdult}`);
//increment and decrement operator
let count = 0;
console.log(`count: ${count}`);
console.log(`count++: ${count++}`);
console.log(`++count: ${++count}`);
console.log(`count--: ${count--}`);
console.log(`--count: ${--count}`);
//urinary operator
let num = 5;
console.log(`num: ${num}`);
console.log(`-num: ${-num}`);
