"use strict"

var hasBananas = confirm("Do you have bananas? ([OK] for yes, [Cancel] for no)");

// here's the first conditional to see if there are bananas
if (hasBananas){
    // if true, then we'll ask for the number of bananas
    var numBananas = prompt("How many bananas");

    // plural or singular?
    if (numBananas == 1){
        console.log("You have "+ numBananas +" banana");       
    }else{
        console.log("You have "+ numBananas +" bananas");
    } 
}else{
     //hasBananas was false
    console.log("I'm sorry that you have no bananas!")
} 
//this code runs no matter what
console.log("Whether or not you had bananas, have a good day!");

    