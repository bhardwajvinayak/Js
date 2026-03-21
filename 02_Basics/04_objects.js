
//const  tinderUser = new Object();
     // this is singleTon object


const tinderUser ={}  // it's not a singleTon object

tinderUser.id = "123dfs"
tinderUser.name = "ekdantam"
tinderUser.location = "jaipur"

//console.log(tinderUser)
 
// we see the output is { id: '123dfs', name: 'ekdantam', location: 'jaipur' }



// object nesting

const regularUser = { 
    email : "ekdantam@chatGpt.com",
    fullName : {
         userFullName :{
            firstName: "ekdantam",
            lastName: "bhardwaj"
         }
    }
}

// how to access the Nested object element
//console.log(regularUser.fullName.userFullName.firstName)
//  we see the output ==> ekdantam

// we see this in case of Apis 
//console. log(regularUser.fullName?.userFullName.firstName)

// its means if fullName is present then only access userFullName otherwise return undefined


// =========== how to merge two objects =============

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "gd"
}

//const mergedObj =  Object.assign({}, obj1 ,obj2) 
// {} me assign ho rhea hai obj1 and obj2
// Agar  {} ka use ni kerte h jo phle likh h us me assign hongi value output same hi ayega 
//console.log(mergedObj)

//latest way to merge two objects
const mergedObj = {...obj1 , ...obj2} 
console.log(mergedObj)
// we see the output is { '1': 'a', '2': 'b', '3': 'c', '4': 'gd' }



   
// suppose in how to access object key in array
const users = [ {
        id: "123dfs",
        name: "ekdantam",
    },
    {
        id: "123dfs",
        name: "ekdantam",
    },{
        id: "123dfs",
        name: "ekdantam",
    }]


  console.log(Object.keys(tinderUser)) // to get the keys of the object in array form
  // we see the output is [ 'id', 'name', 'location' ] 
  
  // and also we can get the values of the object in array form by using Object.values() method

  console.log(Object.values(tinderUser)) 
  // we see the output is [ '123dfs', 'ekdantam', 'jaipur' ]

  console.log(Object.entries(tinderUser)) 
    // we see the output is [ [ 'id', '123dfs' ], [ 'name', 'ekdantam' ], [ 'location', 'jaipur' ] ]

 // in case how to check that the given key is present in the object or not 
 // by using hasOwnProperty() method

     // console.log(tinderUser.hasOwnProperty("name"))
        // we see the output is true
        // and we see the returned output in Boolean

// ============== Apis  related Concepts ==================

const course ={
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "ekdantam"
}

// we see this when we access cource object keys we write cource.courceName
// but in the case  we want to access keys many times then we can use destructuring concept

const {courseName, price, courseInstructor} = course
// we can also write like this 
// const {courseName: cName, price: cPrice, courseInstructor: cInstructor} = course
// in this case we can access the keys by using cName, cPrice, cInstructor

console.log(courseName) // to access the value of courseName key
// we see the output is js in hindi

// And also change name  of keys
//like this == \/ == \/  ==  \/  == \/ == \/ == 

const {courseName: cName, price: cPrice, courseInstructor: cInstructor} = course

console.log(cName)

//we see the output  js in hindi

// =================== using Destructring  object in react=====================

const  navbar = ( {company}/*props.comapany  bhaut bar kiya jata h ab ye concept ase use hoga */) => {

}
// asign value  company name
navbar(company= "ekdantam")

// and also deStructuring in Array bhi haota h  define  next time


