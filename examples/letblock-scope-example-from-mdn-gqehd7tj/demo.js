// declare two globals out here
var a = 1;
var b = 2;

// inside this loop, declare again using var or let
//  Note: this is not an error in JS as it would be in
//   some other languages. (It's not good pratice, but it
//   is not an error.)
if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  logMessage(a);  // 11
  logMessage(b);  // 22
} 

logMessage(a); // 11
logMessage(b); // 2



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}