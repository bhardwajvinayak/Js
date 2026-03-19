
const num =10
console.log(num) // 10

// Math Object
let Num = new Number(20) // creating a number object using the Number constructor
console.log(Num) // [Number: 20]
console.log(Num.valueOf()) // 20 (returns the primitive value of the Number object)

console.log(Num.toString()) // "20" (returns the string representation 
// of the Number object in base 10)
console.log(Num.toString().length) 
// 2 (length of the string representation of the number)

console.log(Num.toExponential()) 
// "2e+1" (returns a string representing the number in exponential notation)

console.log(Num.toFixed(2))
 // "20.00" (returns a string representing the number with 2 decimal places)

 console.log(Num.toPrecision(3)) 
 // "20.0" (returns a string representing the number with 3 significant digits)

 let n1 = 10000000000
   console.log(n1.toLocaleString())
// 10,000,000,000 (returns a string with a language-sensitive representation of the number)
  console.log(n1.toLocaleString('en-IN'))
// 10,000,000,000 (returns a string with a language-sensitive representation of the number in the Indian locale)



// ================ Maths ====================

console.log(Math) 
// [Math: Math] (the Math object provides properties and methods for mathematical constants and functions)

console.log(Math.PI)  
// 3.141592653589793 (the value of π)

console.log(Math.E) 
// 2.718281828459045 (the value of e)

console.log(Math.sqrt(16)) 
// 4 (returns the square root of 16)

console.log(Math.pow(2, 3)) 
// 8 (returns 2 raised to the power OF 3)

console.log(Math.abs(-5)) 
// 5 (returns the absolute value of -5)

console.log(Math.round(4.7)) 
// 5 (rounds 4.7 to the nearest integer)

console.log(Math.floor(4.7)) 
// 4 (rounds 4.7 down to the nearest integer)

console.log(Math.ceil(4.2)) 
// 5 (rounds 4.2 up to the nearest integer)



/// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random());
console.log(Math.random()*10);
// returns a random number between 0 (inclusive) and 10 (exclusive)

console.log(((Math.random()*10) + 1));

// returns a random number between 1 (inclusive) and 11 (exclusive)

//++++++++++++++++++++++++++++++++++++++++++++++
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// returns a random number between 10 (inclusive) and 20 (inclusive)