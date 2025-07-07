"use strict";

// Insert your code for #1 here
// SOLUTION COMMENT: this is the simplest form this conditional
// could take. There are many variations possible. For example, the 
// test for x==0 could be expressed as simply '!x', since if x is zero
// then x is false nd 'not x' is true. 
const x = 2;
if (x>0){
    console.log("x is greater than zero!");
} else if (x==0){
    console.log("x is equal to zero!");
} else {
    console.log("x is less than zero!");
}
    


// Insert your code for #2 here
const myCaptains = ["James T. Kirk", "Jean-Luc Picard", "Katherine Janeway"];
// SOLUTION COMMENT: Note the addition of braces on lines 22 and 25.
// Note also the use of var within this loop. If we'd done 'let', i would be out of scope
//  in the last line of code, outside the braces.
for (var i = 0; i < myCaptains.length; i++){
    myCaptains[i] = myCaptains[i].toUpperCase();
    console.log("The Captain in Capitals is " + myCaptains[i]);
}
console.log(i + " captains have been capitalized");