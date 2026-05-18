const mySym = Symbol("Key1")
//Symbol is used to create unique and immutable identities

const jsUser={
    name: "ali",
    "full name": "Syed ubaid",
    [mySym]: "mykey1",
    age: 19,
    location: "jaipur",
    email:"ubaid@google.com",
    isLoggedIn: false,
    lastLoginDays:["mon","tue"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
//[""] this we use when there is string value in key also like use can see it in line number 6
console.log(jsUser[mySym])
//[] is used when u insert any sybol in any obj like in line number 7th

jsUser.email = "ubaid@gpt.com"
console.log(jsUser.email)
//it mean u can manupilate the data in object
// Object.freeze(jsUser)
//freeze is u used to stop to manupilate the data

jsUser.greeting = function(){
    console.log("hello JS user");
}
//u can insert also function in object

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//this keyword is used to target the same function u r in
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())


