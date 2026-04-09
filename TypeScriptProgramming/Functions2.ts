//Call back function
function greet(name: string, callback: (message: string) => void): void {       
    const message = `Hello, ${name}!`;
    callback(message);
}
greet("Alice", (message) => {
    console.log(message);
});

function fullName(firstName: string, lastName: string, callback: (fullname:String)=>void):void{
    const fullname=`${firstName} ${lastName}`;
    callback(fullname);

} 
fullName("Ravi","sai", (fullname)=>{
    console.log(fullname);
}); 
