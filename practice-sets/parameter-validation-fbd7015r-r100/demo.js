// the sample input data we'll be validating

const scoresArray4 = "this is not an array";  
//hint: try testing to see if this is actually an array before doing anything else in the function.  Remember that 'typeof' works for simple data types, but [object].constructor.name will tell you the type of many objects. We show this in video 4.4 (towards the end).   

const scoresArray5 = [76, 83, "90"];
// hint: try converting each (or each non-numeric) array element to a number as you come to it

const scoresArray6 = [88, 73, "bob", 100, NaN]; 
// hint: while you're converting all array elements to numbers, use a conditional to check to see if it worked before adding the value to the sum

// function calculateSum() is here
// You will modify this function so that none of the above cases
// "break" the code. If the sum simply can't be done (as in scoresArray4),
// return the value 'null' or nothing at all, and write an error to the console.
// Otherwise, if a sum can still be calculated, return that
function calculateSum(arr){
	// We don't strictly have to do this test, to meet the three cases above,
  //  but, I'm checking here to see if the argument is null or undefined. 
  //  If it is, any other tests will fail, so just return here. 
  if (!arr){
  	console.log("The argument is null or undefined");
  	return;
  }
  // Now check to see of the object is of type Array.  We can't use typeof, 
  //   since typeof will return the generic type 'object' for an array, which
  //   doesn't help us.  So we use [object].constructor.name to see if the 
  //   object is an Array.  We will cover constructors in depth in a few weeks, but
  //   for now, just know that this test works. 
  if (arr.constructor.name != "Array"){
  	console.log("The argument isn't an array! It's a "+arr.constructor.name);
    return null;
  }
  
  // Now we want to handle the case if the array element is a string.
 let sum=0, num; 
  for (let i=0; i<arr.length; i++){
  	// We can handle both scoresArray5 and scoresArray6 cases by calling
    //   parseInt() always (even on something that's already a number) 
    //   and use the result if it's not NaN (or otherwise 'falsey')
     num = parseInt(arr[i]);
     if (num){
     	sum+=num;
    }
  }
  
  // Another way to do this would be to use Number() to convert, if possible,
  //  input to numbers. If Number() cannot do this, n will be falsey. Note
  //  that the conversion of Number() and parseInt() will behave differently
  //  for the same input. Depending on the specific requirements, you 
  //  may need to use either and/or both.  
  //For example, "1StoryStreet" will fail using Number(), but
  //  result in '1' using parseInt(). And '1.23' will return 1.23 using
  //  Number(), but parseInt() will return 1.
  sum=0;
  for (let i=0; i<arr.length; i++){
    // We'll  test to see if the element is a Number.
    let n = Number(arr[i]);
    if (n){
			sum+=n;
    }
  }
  return sum;
}

document.getElementById("sum4").innerHTML = calculateSum(scoresArray4);
document.getElementById("sum5").innerHTML = calculateSum(scoresArray5);
document.getElementById("sum6").innerHTML = calculateSum(scoresArray6);