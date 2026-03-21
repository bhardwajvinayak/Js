// ====================== Function =====================

// it is package of code we can  use the code call at a time  run this code

function sayMyName ( ){
    // console.log("V");
    // console.log(" I");
    // console.log("  G");
    // console.log("   N");
    // console.log("  E"); 
    // console.log(" S");
    // console.log("H");
}

// how to call function 

sayMyName();



///  Add two numbers 

function addTwoNumber(number1 , number2){
    //  console.log("Result : ", number1+number2)

}
addTwoNumber(2,5);

// // but 
// const result = addTwoNumber(2,5);
// console.log("Result : ", result); // Result :  undefine

// solution  why undefine is result  because  function has not retutn any value

// function addTwoNumber(number1 , number2){
//      console.log("Result : ", number1+number2)

// function addTwoNumber(number1 , number2){
//       return number1 + number2

// }
// function addTwoNumber(number1 , number2){
//      //console.log("Result : ", number1+number2)
// }
//=======================================================================
 
function loginUserMessage(userName = "sam"){
  if(!userName){   
    // in the case of if () undefine act as  false  so we  write condition  !userName                    
    console.log("plese enter your user name")
    return
      }
    return `${userName} just logged in`
}

//  console.log(loginUserMessage("vakerTund"))

// in case you give default value function loginUserMessage(userName  = "sam"){
// easily overwrite when give any function parameters

// ===============================how to pass other type of argument ==========================

// in case of eComurce app
// how many argument , parameter are type  in the function like
//   how many order in  you cart to count no. of cart

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,300,546)) 
//  we see the output is ==> [ 200, 400, 300, 546 ]
// rest operator {...varName} it collect value in array

const user = {
    name  : "ViketMav",
    age : 13
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
}

//handelObject(user)
 //handelObject({name :"lamboder",age : 18})

 // array
 const myArray =[2,34,53,56]
function returnSecondElement (getArray){
  return  getArray[1]
}
// console.log(returnSecondElement(myArray))
console.log(returnSecondElement([23,645,65,98,43]))