"use strict";
//Function          : Functions are reusable blocks of code that perform a specific task. They can take parameters, perform operations, and return values. Functions help in organizing code, improving readability, and promoting code reusability.            
//Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
//Invoking the function     
console.log(greet("Ravi"));
//Named function expression no parameter no return type     
function display() {
    console.log("This is a named function expression");
}
display(); //calling the function
//Named function expression with parameters and return type
function add(a, b) {
    return a + b;
}
console.log(`Sum: ${add(10, 5)}`);
//Named function with rest parameters
function sum(...numbers) {
    let i = 0, sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(`Sum: ${sum(1, 2, 3, 4, 5)}`);
//Named funtion with rest parameters with multiple types
function displayInfo(name, ...info) {
    console.log(`Name: ${name}`);
    console.log("Info:");
    for (let item of info) {
        console.log(item);
    }
}
displayInfo("Ravi", "Age: 25", "City: Hyderabad", 12345);
//Named function with options parameters
function greetUser(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
console.log(greetUser("Ravi"));
console.log(greetUser("Ravi", "Hi"));
//Function with default parameters
function greetPerson(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greetPerson("Ravi"));
console.log(greetPerson("Ravi", "Hi"));
//Anonymous function expression is a function without a name. It is often used as an argument to higher-order functions or assigned to variables. Anonymous functions can be defined using the function keyword or as arrow functions. They are useful for creating inline functions that are not intended to be reused elsewhere in the code.
//Anonymous function expression with parameters and return type
const multiply = function (x, y) {
    return x * y;
};
console.log(`Product: ${multiply(10, 5)}`);
//Anonymous function expression with rest parameters
const calculateSum = function (...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};
console.log(`Sum: ${calculateSum(1, 2, 3, 4, 5)}`);
//Anonymous function expression with options parameters
const greetUser1 = function (name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
};
console.log(greetUser1("Ravi"));
console.log(greetUser1("Ravi", "Hi"));
//Arrow function expression is a concise syntax for writing functions in TypeScript. It uses the => syntax and does not have its own this context. Arrow functions are often used for short, single-line functions or as callbacks in higher-order functions. They can also be used to create anonymous functions. Arrow functions provide a more concise and readable way to write functions, especially when dealing with simple operations or when using them as callbacks.
//Arrow function expression with parameters and return type
const divide = (x, y) => x / y;
console.log(`Quotient: ${divide(10, 5)}`);
//Arrow function expression with rest parameters
const calculateProduct = (...numbers) => {
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
};
console.log(`Product: ${calculateProduct(1, 2, 3, 4, 5)}`);
//Arrow function expression with options parameters
const greetUser2 = (name, greeting = "Hello") => `${greeting}, ${name}!`;
console.log(greetUser2("Ravi"));
console.log(greetUser2("Ravi", "Hi"));
//Function Implict retuern type
const square = (x) => x * x;
console.log(`Square: ${square(5)}`);
/*
### Easy Explanation of Functions.ts

Your Functions.ts file shows different ways to create and use functions in TypeScript. Functions are like recipes: they take ingredients (parameters), do something, and sometimes give back a result (return value). I'll explain each part simply, like teaching a beginner.

#### 1. **What is a Function?**
   - A function is a reusable block of code that does a task. It's like a machine: you put in inputs, it processes, and outputs something.
   - In TypeScript, we add types (e.g., `string`, `number`) to make it safer.

#### 2. **Function Declaration (Basic Named Function)**
   - **Code**: `function greet(name:string):string { return \`Hello, ${name}!\` }`
   - **Easy Explanation**: This is a named function called `greet`. It takes a name (string) and returns a greeting (string). Like saying "Hello, Ravi!" when you call it with `greet("Ravi")`.
   - **Why?**: Good for reusable code. Output: "Hello, Ravi!"

#### 3. **Named Function with No Parameters/No Return (Void)**
   - **Code**: `function display():void { console.log("This is a named function expression") }`
   - **Easy Explanation**: `display` just prints a message and doesn't return anything (void means "empty"). Call it like `display()` – it's like a button that shows text.
   - **Why?**: For actions without results.

#### 4. **Named Function with Parameters and Return**
   - **Code**: `function add(a:number, b:number):number { return a+b }`
   - **Easy Explanation**: `add` takes two numbers and gives back their sum. Like a calculator: `add(10,5)` returns 15.
   - **Why?**: For math or combining values.

#### 5. **Named Function with Rest Parameters (Variable Arguments)**
   - **Code**: `function sum(...numbers:number[]):number { ... return sum }`
   - **Easy Explanation**: `sum` can take any number of numbers (e.g., 1,2,3,4,5) and adds them up. The `...numbers` is like a bag that holds extras.
   - **Why?**: When you don't know how many inputs you'll have.

#### 6. **Named Function with Rest and Mixed Types**
   - **Code**: `function displayInfo(name:string, ...info:(string|number)[]):void { ... }`
   - **Easy Explanation**: `displayInfo` takes a name and any mix of strings/numbers, then prints them. Like a profile: name + extra details.
   - **Why?**: Flexible for varied data.

#### 7. **Named Function with Optional Parameters**
   - **Code**: `function greetUser(name:string, greeting?:string):string { ... }`
   - **Easy Explanation**: `greetUser` needs a name, but greeting is optional (`?`). If no greeting, it uses "Hello". Like customizable greetings.
   - **Why?**: For optional extras.

#### 8. **Named Function with Default Parameters**
   - **Code**: `function greetPerson(name:string, greeting:string="Hello"):string { ... }`
   - **Easy Explanation**: Same as optional, but "Hello" is the default if not provided. No need for `if` checks.
   - **Why?**: Simpler than optional parameters.

#### 9. **Anonymous Function Expression (Unnamed Function)**
   - **Code**: `const multiply = function(x:number, y:number):number { return x*y }`
   - **Easy Explanation**: An unnamed function stored in `multiply`. It's like a secret tool: you call `multiply(10,5)` for 50.
   - **Why?**: For one-time use or assigning to variables.

#### 10. **Anonymous with Rest/Optional (Similar to Above)**
    - **Easy Explanation**: Same ideas, but unnamed. Rest for multiple numbers, optional for flexible greetings.

#### 11. **Arrow Functions (Short Syntax)**
    - **Code**: `const divide = (x:number, y:number):number => x/y`
    - **Easy Explanation**: Arrow (`=>`) makes functions shorter. `divide(10,5)` gives 2. No `return` needed for one-liners.
    - **Why?**: Concise for simple tasks, like math.

#### 12. **Arrow with Rest and Implicit Return**
    - **Easy Explanation**: Arrow for products or squares. Implicit return means no `return` keyword for simple expressions.

**Key Tips**:
- **Call Functions**: Use `functionName(args)` to run them.
- **Types**: `:string` means it returns a string; `void` means nothing.
- **Run It**: Compile with `tsc Functions.ts`, then `node Functions.js` to see outputs.
- **Common Mistake**: Forget types or parameters – TypeScript will error.

This covers basics to advanced. If a part is confusing, point it out for more details! Your code is well-structured.
*/ 
