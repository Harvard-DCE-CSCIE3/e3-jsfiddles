"use strict";

// three arrays we'll calculate averages
var scoresArray1 = [87, 93, 69, 96, 77, 81];
var scoresArray2 = [56, 82, 71];
var scoresArray3 = [99, 97, 91, 89, 92];

// You'll write a function here called calculateAverage, which will
//  accept one argument - the array, and return the average of the 
//  numbers in the array. 


//here we're calling your function on the three arrays and outputting the result
document.getElementById("average1").innerHTML = calculateAverage(scoresArray1);
document.getElementById("average2").innerHTML = calculateAverage(scoresArray2);
document.getElementById("average3").innerHTML = calculateAverage(scoresArray3);

