(function(){

    // Add your event handler here to listen for keyboard
    //   activity and call the functions below as needed.



    // initial location of the puck, and step size
    let step = 4;
    let pTop = 90;
    let pLeft = 190;

    // utility functions that will move the puck
    let puck = document.getElementById("puck");

    function mvup(){
        pTop -= step;
        puck.style.top = pTop + "px";
    }
    function mvdown(){
        pTop += step;
        puck.style.top = pTop + "px";
    }
    function mvleft(){
        pLeft -= step;
        puck.style.left = pLeft + "px";
    }
    function mvright(){
        pLeft += step;
        puck.style.left = pLeft + "px";
    }

})();
