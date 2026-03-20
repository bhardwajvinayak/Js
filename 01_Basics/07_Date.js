// Date

let myDate = new Date();
//let myDate = new Date("2024-06-12");
//let myDate = new Date("12-06-1999");

// console.log(myDate) 
// // Output: current date and time

// console.log(myDate.toString())
// //
// // Output: current date and time in string format

// console.log (myDate.toDateString())
// // Output: current date in string format

// console.log(myDate.toTimeString())
// // Output: current time in string format

// console.log(myDate.getFullYear())
// // Output: current year

// console.log(myDate.getMonth())
// // Output: current month (0-11, where 0 is January and 11 is December)

// console.log(myDate.getDate())
// // Output: current day of the month (1-31)

//   ========================Timestamp======================
let timestamp =  Date.now();
console.log(timestamp)
// Output: current timestamp in milliseconds since January 1, 1970

let myCreatedDate = new Date("12-06-2020")
// muje current date and time ka timestamp chahiye

//console.log(myCreatedDate.getTime())  
 // Output: timestamp of the specified date in milliseconds since 12-06-2020

 // how to convert  milisecond into second
let seconds = timestamp / 1000;
console.log(Math.floor(seconds))
// 



// date feauture part

let newDate = new Date("2024-06-12");

newDate.toLocaleString('default', { weekday: 'long' })
// Output: "Wednesday" (returns the full name of the weekday)