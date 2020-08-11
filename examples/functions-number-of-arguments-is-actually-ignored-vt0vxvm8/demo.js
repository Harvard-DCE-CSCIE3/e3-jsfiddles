/* This function will add as many numbers as are passed in.
 * Note the new Array variable that's available inside 
 * any function. It contains all of the arguments passed
 * in the function call, in order.
 */ 
function addNumbers(){
    var sum=0;		
    console.log("number of arguments: "+arguments.length);
    for (var i=0; i<arguments.length;i++){
		if (Number(arguments[i])){
			sum+=arguments[i]; 
		}
    }
	return sum;
}
console.log("The sum is " + addNumbers(1, 2, 3, 4, 5, "dog"));

