 // ============== Memory =============

  // Stack(primitive data types) and Heap (reference data types)


  // stack
  let myName  = "vinayak" // myName is stored in the stack, it holds the value "vinayak"

   let otherName = myName // otherName is a copy of name, it holds the value "vinayak"
     otherName = "ekdantam" // otherName is now "ekdantam", but name is still "vinayak" 
     // because they are stored in different memory locations in the stack.

    console.log(myName) 
    console.log(otherName) 

    //heap
    let person = { name: "vinayak",
        email: "vinayak@example.com"
     }  // person is stored in the heap, it holds a reference to the object { name: "vinayak" }
    let anotherPerson = person // anotherPerson is a reference to the same object in the heap, it holds the same reference as person
    anotherPerson.name = "ekdantam" // anotherPerson is now referencing the same object in the heap, so when we change the name property, it changes for both person and anotherPerson

    console.log(person.name) // "ekdantam"
    console.log(anotherPerson.name) // "ekdantam"
