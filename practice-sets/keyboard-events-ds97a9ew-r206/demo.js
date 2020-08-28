// Add your event handler here to listen for keyboard
//   activity and call the functions below as needed.
// SOLUTION: Solutions will test for the four key codes, 
//   37, 38, 39, and 40, and call the appropriate
//   puck-moving function.  An alternate solution would use the 
//   switch statement, seen below the if-else-if solution.

document.addEventListener('keydown', function (event) {
    //left
    if (event.which == 37 || event.keyCode == 37) {
        mvleft();
    }
    //top
    else if (event.which == 38 || event.keyCode == 38) {
        mvup();
    }
    //right
    else if (event.which == 39 || event.keyCode == 39) {
        mvright();
    }
    //bottom
    else if (event.which == 40 || event.keyCode == 40) {
        mvdown();
    }
    
    // Alternate using switch statement (we haven't covered this
    //  but it was in the readings, and you may find it
    //  somewhat straightforward.
    /*
    
    // first get whichever of these isn't undefined
    var key = event.keyCode || event.which;  
    // now test its value
    switch (key) {
        case 37:
            mvleft();
            break;
        case 38:
            mvup();
            break;
        case 39:
            mvright();
            break;
        case 40:
            mvdown();
            break;
    }*/
    
});



// initial location of the puck, and step size
var step = 4;
var top = 90;
var left = 190;

// utility functions that will move the puck
var puck = document.getElementById("puck");

function mvup(){
    top -= step;
    puck.style.top = top + "px";
}
function mvdown(){
    top += step;
    puck.style.top = top + "px";
}
function mvleft(){
    left -= step;
    puck.style.left = left + "px";
}
function mvright(){
    left += step;
    puck.style.left = left + "px";
}
