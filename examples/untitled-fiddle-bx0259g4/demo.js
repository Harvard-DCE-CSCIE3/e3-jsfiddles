//we declare and set a global variable 'a'
var a = 1;

function f(a){
  // Inside the function, this 'a' is a different varibale, 
  //   scoped only to within the function.
	console.log("in the function a: "+ a);
  if(a==11){
  	// This variable 'b' using 'let' is block-scoped. Outside of 
    //   the 'if' statement's braces it is not defined.
    let b = 2;
    console.log("block scope b is: "+b);
  }
 // console.log("outside the block b is: "+b); // error 'b is not defined'
}
// Call function f() with an arbitrary value, to show that inside the 
//   function, variable 'a' has this value and not '1' as set in the global 'a'.
f(11);  
console.log("global a is "+a);