//for this assignment, we'll deal with input validation
var scoresArray4 = "this isn't an array";
var scoresArray5 = [76, 83, "90"];
var scoresArray6 = [88, 73, "bob", 100]; 

//  function calculateSum goes here
function calculateSum(arr){
	var sum=0;
  for (var i=0; i<arr.length; i++){
  	sum+=arr[i];
  }
  return sum;
}

document.getElementById("sum4").innerHTML = calculateSum(scoresArray4);
document.getElementById("sum5").innerHTML = calculateSum(scoresArray5);
document.getElementById("sum6").innerHTML = calculateSum(scoresArray6);
