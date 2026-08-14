//const tinderUser = new  Object() // single tern obj
const tinderUser = {}  // non single tern obj
tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        usesrfullname:{
            firstname: "prapti",
            lastname: 'bhalerao'
        }
    }
}
//console.log(regularUser.fullname.Userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}


//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4) // object assign static method  copies enumerable ,one or more target obj

const obj3 ={...obj1, ...obj2} /// best hai
console.log(obj3);

//database value
const user = [
    {

    },
    {
        
    },
    {

    }
]
   users[1].email
   /*console.log(tinderUser);

   console.log(Object.keys(tinderUser));
   console.log(Object.values(tinderUser));
   console.log(Object.entries(tinderUser));

   console.log(tinderUser.hasOwnProperty('isloggedIn'));*/


 ///****************** Json // object destructure & json API intro */

 const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "prapti"

 }
 //course.courseInstructor

 const {courseInstructor} = course
 console.log(courseInstructor);
