//String is a primitive data type in TypeScript that represents a sequence of characters.
let str1: string = "Hello, World!";
let str2: string = 'TypeScript is great!';
let str3: string = `The length of str1 is ${str1.length}.`; 
console.log(str1); // Output: Hello, World!
console.log(str2); // Output: TypeScript is great!
console.log(str3); // Output: The length of str1 is 13.     
//String methods
let str4: string = "   TypeScript Programming   ";
console.log(str4.length);       
console.log(str4.trim());
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());    
console.log(str4.includes("Script"));
console.log(str4.startsWith("   Type"));
console.log(str4.endsWith("Programming   "));    
console.log(str4.split(" "));  
//charAt method is used to return the character at a specified index in a string. It does not modify the original string.   
console.log(str4.charAt(5)); // Output: S
console.log(str4.charAt(0)); // Output: (space) 
//indexOf method is used to return the index of the first occurrence of a specified value in a string. It returns -1 if the value is not found. It does not modify the original string.
console.log(str4.indexOf("Script")); // Output: 10
console.log(str4.indexOf("Java")); // Output: -1
//substring method is used to return a portion of a string between two specified indices. It does not modify the original string.
console.log(str4.substring(3, 13)); // Output: TypeScript
console.log(str4.substring(0, 5)); // Output: (space)Type           
//replace method is used to return a new string with some or all matches of a pattern replaced by a replacement. It does not modify the original string.    
console.log(str4.replace("Programming", "Language")); // Output: (space)TypeScript Language
console.log(str4); // Output: (space)TypeScript Programming
//split method is used to split a string into an array of substrings based on a specified separator. It does not modify the original string.
console.log(str4.split(" ")); // Output: [ '', '', '', 'TypeScript', 'Programming', '', '', '' ]    
//trimstart method is used to remove whitespace from the beginning of a string. It does not modify the original string.
console.log(str4.trimStart());
//trimend method is used to remove whitespace from the end of a string. It does not modify the original string.
console.log(str4.trimEnd());
//concat method is used to concatenate two or more strings and returns a new string. It does not modify the original strings.
let str5: string = "Hello, ";
let str6: string = "World!";
let str7: string = str5.concat(str6);
console.log(str7); // Output: Hello, World!     
