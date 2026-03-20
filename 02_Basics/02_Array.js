const marvelHeros = ["Spider-Man", "Iron Man", "Hulk", "Thor", "Captain America"]
const dcHeros = ["Batman", "Superman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)  
//  we see this out put ==>
//  ['Spider-Man','Iron Man','Hulk','Thor','Captain America',[ 'Batman', 'Superman' ]  ]
 
// we  see that the dcHeros array is added as a single element at the end of the marvelHeros array.

// if i want to acess eloments of dcHeros array then we can do like this
// console.log(marvelHeros[5][0]) // Batman
// console.log(marvelHeros[5][1]) // Superman

// ============ Next methord to conar of two array ================
 

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros)

// we see this output ==>
// ['Spider-Man','Iron Man','Hulk','Thor','Captain America','Batman','Superman']
 

//  ======================Use of Spread operator =========================
 

///     mostly  developer use this method to conar two array 
// because it is more clean and easy to read than concat() method.
 
// const allHeros = [...marvelHeros,...dcHeros] 
//  console.log(allHeros)

 // we see this output ==>
// ['Spider-Man','Iron Man','Hulk','Thor','Captain America','Batman','Superman']


 // ================= In conplex case like [1,2,[2,3,[4,5]]]  ================

 // how to solve it    by using flat() method

 const arr = [1,2,[2,3,[4,5]]]
  const nArr = arr.flat(Infinity)  
  // we can also write in depth [[[]]] of arry so we can writ  no. 1,2,3 or infinity

   //console.log(arr.flat(1)) // [1, 2, 2, 3, [4, 5]]

// console.log(nArr)

// we see this output ==>
// [1, 2, 2, 3, 4, 5]


//  =================== 
   // mostly use in data scraping

//console.log(Array.isArray("Hello World")) // to check that the given value is an array or not. 
//console.log(Array.from("Hello World")) // to convert the given value into an array.
 // we see this output ==>
// false
// ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']


//console.log(Array.from({name:"John",age:30}))  /// intresting output  and interview question
// we see this output ==>
// [undefined, undefined]

// important ****************************************
//============================ convert number into array
let a = 1
let b = 22
let c = 553
console.log(Array.of(a,b,c)) // to convert the given value into an array.
// we see this output ==>
// [1, 22, 553]

