let myDate = new Date()

console.log(myDate.toString());
//toString is used to convert date in string form to make it more readable 

console.log(myDate.toDateString());
//toDateString is used to make it more readable

console.log(myDate.toLocaleString());
//toLocalString is include data+time in it
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-01-03")
let myCreatedDate = new Date("01-14-2025")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

const date = newDate.toLocaleString('default',{weekday:"long"})
console.log(date)