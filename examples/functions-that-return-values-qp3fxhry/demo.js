function addNumbers(num1, num2){
	if (typeof num1 == 'number' && typeof num2 == 'number'){
		return num1 + num2;
	}else{
		return null;
	}
}
// call  my function and assign it to a variable
const sum = addNumbers(2, 5);

//addNumbers returns a value that can be substituted into any expression as that value
console.log ("my sum is " + 7);
console.log ("my sum is also " + sum);
console.log("and my sum is also " + addNumbers(2, 5) + ". Notice that addNumbers() returns a value that can be substituted right into an expression as a value.");
