// if condition statement

// if(condition){
//     // code
// }
// if condition is true  then execute code
// if condition is false then code not execute

// > , < . ==  ,<= , >= . !=

//  if(2 == "2") // true  
// you must use === for checking value and type

   // example
// let  temperature = 51;

// if(temperature === 50){
//     console.log("temperature is less than 60");

// }
// else{
//     console.log("temperature is greater than 60");

// }
// console.log("Execute");



//   Scope 

// const score = 200;
// if(score > 100){
//     let power = "fly";
//     console.log(`user has power: ${power}`);

// }
//  console.log(`user has power: ${power}`); // error because power is only accessible in if block

//   implecit scope
  
//    if(2==2) console.log("test1")  ,
//     console.log("test2")  , console.log("test3") ;  // 

    //if condition is true then all statement will execute because of comma operator
    // this iis a bad code for practice because it is not readable and
    //  can cause confusion for other developers who read the code. 
    // It is better to use curly braces to clearly indicate the block 
    // of code that belongs to the if statement.

// nested if statement  

// let age = 25;
// if(age > 18){
//     console.log("you are eligible to vote");
//     if(age > 21){
//         console.log("you are also eligible to drink alcohol");
//     }
//     else{
//         console.log("you are not eligible to drink alcohol");
//     }
// }
// else{
//     console.log("you are not eligible to vote");
// }        

//  use of && operator in if statement
    // example - 1
//   const userLoggedIn = true;
//   const usedDebitCard = true;

//     if(userLoggedIn && usedDebitCard){
//         console. log("Allow user to make purchase");
//     }

    // example - 2

    // const loginFromGoogle = true;
    // const loginFromFacebook = false;
    
    // if(loginFromGoogle || loginFromFacebook){
    //     console.log("Allow user to login");
    // }

