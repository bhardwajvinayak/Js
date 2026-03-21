let a =100
let b =2
if(true){
    let a = 10
const b =20
// var c =30
console.log("Inner : ",a)

}

console.log(a)

console.log(b)

//console.log(c)

// Nested Scope


function one (){
   const name = "krishenPingalisham"

   function two(){
    const website = "youTube"
    console.log(name)

   }
   //console.log(website)
   two()
}
//one()

if(true){
    const name = "viganRajendera"

    if(true){
        const website = "youTube.com"
        console.log(name + website)
    }
    //console.log(website)     //error
}
//console.log(name)       //error

// ++++++++++++++++++++++ Inresting +++++++++++++++++++++++++++++++++++
// 1. function implement
addone(5)  /// output  ==> 6
function addOne(num){
 return num+1
}

// 2. type function implement
 addTwo(5)// error
const addTwo = function(num){
   return num+1
}
addTwo(5)// output ==>6