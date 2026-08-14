//imp object or event
//singleton:one object(constructor se banta hai(jab bhi hum literal ki taraha declare krte hai toh single tern nhi banta )
//object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Prapti",
    "full name":"Prapti bhalerao",
    [mySym]:"myKey1",
    age:21,
    location:"nanded",
    email:"prapti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
// object access .notation
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym1])

//object value change

JsUser.email = "prapti@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "prapti@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(JsUser)
}

JsUser.greetingTwo = function(){
    console.log('hello JS user, ${this.name}');

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

