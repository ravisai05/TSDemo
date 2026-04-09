//print 5 numbers using for loop
for(let i=1;i<=5;i++){
    console.log(i)
}

//print 5 numbers using while loop
let j=1
while(j<=5){
    console.log(j)
    j++
}

//print 5 numbers using do-while loop
let k=1
do{
    console.log(k)
    k++
}while(k<=5)     
    
//print even numbers from 1 to 10 using for loop
for(let i=2;i<=10;i+=2){   
    console.log(i)
}   

//break statement
for(let i=1;i<=10;i++){
    if(i===5){ 
        break
    }           
    console.log(i)

}

//continue statement
for(let i=1;i<=10;i++){
    if(i===5){ 
        continue
    }           
    console.log(i)
}
//switch statement
let day:number=3            
switch(day){
    case 1:
        console.log("Monday")                       
        break
    case 2:
        console.log("Tuesday")              
        break       
    case 3:
        console.log("Wednesday")
        break   
    case 4:                     
        console.log("Thursday")                     
        break
    case 5:
        console.log("Friday")               
        break   
    case 6:
        console.log("Saturday")               
        break                       
    case 7:
        console.log("Sunday")               
        break       

    default:
        console.log("Invalid day")               
        break
}   