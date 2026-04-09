"use strict";
//Call back function
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}
greet("Alice", (message) => {
    console.log(message);
});
function fullName(firstName, lastName, callback) {
    const fullname = `${firstName} ${lastName}`;
    callback(fullname);
}
fullName("Ravi", "sai", (fullname) => {
    console.log(fullname);
});
