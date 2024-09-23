"use strict";
//let's count from 1 to 10
for (let index=1; index<=10; index++){
 console.log(index);   
}

//now let's iterate over an array
const names = ["Frodo", "Bilbo", "Samwise", "Merry", "Pippin"];

console.log("Some of my favorite hobbits are:");
// remember that arrays start at zero
// so we will loop from 0 to the length of the array

// Note also that the use of 'let' in declaring these 'index'
//  variables means that they are scoped to within the loop. 
//  This is why we can use 'index' here and it's a different
//  variable from the 'index' in the loop above. 
for (let index=0; index<names.length; index++){
     console.log(names[index]);   
}

