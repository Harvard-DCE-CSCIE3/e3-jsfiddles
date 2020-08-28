// get the canvas and context objects
var canvas = document.getElementById("c1");
var ctx = canvas.getContext('2d');

// get the image object
var img = $("#orig");

// Draw the image on the canvas.
ctx.drawImage(img[0], 0, 0, canvas.width, canvas.height);

// We can keep drawing with this 'ctx' object.  Let's set some styles 
ctx.strokeStyle = "red";
ctx.lineWidth = "2";

//  Now, we're going to draw a circle on the image. Remember from the example in 
// video 14.4 how to draw a circle, or check the MDN docs:
//  https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc.
//  In steps: 
//    call beginPath() to start the drawing path
//    call arc() to create the circle
//    call stroke() to draw it

//  You will write these three lines of code to circle your favorite dog (of
//    the two here). If you don't have a favorite dog, pick at random. :-)
// SOLUTION NOTE:
ctx.beginPath();
ctx.arc(60, 60, 28, 0, Math.PI*2);  // left dog
ctx.stroke();
// OR 
ctx.beginPath();
ctx.arc(125, 35, 28, 0, Math.PI*2); // right dog
ctx.stroke();

//    You'll need the coordinates of the center of the circle you'll draw.
//    Here are each dog's coordinates: 
//   Baxter (Hound on the left)  60,60
//   Ripley (Dobie on the right) 125,35



