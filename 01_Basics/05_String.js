// Concatination of strings
let firstName = "omkar"
let lastName = "Prakash"

console.log(firstName + " " + lastName) // omkar Prakash

//================modern way to write strings=============================

// Template literals (template strings)  
// backticks (``) are used to create template literals, //
// which allow for easier string interpolation and multi-line strings.

console.log(`${firstName} ${lastName}`) 
// omkar Prakash


console.log(`Hello my friend , my name is ${firstName} ${lastName} can i help you?`)
// Hello my friend , my name is omkar Prakash
  
     // string methods
     
     let str = "Hello World"    
        console.log(str.length) // 11
        console.log(str.toUpperCase()) // "HELLO WORLD"
        console.log(str.toLowerCase()) // "hello world"
        console.log(str.includes("World")) // true
        console.log(str.startsWith("Hello")) // true
        console.log(str.endsWith("World")) // true
        console.log(str.indexOf("o")) // 4
        console.log(str.slice(0, 5)) // "Hello"
        console.log(str.replace("World", "JavaScript")) // "Hello JavaScript"
        console.log(str.split(" ")) // ["Hello", "World"]
        console.log(str.trim()) // "Hello World" (removes whitespace from both ends of the string)      
                
         // ============= modern way to write strings(indexing string ) =============
  
         let str1 = new String("Hello World") 
         
         // creating a string object using the String constructor
        // ================= In the  browser we see this   output in the console as
         
         // 0: "H"
         // 1: "e"
         // 2: "l"
         // 3: "l"
         // 4: "o"
         // 5: " "
         // 6: "W"
let n  = "vin-ayak"
console.log(n.split("-").join)// vinayak
