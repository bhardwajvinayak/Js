// Immediately Invoked Function Expression (IIFE)

// when global scope is  polluted any function but this function is not poluted by global Scope
// then use IIFE


// function chai ( ){
//     console.log("DB CONNECTED");
// }
// chai()

// how to write IIFE to function chai()

( function chai () {
    console.log("DB Connected")
} () );

// Syntax of iffe

/* 
  (  function Name (){
    }() )  */

// when iffe is run  but iffe has no idea  which line context end   soo we use " ; "
// to end of iffe 
// like this  \/  \/ \/
 /*
     ( function Name (){
                           }() ) ;
   */

// 

// how to pass parameter and argument in IFFE

( (name ) =>  {
    console.log(`your DB is connected  $[name]`);
}) ('viNayak');


