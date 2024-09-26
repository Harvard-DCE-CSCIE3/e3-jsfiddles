// What's wrong with this?
// The 'console' variable in the global scope collides with 
// the window.console property, which is the JS console we use 
//  every day. Declaring this 'console' variable in the global
//  scope breaks the browser console by overwriting this property.  
    var index = 4, i = 6;   //commonly named variables likely to collide if global
    var console = "Logging integer sum to the console";  
    function add(n, p){
        return n + p;
    }
    logMessage(console + " " + add(index, i));
    //logMessage(`${console} ${add(index, i)}`);


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
    console.log(msg);
}