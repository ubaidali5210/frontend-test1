const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

const newBalance = (balance.toString());
console.log(typeof newBalance)
//toString is used to convert any datatype to data into string datatype

console.log(balance.toFixed(2));
// toFixed if used to control decimal value like i write 2 in toFixed it means i want 2 decimal value after no.

const otherNumber = 24.2345
console.log(otherNumber.toPrecision(4));
// toPrecision is used to formet a number to a specified length

const hundred = 100000
console.log(hundred.toLocaleString('en-IN'));
// toLocalString is used to format data like no.,dates and arrays

console.log(Math);
// Math is used to perform wide range of math operation 

console.log(Math.abs(-3))
//Math.abs is used to return absolute value 0f no. or convert negative into positive

console.log(Math.round(3.6))
// .round is used to roundof the value

console.log(Math.ceil(4.2))
//.ceil is used to round up the value

console.log(Math.floor(4.7))
//floor is used to round down the value

console.log(Math.min(4,3,6,8))
//.min is used to find minimum value

console.log(Math.max(4,3,6,8))
//.max is used to find maximum value

console.log(Math.random());
//random is used to ganarate random values from 0 to 1

console.log((Math.random()*10)-1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)