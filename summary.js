//datatype 
//data ko access or memory - 1)primitive & non primitive
//primitive- call by value 
//primitive 7types : string,Number,Boolean, null, undefined,symbol, BigInt 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null ///null -object,object-function,
let userEmail;

const id = Symbol ('123')
console.log(id === anotherId);

//const bigNumber = 3452727321673733313127n


//non-primitive (reference type):call by reference
//Array.objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "Prapti",
    age:21,
}

const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof bigNumber)

///********************************* *

// stack (primitive)-copy(previous value copy hogi), Heap (Non-primitive)-reference (orginal value changes)

let myYoutubename = "praptibhalerao"
let anothername = myYoutubename
   anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}
let userTwo = userOne
 userTwo .email = "bhalerao@gmail.com"
 
 
console.log(userOne.email);
console.log(userTwo.email);

