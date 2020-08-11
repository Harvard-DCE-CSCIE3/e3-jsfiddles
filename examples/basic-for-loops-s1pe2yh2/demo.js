"use strict";
//let's count from 1 to 10
for (var index=1; index<=10; index++){
 console.log(index);   
}

//now let's iterate over an array
var names = ["Frodo", "Bilbo", "Samwise", "Merry", "Pippin"];

console.log("Some of my favorite hobbits are:");
// remember that arrays start at zero
// so we will loop from 0 to the length of the array
for (var index2=0; index2<names.length; index2++){
     console.log(names[index2]);   
}

