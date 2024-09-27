/* This function will add as many numbers as are passed in.
 * Note the new rest operator which assigns all incoming arguments to an 
 * array, 'numberstoAdd', 
 * It contains all of the arguments passed
 * in the function call, in order.
 */ 
function addNumbers(...numbersToAddArray){
  var sum=0;		
  console.log("number of arguments: "+numbersToAddArray.length);
  for (var i=0; i<numbersToAddArray.length;i++){
    let n = Number(numbersToAddArray[i]);
    if (n){
      sum+=n; 
    }
  }
return sum;
}
console.log("The sum is " + addNumbers(1, 2, "dog", 3, 4, 5));

// Advanced: alternately, the Array method reduce() can perform this loop 
//  and the sum without using a for loop. We'll cover such Array methods in a later lesson.

