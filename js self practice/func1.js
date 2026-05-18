function myName(){
    console.log("u");
    console.log("b");
    console.log("a");
    console.log("i");
    console.log("d");
}
myName()

function addTwo(num1,num2){
    console.log(num1 +num2)
}
addTwo(1,3)

function addtwoNum(num1, num2){
    // let result  = num1 +num2
    // return result
    return num1 + num2
}
const result = addtwoNum(4,7)
console.log(result)

function login(username = "unknown")//unknown defualt value
{
    return `${username} u logged in`
}
console.log(login("ali"))
console.log(login())

function calculate(val1,val2,...num1){
    console.log(val1,val2,num1)
}
calculate(1,2,3,4,5,6)

const user={
    userName:"ali",
    price: 3000
}
function handleObj(anyObj){
    console.log(`username is ${anyObj.userName} and prize is ${anyObj.price}`)
}
// handleObj(user)
handleObj({
    userName: "ali",
    price: 200
})
// u can directly put oc=bjest while calling tym
// thats how we put obj in any function

const myArr =[200,400,100,600]

function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(myArr))
console.log(returnSecond([200,400,1000,500]))