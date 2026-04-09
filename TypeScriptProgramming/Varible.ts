console.log("Varibles")
let studentName:string | number =123
const id=123
var x2="ravi"
studentName="sai"
console.log(typeof(x2))
console.log(typeof(x2),typeof(studentName),typeof(id))

//number
let ageValue:number=20
console.log(`Age: ${ageValue}`)

//String
let firstName:string="Ravi"
let lastName:string="Sai"
let fullName:string=firstName+" "+lastName
console.log(`Hello, ${fullName}`)

//Boolean
let isStudent:boolean=true
let isEmployed:boolean=false
console.log(`Is the person a student? ${isStudent}`)
console.log(`Is the person employed? ${isEmployed}`)

//Null and Undefined
let middleName:String |null=null
let age2:number | undefined = undefined
console.log(`middleName: ${middleName}`)
console.log(`age2: ${age2}`)

//any
let value:any="ravi"
value=10
value=true
console.log(`value:${typeof(value)}`)

//union type
let idValue:number | string=123
idValue="abc123"
console.log(`idValue: ${typeof(idValue)}`)

//void

function greetMe():void{
    console.log("Hello, welcome to TypeScript!")
}   

function sumOfTow(x:number,y:number):number{
    return x+y
}
console.log(`sum: ${sumOfTow(10.5,5)}`)