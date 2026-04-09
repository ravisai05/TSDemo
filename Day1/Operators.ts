let a:number=10 , b:number=20 

//Arthametic operators
console.log(`a+b=${a+b}`)
console.log(`a-b=${a-b}`)
console.log(`a*b=${a*b}`)
console.log(`a/b=${a/b}`)
console.log(`a%b=${a%b}`)

//Assignment operator
console.log(`a+=${a+=b}`)
console.log(`a-=${a-=b}`)
console.log(`a*=${a*=b}`)
console.log(`a/=${a/=b}`)
console.log(`a%=${a%=b}`)

//relational operator
console.log(`a==b:${a==b}`)
console.log(`a!=b:${a!=b}`) 
console.log(`a>b:${a>b}`)
console.log(`a<b:${a<b}`)
console.log(`a>=b:${a>=b}`)
console.log(`a<=b:${a<=b}`)
console.log(`a===b:${a===b}`)
console.log(`a!==b:${a!==b}`)

/*
== is equality operator that checks if the values of a and b are equal, regardless of their types. It performs type coercion if necessary.  
=== is the strict equality operator that checks if the values of a and b are equal and also checks if they are of the same type. It does not perform type coercion.

*/

//logical operator
let x1:boolean=true , y:boolean=false
console.log(`x1 && y:${x1 && y}`)
console.log(`x1 || y:${x1 || y}`)
console.log(`!x1:${!x1}`)
console.log(`!y:${!y}`) 

//ternary operator
let age1:number=18
let isAdult:string=age1>=18 ? "Yes" : "No"
console.log(`Is the person an adult? ${isAdult}`)

//increment and decrement operator
let count:number=0
console.log(`count: ${count}`)
console.log(`count++: ${count++}`)
console.log(`++count: ${++count}`)
console.log(`count--: ${count--}`)
console.log(`--count: ${--count}`)                                   

//urinary operator
let num:number=5
console.log(`num: ${num}`)
console.log(`-num: ${-num}`)

//binary operator
let num1:number=10 , num2:number=20
console.log(`num1 + num2: ${num1 + num2}`)
console.log(`num1 - num2: ${num1 - num2}`)
console.log(`num1 * num2: ${num1 * num2}`)
console.log(`num1 / num2: ${num1 / num2}`) 