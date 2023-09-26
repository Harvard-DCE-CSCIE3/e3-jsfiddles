"use strict"

const hasBananas = confirm("Do you have bananas? ([OK] for yes, [Cancel] for no)");

// here's the first conditional to see if there are bananas
if (hasBananas){
    
    // if true, then we'll ask for the number of bananas
    const numBananas = prompt("How many bananas");
    let howManyMessage = "You have "+ numBananas +" banana";
    
    // plural or singular?
    if (numBananas > 1){
        howManyMessage += "s";
        howManyMessage += " That's a lot of bananas";
    }
    console.log(howManyMessage);
    
}else{
     //hasBananas was false
    console.log("I'm sorry that you have no bananas!")
} 

//this code runs no matter what
console.log("Whether or not you had bananas, have a good day!");
