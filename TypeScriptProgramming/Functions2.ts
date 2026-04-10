//Call back function
function greet(name: string, callback: (message: string) => void): void {       
    const message = `Hello, ${name}!`;
    callback(message);
}
greet("Alice", (message) => {
    console.log(message);
});

function fullName(firstName: string, lastName: string, callback: (fullnames:String)=>void):void{
    const fullnames=`${firstName} ${lastName}`;
    callback(fullnames);

} 
fullName("Ravi","sai", (fullnames)=>{
    console.log(fullnames);
}); 
