// singleTon
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// litrels se singleTon nhi banta 
// constructor se single ton banta hai


// object literal

const mySymbol = Symbol("key1")
const profile ={
    name: "ekdantam",
    age : "16",
    [mySymbol] : "value1",
    fatherName : "chandraShaker",
    motherName : "uma",
    "isLogedIn" : "true"

}
 
// how to access element in object
//  1.  by using dot notation
//console.log(profile.motherName)
// 2. by using bracket notation
//console.log(profile["fatherName"])

// in th condition the elenemt  in object but in string like "isLogedIn" : "true" 
// it's not access  by dot notation but access by bracket notation
//        

// Interview question
// how to implement symbol in object

const sym1 = Symbol("key1")
// BUT IN OBJECT write like this

// const obj = {
//     [sym1] : "value1"
// }
  
//and access like this
//console.log(profile[mySymbol]) // value1

// change and freeze object element value

profile.name = "ekdantam sharma"    
//console.log(profile.name) // ekdantam sharma

// freeze object
//Object.freeze(profile)
profile.name = "ekdantam sharma"


//console.log(profile.name) // ekdantam 
//because object is freeze so we can't change the value of name in profile object


// ====== how to add function in object

profile.greet = function(){
    console.log("hello");
}
// console.log(profile.greet()) ;// hello
// console.log(profile.greet) ;// [Function: greet]  function ka reference dega


profile.greetTwo = function(){
    console.log(`hello , ${this.name}`);
}
console.log(profile.greetTwo());// hello , ekdantam sharma
// this keyword is used to access the property of the object in which the function is defined



// json formate 

  //it similer than object 
  // but keys shoud be string
   //like this   \/ ----- \/ --------\/ 

   // 1. apis also object
//   { "name" : "gagVakeram",
//     "age" : 12,
//     "isLogin" : true 

//   }

// 2.  and apis also array

[
    {},
    {},
    {}
]
      