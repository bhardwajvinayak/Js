 
 /* javaScript is a dynamic type language, we can change the 
          data type of a variable at runtime. */                               


 //premitive data types

 /* 7 primitive data  type :-> number, string, boolean, 
                              null, undefined, symbol, bigint*/

 let age = null // null is used to represent the intentional absence of any object value. It is a primitive value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property is empty.
let name = undefined // undefined is a primitive value that represents the absence of a value. It is the default value of uninitialized variables and function parameters that are not provided with an argument. It can also be explicitly assigned to a variable to indicate that it has no value.


const id = Symbol("123")
const otherId = Symbol("123")

//console.log(id === otherId) // false because symbol is unique

const bigInt = 1234567890123456789012345678901234567n // bigInt is used to represent large integers that exceed the safe integer limit of JavaScript. The 'n' suffix indicates that the number is a BigInt.
//console.log(bigInt)

// Reference (non-primitive) data type

// array ,object ,function 

const heros = ["shaktiman", "doga", "nagraj"]   // array

let obj = {   /// object
    name: "shaktiman",
    power: "super strength" 

}

const myFunction = function() {
    console.log("this is a function")
}


 