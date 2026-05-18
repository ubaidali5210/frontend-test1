const name = "ali"
const age = "19"

console.log(`my name is ${name} and my name is age is ${age}`)

const gameName = new String('syed-ubaid-ali')
console.log(gameName[3])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,-4)
console.log(anotherString);

const twoString = "   ali    "
console.log(twoString)
console.log(twoString.trim());

const url = "http//syed.com/syed ubaid ali"

console.log(url)
console.log(url.replaceAll(' ' ,'-'))
console.log(url.includes('hello'))
console.log(gameName.split('-'))
