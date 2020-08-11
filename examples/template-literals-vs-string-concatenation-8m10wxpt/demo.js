var name = "Simon";
var place = "Cambridge"
// standard string concatenation
console.log("my name is "+ name);

// JS template literal
//  Notice the use of backtick characters rather than
//    quotes, and the use of ${ } to insert
//    variables that are in scope.
console.log(`my name is still ${name} and I live in ${place}`);
