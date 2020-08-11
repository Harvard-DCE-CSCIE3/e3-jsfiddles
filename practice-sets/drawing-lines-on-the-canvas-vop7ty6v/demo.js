// get the canvas and context objects
var canvas = document.getElementById("c1");
var ctx = canvas.getContext('2d');

// We can draw on this 'ctx' object.  Let's set some styles 
ctx.strokeStyle = "red";
ctx.lineWidth = "2";

// Remember from the example in 
//  video 14.3 how to draw lines, or check the MDN docs:
//  https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
//  In steps: 
//    call beginPath() to start the drawing path
//    call moveTo() to position the pen at the starting point at one corner
//    call lineTo() to define a line to the opposite corner
//    call stroke() to draw it

//  Do this twice so that two corner-to-corner lines cross in the middle - it'll 
//   look like a big red 'x'

