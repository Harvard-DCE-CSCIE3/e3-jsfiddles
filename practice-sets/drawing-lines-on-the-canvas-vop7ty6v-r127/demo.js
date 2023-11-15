// get the canvas and context objects
const canvas = document.getElementById("c1");
const ctx = canvas.getContext('2d');

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


// SOLUTION NOTE: FIRST LINE
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(ctx.canvas.width,ctx.canvas.height);
// ALSO COULD DO:   ctx.lineTo(300,200);
ctx.stroke();

//SECOND LINE
ctx.beginPath();
ctx.moveTo(ctx.canvas.width,0);
ctx.lineTo(0,ctx.canvas.height);
// ALSO COULD DO:   
//  ctx.moveTo(300,0);
//  ctx.lineTo(0,200);
ctx.stroke();



