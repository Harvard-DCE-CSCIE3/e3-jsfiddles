// You've seen this example of how 'k' inside the function
//  (passed as an argument, in this case) is
//  scoped locally, and is a different 'k' than that 
//  in the global scope.  The same name is used here for
//  illustration purposes (which isn't a great programming
//  practice, but makes the point here about scope.
const k = "Harvard";
function myFunc(k){
    logMessage("this is the myFunc local k: "+k);
    k = "Yale";
    logMessage("this is still the myFunc local k: "+k);

}
myFunc(k);  // pass global k into the function as an argument
logMessage("When we're done, k is: "+ k);

// In this case, the opposite happens. The original array
//  is modified.  Why? Because objects (like an Array) are
//  passed-by-reference, not by-value. 
const i=[1, 2, 3, 4, 5];
function myOtherfunc(i){
    logMessage("this is the local i: "+i);
    i.reverse();
    logMessage("this is still the local i: "+i);
}
myOtherfunc(i);
logMessage("When we're done, i is: "+i);


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}