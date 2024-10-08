"use strict";

// three arrays we'll calculate averages
const scoresArray1 = [87, 93, 69, 96, 77, 81];
const scoresArray2 = [56, 82, 71];
const scoresArray3 = [99, 97, 91, 89, 92];

// You'll write a function here called calculateAverage, which will
//  accept one argument - the array, and return the average of the 
//  numbers in the array. 
function calculateAverage(arr){
  let sum=0, i; 
  for (i=0; i<arr.length; i++){
     	sum+=arr[i];
   }
   console.log("Sum is " + sum + " and i is "+i);
   return sum/i;
}

/// IF I WANTED TO VALIDATE INPUT ON THIS FUNCTION (MAKE
//   SURE THAT WE'RE DEALING WITH ONLY NUMBERS), I COULD
//   add a parseInt() and a test, as we do in this week's 
//   Practice Set Assignment #2
function calculateAverage2(arr){
let sum=0, num, i; 
  for (i=0; i<arr.length; i++){
     	num = parseInt(arr[i]);
      if (num){	
      	sum+=num;
      }
   }
   console.log("Sum is " + sum + " and i is "+i);
   return sum/i;
}


//here we're calling your function on the three arrays and outputting the result
document.getElementById("average1").innerHTML = calculateAverage(scoresArray1);
document.getElementById("average2").innerHTML = calculateAverage(scoresArray2);
document.getElementById("average3").innerHTML = calculateAverage(scoresArray3);

