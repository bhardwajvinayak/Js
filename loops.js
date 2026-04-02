// continue statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip the rest of the loop when i is 5
    }
    console.log(i); // will print numbers from 0 to 9 except 5
}
    
// break statement  


let j = 0;
while (j < 10) {
    if (j === 5) {                  
        break; // exit the loop when j is 5
    }
    console.log(j); // will print numbers from 0 to 4
    j++;
}
            