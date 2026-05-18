const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2])

const allHeros = marvel.concat(dc)
//concat is used to oin two or more arrays together
console.log(allHeros)

const heroSpread = [...marvel,...dc]
//spread is used to unpack or expand the element of an array
console.log(heroSpread)

const array2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flatArray = array2.flat(Infinity)
//flat is used to remove all nested array
//NOTE: infinity is used to remove every nested i array
console.log(flatArray);

console.log(Array.isArray("syed"))
//isArray is used to determine if value is array or not

console.log(Array.from("ubaid"))
//From is used to create a shellow copy of the value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//Of is used to create new array from variable no.