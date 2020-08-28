"use strict"; 

// Insert your code for #1 here
var myFavoriteLanguages = ["Javascript","PHP","Ruby"];


// Insert your code for #2 here
myFavoriteLanguages.unshift("Java");


// Insert your code for #3 here
// SOLUTION NOTE: Here's a couple ways to do this one
//  There are others as well. 
for (var i=0; i<myFavoriteLanguages.length; i++){
    console.log("forloop: "+ myFavoriteLanguages[i]);   
}
myFavoriteLanguages.forEach(function(el){
    console.log("forEach(): "+ el); 
});


// Insert your code for #4 here
// SOLUTION NOTE:
// This conditional and this loop could be done in other ways.
//  For example, the conditional could be spelled out:
//     if (k%2 == 1)
for (var k=1; k<=100; k++){
    if (k%2){
        console.log(k);
    }
}
//  Or the loop could be like this:
for (k=1;k<=100; k+=2){
     console.log(k);
}
