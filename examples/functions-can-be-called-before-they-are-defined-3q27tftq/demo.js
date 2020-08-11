"use strict";
/* Because the whole file is read before any code is executed, you can call a function "before" (on an earlier line of the code) it's declared.  
 */ 

// I'm calling my function here
person("Bob", 45, "builder"); 

// and I'm declaring it here
function person(name, age, occupation){
		console.log("My name is: "+name);
		console.log("I am " +age + " years old");
		console.log("I am a "+occupation);
}

// Advanced: an expression function is not
//   available before it's executed. We'll cover these
//   in week 6, but I mention it here since it's an exception
//   to the behavior shown above. This case is treated just
//   like any other variable assignment, which happens when
//   this line of code is executed.
var myFunction = function(){
    console.log("this is my function");
}