"use strict";
// function to return the sum of a and b
//  Note that the one-line function needs no 'return' statement
//  as the expression to the right of the arrow is automatically
//  returned. 
const addNumbers = (a, b) => a + b
console.log(addNumbers(4, 5));

// Here's an array we saw in video 5.4  
var myArray = ["LArry", "john", "BILL" ];

// Let's say we are using Array.forEach() to act on this array.
// Remember that forEach takes on argument - a function that will
//  run on each element in the array.
// In this simple case, we'll output each value to the console. 
myArray.forEach(function(val){
	console.log("Example 1: " + val);
});
   
// Arrow functions condense the syntax of anonymous functions to eliminate the 'function' keyword
//  and eliminate unnecessary brackets. Since this is a one-line function, we
//  don't need brackets. 
// This is equivalent:
myArray.forEach(val => console.log("Example 2: " + val) );

// If my function were multi-line, we'd use brackets as usual
myArray.forEach(val => {
	console.log("Example 2: "); 
  	console.log(val);
});
  
// If I use multiple arguments to my function, I have to use parentheses
//  around them
myArray.forEach((val, index, theArray) => {
	console.log("Example 3: "); 
  console.log(index + "/" + val);
});

// I can use this syntax to create a function expression
var logger = message => console.log(message);
// And then call my function as usual
logger("I'm logging!");

// Other differences exist inside the function itself
//  including the value of the implicit variables 'arguments'
//  and 'this' and 'prototype' 
// For more details, visit MDN at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

