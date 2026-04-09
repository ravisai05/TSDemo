//Array is a data structure that can hold multiple values of the same type. In TypeScript, you can define an array using the following syntax:
let arrayName: number[] = [123, 456, 789];
let empName:string[] = ["John", "Jane", "Doe"];

//You can also use the Array generic type to define an array:
let arrayName2: Array<number> = [123, 456, 789];
let empName2: Array<string|number> = ["John", "Jane", "Doe"];

let mixedArray: (string | number)[] = ["Hello", 42, "World", 3.14];

//You can access elements in an array using their index:
console.log(arrayName[0]); // Output: 123
console.log(empName[1]); // Output: Jane
console.log(mixedArray[2]); // Output: World

for(let i=0; i<empName.length; i++){
    console.log(empName[i]);
}   
// for of is used to iterate over the values of an array, while for in is used to iterate over the keys (indices) of an array.
for(let name of empName){
    console.log(name);
}
//for in loop iterates over the indices of the array, so it will give you the index of each element in the array. You can then use this index to access the corresponding value in the array.
for(let index in empName){
    console.log(empName[index]);
}   
//search element in ana array
let emp1:string[]=["ravi","sai","kumar"];
let searchElement2="sai"


function searchElement(emp:string[],searchElement:string):boolean{
        for(let name of emp){
            if(name===searchElement){
                return true; // Element found in the array
            }
        }
        return false; // Element not found in the array                 
}
console.log(searchElement(emp1,searchElement2)); 
// Output: true

function captializeArray(arr:string[]):string[]{
    let res:string[]=[];
    for(let i in arr){
        res[i]=arr[i].toUpperCase();
    }
    return res
}
console.log(captializeArray(emp1));

//tuple is a special type of array that can hold a fixed number of elements of different types. In TypeScript, you can define a tuple using the following syntax:
let usr:[string,number,string,boolean]=["Ravi",111,"Sai",true]
for(let i=0;i<usr.length;i++){
    console.log(usr[i]);
}
//inside array with tuple
let students:[string,number][]=[   
    ["Ravi", 111],
    ["Sai", 222],
    ["Kumar", 333]
]   
for(let student of students){
    console.log(`Name: ${student[0]}, ID: ${student[1]}`);
}       
