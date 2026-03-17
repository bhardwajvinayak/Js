let score = undefined;

// console.log( typeof score) 
// console.log(typeof(score))

let valueInNumber = Number(score) // convert score to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN => Not a Number

/*
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN

Number() => converts to number
String() => converts to string
Boolean() => converts to boolean

*/

let isLoggedIn = "vinayak"
let booleanIsLoogedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoogedIn)

let someNumber = 3
let stringNumber = String(someNumber)
 console.log(stringNumber) // "3"
 console.log(typeof stringNumber) // string   