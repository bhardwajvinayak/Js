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
//  console.log(stringNumber) // "3"
//  console.log(typeof stringNumber) // string   


 //--------------------------Operations------------------

 let value = 4;
 let negValue = -value;
    // console.log(negValue) // -4

    // console.log(2 + 2); // 4
    // console.log(2 - 2); // 0
    // console.log(2 * 2); // 4
    // console.log(2 / 2); // 1
    // console.log(2 % 2); // 0
    // console.log(2 ** 3); // 8   (2*2*2) or 2^3

    let str1 = "hello"
    let str2 = " vinayak"
    let str3 =  str1 + str2
    
    // console.log( str3)
    


    // console.log(1 + "2");  //  12
    // console.log("1" + 2);   // 12
    // console.log("1" + 2 + 3); // 123
    // console.log(1 + 2 + "3"); // "(1 +2)" + "3"


    console.log(+true) // 1
    console.log(+false) // 0
    console.log(+"") // 0
    console.log(+"vinayak") // NaN

    