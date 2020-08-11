// delcare a "global" variable 
var k = "Harvard";

// In a function, name a parameter the same as the global variable.
//   It's still scoped to just within the function.
function myFunc(k){
    logMessage("this is the function parameter k: "+k);
    k = "Yale";
    logMessage("this is still the function parameter k: "+k);
}

// Call the function with our global.  
myFunc(k);

// We see that the global variable did not change. The 
//  fact that they are both called 'k' does not matter
//  since they are in different contexts.
logMessage("When we're done, the global k is still: "+k);

// The global 'k' is actually a property of the window object
logMessage("This is the same as: "+window.k);



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}