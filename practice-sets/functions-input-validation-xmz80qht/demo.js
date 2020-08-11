/*  
#1
This code is calling on a function logMessage(), that should accpet a single parameter, and write that parameter to the console.  No input validation is required - just echo the parameter to the console. Write the logMessage() function so that this code works. 
*/
var name = "Ellen Ripley";
logMessage("My name is "+ name);

/*
#2
The following function returns its string parameter trimmed to the length specified in the second parameter. If the parameters are not a string and an integer (or something convertible to a string and an integer), the function fails with an error. Modify this function so that if the input is invalid, it returns the string "Invalid input", otherwise it returns the truncated string.

For what counts as 'convertible to a number' or to a string, only the listed test cases need to be covered. You don't have to worry about other kinds of input like 'false' or '10c', etc 

*/
function truncate(inputString, targetLength){
     return inputString.substr(0, targetLength);   
}

//test cases 
var x = "Fourscore and seven years ago";
var y;
console.log("1: " + truncate(x, 10));
console.log("2: " + truncate(x));    // should output the unmodified string
console.log("3:  " + truncate(10, 10));
console.log("4: " + truncate(y, 10));
console.log("5: " + truncate(x, "Bob"));
