(function(){

    // Add your event handler here to listen for keyboard
    //   activity and call the functions below as needed.
    // SOLUTION: Solutions will test for the four key codes, 
    //   37, 38, 39, and 40, and call the appropriate
    //   puck-moving function.  An alternate solution would use the 
    //   switch statement, seen below the if-else-if solution.

    document.addEventListener('keydown', function (event) {
        //left
        if (event.key == "ArrowLeft") {
            mvleft();
        }
        //top
        else if (event.key == "ArrowUp") {
            mvup();
        }
        //right
        else if (event.key == "ArrowRight") {
            mvright();
        }
        //bottom
        else if (event.key == "ArrowDown") {
            mvdown();
        }
        
        // Alternate using switch statement (we haven't covered this
        //   but it is an alternate way to handle a series of 'if' statements
        //   testing against a single value.
        /*
   
        switch (event.key) {
            case "ArrowLeft":
                mvleft();
                break;
            case "ArrowUp":
                mvup();
                break;
            case "ArrowRight":
                mvright();
                break;
            case "ArrowDown":
                mvdown();
                break;
        }*/
        
    });



    // initial location of the puck, and step size
    let step = 4;
    let top = 90;
    let left = 190;

    // utility functions that will move the puck
    const puck = document.getElementById("puck");

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

})();