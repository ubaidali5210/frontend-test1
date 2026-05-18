const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ali"
tinderUser.isLoggedIn = false
//second method to assign value to the object
console.log(tinderUser)

const regulerUser = {
    email: "ubaid@gamil.com",
    fullName: {
        userFullName:{
            firstName: "ubaid",
            lastName: "ali"
        }
    }
}
console.log(regulerUser.fullName.userFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const obj4 ={obj1,obj2}//wrong way to do it
//const obj4 = Object.assign({},obj1,obj2,obj3)//this also a way to concat objects
const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id:1,
        email: "a@gmail.com"
    },
     {
        id:1,
        email: "b@gmail.com"
    },
     {
        id:1,
        email: "c@gmail.com"
    }
]
const user1 =users[1].email
console.log(user1)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//Object.keys to extrect all the key from objects and put it on array

console.log(Object.values(tinderUser))
//Object.values to extrect values from objects and put it on array

console.log(Object.entries(tinderUser));
//Object.entries is used to put every element in seperete array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
//hasOwnProperty is used to check if there is any key in the object
//give answer in boolian(true/false)

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "ali"
}
// course.courseInstructor
const {courseInstructor: instructor} =course

// console.log(courseInstructor)
console.log(instructor)