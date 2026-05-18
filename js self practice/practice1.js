// let a = [3,0,1]

// let arr =a.length
// console.log(arr)

let str = "i love programming"
let split = str.split(" ");
let result = "";

for(let i =split.length-1;i>=0;i--){
    result +=split[i];
    if (i !==0)result +=" ";
}
console.log(result)