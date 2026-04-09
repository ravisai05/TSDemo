"use strict";
let nums = [1, 2, 3, 4, 5];
let fruit = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(nums);
console.log(fruit); // Output: 1
//length of an array
console.log(nums.length); // Output: 5
console.log(fruit.length);
//push method is used to add one or more elements to the end of an array and returns the new length of the array. It modifies the original array.
nums.push(6, 7, 8);
fruit.push("Fig", "Grace");
console.log(nums);
console.log(fruit);
//pop method is used to remove the last element from an arrayand returns that element. It modifies the original array.
let lastNum = nums.pop();
let lastFruit = fruit.pop();
console.log(lastNum);
console.log(lastFruit);
console.log(nums);
console.log(fruit);
//shift method is used to remove the first element from an array and returns that element. It modifies the original array.
let firstNum = nums.shift();
let firstFruit = fruit.shift();
console.log(firstNum);
console.log(firstFruit);
console.log(nums);
console.log(fruit);
//unshift method is used to add one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.
nums.unshift(0);
fruit.unshift("Apricot");
console.log(nums);
console.log(fruit);
//concat method is used to merge two or more arrays and returns a new array. It does not modify the original arrays.
let allNums = nums.concat([9, 10]);
let allFruits = fruit.concat(["Honeydew", "Iceberg"]);
console.log(allNums);
console.log(allFruits);
//slice method is used to return a shallow copy of a portion of an array into a new array object. It does not modify the original array.
let slicedNums = nums.slice(1, 4);
let slicedFruits = fruit.slice(1, 4);
console.log(slicedNums);
console.log(slicedFruits);
//splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
console.log(nums);
nums.splice(2, 1, 22, 23);
fruit.splice(2, 2, "Cantaloupe", "Dragonfruit");
console.log(nums);
console.log(fruit);
