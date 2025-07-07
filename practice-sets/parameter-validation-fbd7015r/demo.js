// the sample input data we'll be validating

var scoresArray4 = "this is not an array";  
//hint: try testing to see if this is actually an array before doing anything else in the function.  Remember that 'typeof' works for simple data types, but [object].constructor.name will tell you the type of many objects. We show this in video 4.4 (towards the end).   

var scoresArray5 = [76, 83, "90"];
// hint: try converting each (or each non-numeric) array element to a number as you come to it

var scoresArray6 = [88, 73, "bob", 100]; 
// hint: while you're converting all array elements to numbers, use a conditional to check to see if it worked before adding the value to the sum

// function calculateSum() is here
// You will modify this function so that none of the above cases
// "break" the code. If the sum simply can't be done (as in scoresArray4),
// return the value 'null' or nothing at all, and write an error to the console.
// Otherwise, if a sum can still be calculated, return that sum
function calculateSum(arr){
  // you will fix the code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
  	
}

document.getElementById("sum4").innerHTML = calculateSum(scoresArray4);
document.getElementById("sum5").innerHTML = calculateSum(scoresArray5);
document.getElementById("sum6").innerHTML = calculateSum(scoresArray6);
