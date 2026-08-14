//  Date & Time*******************
//date miliseconds 

/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); /// Date object*/

//let myCreatedDate = new Date(2023,0,23) // month 0 start
let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
let myCreatedDate = new Date("01-14-2023") 


//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

/*console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.lo(Math.floor(Date.now()/1000));*/

let newDate = newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//${newDate.getDay()} And the time

newDate.toLocalString('default',{
    weekday: "long"
    
})







