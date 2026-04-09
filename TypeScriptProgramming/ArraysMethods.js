"use strict";
//list of methods in arrays
let fruits = ["Apple", "Banana", "Cherry"];
// get index of all element along with index    
fruits.forEach(function (element, index) {
    console.log(`Index: ${index}, Element: ${element}`);
});
fruits.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});
//map method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.
let upperCaseFruits = fruits.map(function (element) {
    return element.toUpperCase();
});
console.log(upperCaseFruits);
let lowerCaseFruits = fruits.map((element) => {
    return element.toLowerCase();
});
console.log(lowerCaseFruits);
let num = [1, 2, 3, 4, 5];
let squares = num.map((element) => {
    return element * element;
});
console.log(squares);
//filter method is used to create a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
let evenNumbers = squares.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNumbers);
let odd = squares.filter((element) => {
    return element % 2 !== 0;
});
console.log(odd);
num.forEach(function (element) {
    console.log(element);
});
//reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It does not modify the original array.
let sum = num.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
let mul = num.reduce(function (multiplier, element) {
    return multiplier * element;
}, 1);
console.log(mul);
//some method is used to check if at least one element in the array passes the test implemented by the provided function. It returns a boolean value and does not modify the original array.
let hasEvenNumber = num.some((element) => {
    return element % 2 === 0;
});
console.log(hasEvenNumber);
let hasOdd = num.some(function (element) {
    return element % 2 != 0;
});
console.log(hasOdd);
//all method is used to check if all elements in the array pass the test implemented by the provided function. It returns a boolean value and does not modify the original array.
let positiveNumbers = num.every((element) => {
    return element > 0;
});
console.log(positiveNumbers);
