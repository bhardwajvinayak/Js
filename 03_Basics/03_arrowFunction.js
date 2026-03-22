// this. keyword means current context

const user = {
    userName : "dhmurVarnam", 
     price : 999,
     
     welcomeMessage : function(){
       console.log(`${this.userName}, welcome to web`)
      console.log(this)
     }
}
// user.welcomeMessage() 
// // Note : welcomeMessakge key act as function so access to write name()
// user.userName = "ekDantam"
// user.welcomeMessage()

//we see this output 
/*
dhmurVarnam, welcome to web
{
  userName: 'dhmurVarnam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
ekDantam, welcome to web
{
  userName: 'ekDantam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}      */ 


// console.log(this)
// we see this output ==>  {}
// it means empty (globally in node current context empty)
// in case of browser we see  window object  we see this 
// many methords in windows like click ,form etc


// In case of Function

// function chai(){
//   let userName = "Vinayakam"
//   console.log(this.userName); // undefine
// }
// chai();
// // we see this keyword not work in function

// const chai = function(){
//   let userName = "Vinayakam"
//   console.log(this.userName); // undefine
// }
// chai();


// how to use arrow function 

// it's simple  in this prev. code   const chai = function(){}
//  only remove  function keyword parameter asetis b/w () and {} 
// add =>
  // like this

//const chai = () => {
// let userName = "Vinayakam"
//   console.log(this.userName);   // o/p => undefined
//}
 // chai()

 //syntax of arrow function

// datatype funName = () => {}

// const addTwo = (num1,num2) => {
//   return (num1 + num2)
// }
// console.log(addTwo(2,3))

// implecit return 

// const addTwo = (num1,num2)=>(num1+ num2)
// console.log(addTwo(3,4)) // 7

// object return in arrowFunction 
const addTwo = () => ({name : "Vinayakam"})
addTwo()
