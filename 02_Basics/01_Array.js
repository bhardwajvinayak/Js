const arr = [1,2,3,4,5]
console.log(arr)

// Array is a data structure that can hold multiple values at once. It is a collection of elements, each identified by an index. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are commonly used in programming to organize and manipulate data efficiently.

//console.log(arr.length)
//  length property returns the number of elements in the array.

//console.log(arr.includes(4))
// includes() method checks if a specific element is present in the array and returns true or false accordingly.

//console.log(arr.indexOf(3))
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

arr.push(8)
arr.push(9)
// push() method adds one or more elements to the end of an array and returns the new length of the array.

//console.log(arr)
  
arr.pop()
// pop() method removes the last element from an array and returns that element. This method changes the length of the array.

//console.log(arr)
// ============================================================================================
arr.unshift(0)
// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


arr.shift()
// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//console.log(arr)
// ============================================================================================
arr.splice(2, 0, 6, 7)
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The first parameter is the index at which to start changing the array, the second parameter is the number of elements to remove, and the subsequent parameters are the elements to add.

console.log(arr)   

console.log(newArr.join())
// join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
