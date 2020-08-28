// Initialize our two test-case arrays
var arrayOne = [1, 3, 5, 7, 9];
var arrayTwo = [1, 3, 5, "seven", 9];

// SOLUTION: isNumber returns either a number
// or a value that's equivalent to false (such as NaN)
// This is interpreted by every() as true or false.
var isNumber = function (element) {
    return Number(element);
}
/* THIS COULD ALSO BE DONE WITH A DELCARED FUNCTION:
 function isNumber(element) {
    return Number(element);
}*/

// Call Array.every() on each array, passing
// in a function that tests each element
logMessage("arrayOne: " + arrayOne.every(isNumber));
logMessage("arrayTwo: " + arrayTwo.every(isNumber));


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}