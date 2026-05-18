const myArr = [1,2,3,4,5]
const myHeroes = ["iron man","ant man"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr)

myArr.unshift(0)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
//include is used to check if that value is exist in that array or not

console.log(myArr.indexOf(3))
//indexOf is used to check that this element is in which position

const newArr = myArr.join()
//Join is used to cobine all element of array into a single string
console.log(myArr)
console.log(newArr)

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
//slice is used to extrect portion from array and copy it into new array
//NOTE: i dont change the orginal array
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
//slice is used to extrect portion from array and put it into new array
//NOTE: i changes the orginal array
console.log("C",myArr);
console.log(myn2)